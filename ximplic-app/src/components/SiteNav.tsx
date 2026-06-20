import type { ReactNode } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, Cpu, Code2, CircuitBoard, LayoutGrid, Building2, Newspaper, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import RequestAccessButton from "@/components/RequestAccessButton";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const TEAL = "#2BE8A5";

interface Sub { title: string; description: string; icon: ReactNode; to: string }
interface Item { title: string; to: string; items?: Sub[] }

const menu: Item[] = [
  { title: "Technology", to: "/technology" },
  {
    title: "Products",
    to: "/products",
    items: [
      { title: "All products", description: "Overview of the platform", icon: <LayoutGrid className="size-5 shrink-0" style={{ color: TEAL }} />, to: "/products" },
      { title: "Vyzora", description: "The Virtual Prototype, evaluate in software", icon: <Cpu className="size-5 shrink-0" style={{ color: TEAL }} />, to: "/products/vyzora" },
      { title: "Vextyl", description: "The Compiler, map any ONNX model", icon: <Code2 className="size-5 shrink-0" style={{ color: TEAL }} />, to: "/products/vextyl" },
      { title: "Xengra", description: "The RTL IP, synthesisable in-memory core", icon: <CircuitBoard className="size-5 shrink-0" style={{ color: TEAL }} />, to: "/products/xengra" },
    ],
  },
  {
    title: "About",
    to: "/about",
    items: [
      { title: "Company", description: "Team and story", icon: <Building2 className="size-5 shrink-0" style={{ color: TEAL }} />, to: "/about" },
      { title: "News", description: "Latest updates", icon: <Newspaper className="size-5 shrink-0" style={{ color: TEAL }} />, to: "/news" },
      { title: "Events", description: "Talks and meetups", icon: <Calendar className="size-5 shrink-0" style={{ color: TEAL }} />, to: "/events" },
    ],
  },
];

const triggerBase =
  "relative bg-transparent hover:bg-white/5 focus:bg-white/5 data-[state=open]:bg-white/5 transition-colors";
// teal underline tab-indicator for the current route
const activeMark =
  "text-white after:absolute after:left-3 after:right-3 after:bottom-1 after:h-[2px] after:rounded-full after:bg-[#2BE8A5]";
const idle = "text-white/70 hover:text-white data-[state=open]:text-white";

function SubLink({ s, onClick }: { s: Sub; onClick?: () => void }) {
  return (
    <Link
      to={s.to}
      onClick={onClick}
      className="flex select-none gap-3 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5"
    >
      {s.icon}
      <div>
        <div className="text-sm font-semibold text-white">{s.title}</div>
        <p className="text-sm leading-snug text-white/45">{s.description}</p>
      </div>
    </Link>
  );
}

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isActive = (item: Item) =>
    pathname === item.to ||
    pathname.startsWith(item.to + "/") ||
    (item.items?.some((s) => pathname === s.to || pathname.startsWith(s.to + "/")) ?? false);

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* desktop */}
        <div className="flex items-center gap-6">
          <Link to="/" className="group flex items-center gap-2.5">
            <img src="/XIM_Logo/ximplic-mark-white.svg" alt="Ximplic" className="w-7 h-7 transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:rotate-90" />
            <span className="text-lg font-semibold tracking-tight">Ximplic</span>
          </Link>
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {menu.map((item) =>
                item.items ? (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className={cn(triggerBase, isActive(item) ? activeMark : idle)} onClick={() => navigate(item.to)}>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-80 p-2">
                        {item.items.map((s) => (
                          <li key={s.title}>
                            <NavigationMenuLink asChild>
                              <SubLink s={s} />
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={item.to}
                        className={cn(
                          "relative inline-flex h-9 w-max items-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-white/5",
                          isActive(item) ? activeMark : "text-white/70 hover:text-white",
                        )}
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <RequestAccessButton className="text-sm font-medium px-4 py-2 rounded-md text-black transition-transform hover:scale-[1.03] active:scale-95" style={{ background: TEAL }}>Request evaluation</RequestAccessButton>
        </div>

        {/* mobile */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="inline-flex items-center justify-center rounded-md size-10 border border-white/15 text-white hover:bg-white/5 transition-colors" aria-label="Menu">
                <Menu className="size-4" />
              </button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto bg-black border-white/10 text-white">
              <SheetHeader>
                <SheetTitle>
                  <Link to="/" onClick={() => setOpen(false)} className="group flex items-center gap-2.5">
                    <img src="/XIM_Logo/ximplic-mark-white.svg" alt="Ximplic" className="w-7 h-7 transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:rotate-90" />
                    <span className="text-lg font-semibold text-white">Ximplic</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-5">
                <Accordion type="single" collapsible className="flex w-full flex-col">
                  {menu.map((item) =>
                    item.items ? (
                      <AccordionItem key={item.title} value={item.title} className="border-white/10">
                        <AccordionTrigger className={cn("py-3 font-semibold hover:no-underline", isActive(item) ? "text-[#2BE8A5]" : "text-white")}>{item.title}</AccordionTrigger>
                        <AccordionContent className="pb-2">
                          {item.items.map((s) => <SubLink key={s.title} s={s} onClick={() => setOpen(false)} />)}
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      <Link key={item.title} to={item.to} onClick={() => setOpen(false)} className={cn("py-3 font-semibold border-b border-white/10", isActive(item) ? "text-[#2BE8A5]" : "text-white")}>{item.title}</Link>
                    )
                  )}
                </Accordion>
                <div className="flex flex-col gap-2">
                  <RequestAccessButton onClick={() => setOpen(false)} className="text-sm font-medium px-4 py-2.5 rounded-md text-center text-black" style={{ background: TEAL }}>Request evaluation</RequestAccessButton>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
