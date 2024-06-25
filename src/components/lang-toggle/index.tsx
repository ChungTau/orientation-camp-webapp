"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip";
import { LanguagesIcon } from "lucide-react";
import { TransType } from "@/types/transType";
import { LocaleLink } from "../localeLink";
import { usePathname } from "next/navigation";

export function LangToggle({t}:TransType) {
  const pathName = usePathname();
  const segments = pathName.split("/").filter(Boolean); // Split and remove empty segments
  const basePath = segments[0] === "en" ? "zh-Hant": "en"; 

  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button
            className="rounded-full w-8 h-8 bg-background"
            variant="outline"
            size="icon"
          >
            <LocaleLink locale={basePath}>
              <LanguagesIcon className="w-[1.2rem] h-[1.2rem]" />
            </LocaleLink>
            
            
            <span className="sr-only">{t("switch-language")}</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">{t("switch-language")}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
