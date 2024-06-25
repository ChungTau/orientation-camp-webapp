'use client';

import {LayoutProps} from "@/types/layoutProps";

export default function AuthLayout({ children, params: { lng } }: LayoutProps) {
  return (
    <div className="flex overflow-y-hidden justify-center bg-white dark:bg-neutral-800">
      <main className="flex flex-col w-full overflow-y-auto h-screen items-center z-0">
          {children}
      </main>
    </div>
  );
}