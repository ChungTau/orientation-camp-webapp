import Link from "next/link";
import { APP_TITLE } from "@/config/app";

export default function Footer() {
    return (
        
            <div className="text-center py-3 bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div>
                    <Link className="flex-none text-base font-semibold font-kalam text-black dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/" aria-label="Brand">{APP_TITLE}</Link>
                </div>

                <div className="mt-1 text-sm">
                    <p className="text-gray-500">© Copy right 2024 - 2025</p>
                    <p className="text-gray-500">{`All rights reserved. Powered by the ${APP_TITLE}`}</p>
                </div>
            </div>
    );
};