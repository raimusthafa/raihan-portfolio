"use client";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { SiNextdotjs, SiReact, SiTailwindcss, SiCss3, SiTypescript, SiShadcnui   } from "react-icons/si";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FaLaravel } from "react-icons/fa";
import LinearCardDialog from "@/components/Tes/Cardui";
const projects = [
  {
    title: "Sweet Bakery",
    description: "A web application for a bakery business to manage menu, orders, and customer interactions.",
    imageUrl: "/bakery.jpg",
    tech: [
      <SiReact key="react" />,
      <SiTailwindcss key="tailwind" />,
      <AiOutlineAntDesign  key="antd" />, 
      <FaLaravel key="laravel" />, 
      <SiTypescript  key="ts" />, 
    ],
  },
  {
    title: "Task Management",
    description: "A modern task management app built with Next.js and Shadcn UI to track productivity effectively.",
    imageUrl: "/task.jpg",
    tech: [
      <SiNextdotjs key="next" />,
      <SiReact key="react" />,
      <SiTailwindcss key="tailwind" />,
      <SiTypescript key="ts" />,
      <SiShadcnui  key="shadcn" />,
    ],
  },
  {
    title: "Usaha Kesehatan Sekolah",
    description: "A school health management system that records and monitors student health activities.",
    imageUrl: "/uks.jpg",
    tech: [
      <FaLaravel key="laravel" />,
      <SiCss3 key="css" />,
    ],
  },
];


export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-4 md:px-20 mx-auto">
      <h2 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">I love building things</h2>
      {/* <div className="grid md:grid-cols-3 md:gap-8">
        {projects.map((project, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className=" bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-900 dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border border-emerald-200 dark:border-emerald-800">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {project.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-6">
                <CardItem
                  translateZ={20}
                  as="div"
                  className="flex gap-2 text-xl dark:text-white text-neutral-700"
                >
                  {project.tech.map((icon, i) => (
                    <span key={i}>{icon}</span>
                  ))}
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  See More
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div> */}
      <LinearCardDialog/>

    </section>
  );
}
