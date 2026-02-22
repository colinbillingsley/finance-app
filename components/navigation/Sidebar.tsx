import {
  Folders,
  LayoutDashboard,
  LogOut,
  PiggyBank,
  TrendingDown,
  TrendingUp,
  WalletCards,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import NavLink from "./NavLink";

const ICONSIZE: number = 20;
const STROKEWIDTH = 1;

const sidearLinks: [{ icon: ReactNode; title: string; href: string }] = [
  {
    icon: <LayoutDashboard size={ICONSIZE} strokeWidth={STROKEWIDTH} />,
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: <PiggyBank size={ICONSIZE} strokeWidth={STROKEWIDTH} />,
    title: "Budgets",
    href: "/budgets",
  },
  {
    icon: <TrendingDown size={ICONSIZE} strokeWidth={STROKEWIDTH} />,
    title: "Expenses",
    href: "/expenses",
  },
  {
    icon: <TrendingUp size={ICONSIZE} strokeWidth={STROKEWIDTH} />,
    title: "Income",
    href: "/income",
  },
  {
    icon: <Folders size={ICONSIZE} strokeWidth={STROKEWIDTH} />,
    title: "Reports",
    href: "/reprts",
  },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-[5rem] sm:max-w-[10rem] p-2 w-full bg-neutral-100 transition-all">
      <div className="flex items-center justify-center gap-2 mb-6 p-4 text-sm">
        <WalletCards
          className="shrink-0"
          size={ICONSIZE}
          strokeWidth={STROKEWIDTH}
        />
        <p className="hidden sm:block text-nowrap">Finance App</p>
      </div>

      <nav>
        <ul className="">
          {sidearLinks.map((link, index) => (
            <li key={`${index}-${link.href}`}>
              <NavLink icon={link.icon} href={link.href} title={link.title} />
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto flex items-center justify-center gap-2 p-4 hover:cursor-pointer hover:bg-neutral-200 text-sm transition-all ease-out duration-[300ms]">
        <i>
          <LogOut
            className="shrink-0"
            size={ICONSIZE}
            strokeWidth={STROKEWIDTH}
          />
        </i>
        <p className="hidden sm:block">Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
