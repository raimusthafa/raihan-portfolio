// src/components/StatsSection.tsx
import { Card, CardContent } from "@/components/ui/card";
import { LucideRocket, LucideCode, LucideUserCheck } from "lucide-react";

const stats = [
  {
    icon: <LucideUserCheck className="text-emerald-600 w-6 h-6" />,
    title: "3+ Years of Experience",
    desc: "In application development using Laravel, React, and Flutter.",
  },
  {
    icon: <LucideRocket className="text-purple-600 w-6 h-6" />,
    title: "6+ Projects Completed",
    desc: "Ranging from simple CRUD systems to complex web applications.",
  },
  {
    icon: <LucideCode className="text-sky-600 w-6 h-6" />,
    title: "Multi Platform",
    desc: "Web and mobile apps built with a modern tech stack.",
  },
];

export function StatsSection() {
  return (
    <section className="pb-16 pt-16 md:pt-32 px-10 md:px-20 mx-auto">
      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="transition hover:scale-[1.02] bg-gray-50 dark:bg-gray-900 shadow-md border border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-6 space-y-2">
              <div>{stat.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{stat.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
