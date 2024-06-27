"use client";

import { ChildrenProps } from "@/types/childrenProps";
import { SessionProvider } from "next-auth/react";

const BodyLayout = ({ children }: ChildrenProps) => {
  return <SessionProvider refetchInterval={4 * 60}>{children}</SessionProvider>;
}

export default BodyLayout;
