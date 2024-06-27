import { MenuIcon, Tent } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "../menu";
import { APP_TITLE } from "@/config/app";
import { LocaleLink } from "../localeLink";
import { TransType } from "@/types/transType";

export function SheetMenu({t}:TransType) {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button className="h-8" variant="outline" size="icon">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:w-72 px-3 h-full flex flex-col max-w-[320px] dark:bg-zinc-800 bg-zinc-50" side="left">
        <SheetHeader>
          <Button
            className="flex justify-center items-center pb-2 pt-1"
            variant="link"
            asChild
          >
            <LocaleLink href="/" className="flex items-center gap-2">
              <Tent className="w-6 h-6 mr-1" />
              <h1 className="font-bold mr-3 text-lg">{APP_TITLE}</h1>
            </LocaleLink>
          </Button>
        </SheetHeader>
        <Menu t={t} isOpen />
      </SheetContent>
    </Sheet>
  );
}
