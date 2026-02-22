import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const H2 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <h2 className={cn(`text-2xl font-medium`, className)}>{children}</h2>;
};

export default H2;
