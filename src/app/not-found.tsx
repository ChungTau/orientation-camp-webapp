import { LocaleLink } from "@/components/localeLink";
import { darker_grotesque } from "@/lib/font";
import { cn } from "@/lib/utils";


const Custom404 = () => {
    return (
        <body
        suppressHydrationWarning
        className={cn(`min-h-screen bg-white text-zinc-800 overflow-y-hidden dark:bg-zinc-800 dark:text-white ${darker_grotesque.className} antialiased overflow-y-hidden`, darker_grotesque.variable)}>
            <div className="flex items-center justify-center min-h-screen">
            <div className="p-10shadow-lg rounded-lg text-center">
                <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
                <p className="text-xl mb-8">Oops! The page you are looking for does not exist.</p>
                <LocaleLink href={'/'} className={"rounded-md dark:bg-zinc-700 bg-gray-300 px-4 py-2"}>
                    
                        Go back to Home
                </LocaleLink>
            </div>
         </div>
        </body>
    );
}

export default Custom404;