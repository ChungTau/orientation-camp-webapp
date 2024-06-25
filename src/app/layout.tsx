import type { Metadata } from "next";
import "@/styles/globals.css";
import { languages } from "@/lib/i18n/settings";
import { LayoutProps } from "@/types/layoutProps";

export const metadata: Metadata = {
  title: "OCamp App",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({lng}));
}

export default function RootLayout({children, params: {
  lng
}} : LayoutProps) {
  return (
      <html lang={lng}
       suppressHydrationWarning>
          {children}
      </html>
  );
}