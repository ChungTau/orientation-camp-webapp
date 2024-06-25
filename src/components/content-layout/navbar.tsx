import { UserNav } from "./user-nav";
import { SheetMenu } from "./sheet-menu";
import { ModeToggle } from "../mode-toggle";
import { LangToggle } from "../lang-toggle";
import { TransType } from "@/types/transType";

interface NavbarProps {
  title: string;
}

export function Navbar({ title, t }: NavbarProps & TransType) {
  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu t={t} />
          <h1 className="font-bold">{title}</h1>
        </div>
        <div className="flex flex-1 items-center space-x-3 justify-end">
          <LangToggle t={t}/>
          <ModeToggle t={t} />
          <UserNav t={t} />
        </div>
      </div>
    </header>
  );
}
