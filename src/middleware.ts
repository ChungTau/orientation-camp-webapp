import { NextRequest, NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { getToken } from "next-auth/jwt";
import { fallbackLng, languages, cookieName } from "@/lib/i18n/settings";

acceptLanguage.languages(languages);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|assets|favicon.ico|sw.js|signin|signup).*)"],
};

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // Check for authentication
  const token = await getToken({ req, secret: process.env.SECRET });

  // Language handling
  let lng;
  if (req.cookies.has(cookieName)) {
    lng = acceptLanguage.get(req.cookies.get(cookieName)!.value);
  }
  if (!lng) {
    lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  }
  if (!lng) {
    lng = fallbackLng;
  }

  // Strict locale regex matching
  const validLocaleRegex = /^\/(en|zh-Hant)(\/|$)/;

  // Redirect authenticated users away from sign-in and sign-up pages
  if (token && (pathname.startsWith(`/${lng}/signin`) || pathname.startsWith(`/${lng}/signup`))) {
    return NextResponse.redirect(new URL(`/${lng}`, req.url)); // Redirect to home or any other authenticated page
  }

  // Redirect unauthenticated users to the localized sign-in page
  if (!token) {
    if (!pathname.startsWith(`/${lng}/signin`) && !pathname.startsWith(`/${lng}/signup`)) {
      return NextResponse.redirect(new URL(`/${lng}/signin`, req.url));
    } else {
      return NextResponse.next(); // Allow the sign-in and sign-up pages to be accessed
    }
  }

  // Validate if the path has a valid locale
  if (!validLocaleRegex.test(pathname) && !pathname.startsWith("/_next")) {
    return NextResponse.redirect(new URL(`/${lng}${pathname}`, req.url));
  }

  // Set language cookie from referer if available
  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer")!);
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}/`)
    );
    const response = NextResponse.next();
    if (lngInReferer) {
      response.cookies.set(cookieName, lngInReferer);
    }
    return response;
  }

  return NextResponse.next();
}