"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  Music,
  Settings,
  Video,
  VideoIcon,
  MessageSquare,
} from "lucide-react";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    href: "/conversation",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Image Generation ",
    icon: ImageIcon,
    href: "/images-generation",
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/videos-generation",
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music-generation",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code-generation",
    color: "text-green-700",
    bgColor: "bg-green-700/10",
  },

  {
    label: "Settings",
    icon: Settings,
    href: "/settings-page",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
];

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className=" px-4 md:px20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold"> {tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
