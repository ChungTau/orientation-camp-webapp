"use client";

import Sidebar from "@/components/sidebar/client";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import { useStore } from "@/hooks/use-store";
import { cn } from "@/lib/utils";
import { LayoutProps } from "@/types/layoutProps";

const MainLayout = ({ children, params }: LayoutProps) => {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  if (!sidebar) return null;
  return (
    <>
      <Sidebar lng={params.lng} />
      <main
        className={cn(
          "min-h-[calc(100vh)] bg-zinc-100 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
          sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        {children}
      </main>
    </>
  );
};

export default MainLayout;
