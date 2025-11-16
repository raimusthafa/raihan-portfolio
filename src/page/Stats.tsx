import { Card, CardContent } from "@/components/ui/card";
import { LucideRocket, LucideCode, LucideUserCheck, Award } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

interface Stat {
  icon: typeof LucideUserCheck;
  number: number;
  suffix: string;
  title: string;
  desc: string;
  color: string;
  bgColor: string;
}

const stats: Stat[] = [
  {
    icon: LucideUserCheck,
    number: 3,
    suffix: "+",
    title: "Years Experience",
    desc: "In application development using Laravel, React, and Flutter.",
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    icon: LucideRocket,
    number: 6,
    suffix: "+",
    title: "Projects Completed",
    desc: "Ranging from simple CRUD systems to complex web applications.",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    icon: LucideCode,
    number: 5,
    suffix: "+",
    title: "Technologies",
    desc: "Modern tech stack including React, Laravel, TypeScript, and more.",
    color: "text-sky-600 dark:text-sky-400",
    bgColor: "bg-sky-100 dark:bg-sky-900/30",
  },
  {
    icon: Award,
    number: 100,
    suffix: "%",
    title: "Client Satisfaction",
    desc: "Committed to delivering high-quality solutions that exceed expectations.",
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-100 dark:bg-amber-900/30",
  },
];

function CounterAnimation({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold">
      {count}
      {suffix}
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="relative pb-16 pt-16 md:pt-32 px-6 md:px-20 mx-auto overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-300/20 dark:bg-emerald-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl"></div>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Stats & Achievements
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Numbers that showcase my journey and commitment to excellence in software development
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 h-full">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <CardContent className="relative p-6 space-y-4">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 rounded-xl ${stat.bgColor} flex items-center justify-center`}
                  >
                    <Icon className={`w-7 h-7 ${stat.color}`} />
                  </motion.div>

                  {/* Counter */}
                  <div className={`${stat.color}`}>
                    <CounterAnimation target={stat.number} suffix={stat.suffix} />
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {stat.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {stat.desc}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
