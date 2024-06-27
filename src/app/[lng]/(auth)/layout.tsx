'use client';

import { ChildrenProps } from "@/types/childrenProps";

const AuthLayout = ({ children }: ChildrenProps) => {
  return (
    <div className="flex overflow-y-hidden justify-center bg-white dark:bg-neutral-800">
      <main className="flex flex-col w-full overflow-y-auto h-screen items-center z-0">
          {children}
      </main>
    </div>
  );
}

export default AuthLayout;