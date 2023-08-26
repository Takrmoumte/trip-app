"use client";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  Music,
  Settings,
  Video,
  VideoIcon,
} from "lucide-react";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Image Generation ",
    icon: ImageIcon,
    href: "/images",
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/videos",
    color: "text-orange-700",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
  },

  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-blue-500",
  },
];
const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className=" space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="Logo" src="/images/boussole.svg" />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            {" "}
            Travel AI
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                `flex flex-1  items-center ${
                  route.href == pathname ? "bg-[#18243d]" : ""
                }  space-x-3 p-2 rounded-md hover:text-white hover:bg-white/10 rounded-transition`
              )}
            >
              <div className="flex items-center p-2 space-x-3 rounded-md">
                <route.icon className={cn("w-5 h-5 mr-2", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
