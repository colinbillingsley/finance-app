"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const NavLink = ({
  icon,
  title,
  href,
}: {
  icon: ReactNode;
  title: string;
  href: string;
}) => {
  const pathName = usePathname();

  const isActive = pathName === href;
  return (
    <Link
      href={href}
      className={cn(
        `flex items-center justify-center sm:justify-start gap-2 p-4 hover:bg-neutral-200 text-sm transition-all ease-out duration-[300ms]`,
        isActive ? "bg-neutral-300" : "",
      )}
    >
      <i className="shrink-0">{icon}</i>
      <p className="hidden sm:block">{title}</p>
    </Link>
  );
};

export default NavLink;
