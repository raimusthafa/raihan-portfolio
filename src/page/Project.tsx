"use client";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiShadcnui } from "react-icons/si";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FaLaravel } from "react-icons/fa";
import { useState } from "react";
import ProjectModal, { type ProjectDetail } from "@/components/ProjectModal";
import { FaGolang } from "react-icons/fa6";

const projects: ProjectDetail[] = [
  {
   title: "Sweet Bakery — E-Commerce Bakery Platform",
   description: "A full-stack bakery e-commerce platform with React TypeScript frontend and Laravel backend, featuring product catalogs, testimonials, and location services.",
   longDescription: "Sweet Bakery is a comprehensive e-commerce platform designed specifically for bakery businesses to showcase and sell their products online. The frontend, built with React 19, TypeScript, and modern UI libraries including Ant Design and Tailwind CSS, delivers a responsive and engaging user experience. Key features include an interactive product catalog with best sellers showcase, customer testimonials carousel, integrated Google Maps for store location, and smooth animations powered by Framer Motion and AOS. The platform integrates React Query for efficient data fetching, React Router for seamless navigation, and Zustand for state management. The backend, powered by Laravel, provides robust API endpoints for product management, order processing, and customer data handling. The application demonstrates expertise in full-stack development, modern React patterns, UI/UX design principles, and building scalable e-commerce solutions for food service businesses.",
   images: ["/bakery/bkr1.jpg", "/bakery/bkr3.png", "/bakery/bkr2.png"],
    tech: [
      <SiReact key="react" />,
      <SiTailwindcss key="tailwind" />,
      <AiOutlineAntDesign key="antd" />,
      <FaLaravel key="laravel" />,
      <SiTypescript key="ts" />,
    ],
    techNames: ["React", "Tailwind CSS", "Ant Design", "Laravel", "TypeScript"],
    liveUrl: "https://swtbakery.vercel.app/",
    githubRepos: [
      { label: "Frontend Repository", url: "https://github.com/raimusthafa/bakery-fe" },
      { label: "Backend Repository", url: "https://github.com/raimusthafa/bakery-fe" }
    ],
    status: "in_progress",
  },
  {
    title: "Simple POS (Point of Sale) System",
    description: "A comprehensive POS system built with the modern T3 Stack featuring product management, payment integration, and real-time order processing.",
    longDescription: "Simple POS is a full-stack Point of Sale application designed for retail businesses to manage their operations efficiently. Built with the cutting-edge T3 Stack (Next.js 15, React 19, TypeScript, tRPC, Prisma), the system offers complete product and inventory management, category organization, and seamless order processing. Key features include drag-and-drop product image uploads, QR code payment integration via Xendit, real-time order tracking, and comprehensive sales management. The application leverages Clerk for secure authentication, Supabase for cloud storage, and PostgreSQL for robust data management. With its responsive design, dark mode support, and modern UI built with Radix UI components, the system provides an intuitive experience for both staff and customers. The project demonstrates proficiency in modern web development technologies, payment gateway integration, database design, and building scalable e-commerce solutions.",
    images: ["/pos/pos1.png", "/pos/pos2.png", "/pos/pos3.png", "/pos/pos4.png", "/pos/pos5.png"],
    tech: [
      <SiNextdotjs key="next" />,
      <SiReact key="react" />,
      <SiTailwindcss key="tailwind" />,
      <SiTypescript key="ts" />,
      <SiShadcnui key="shadcn" />,
    ],
    techNames: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Shadcn UI"],
    liveUrl: "",
    githubUrl: "https://github.com/raimusthafa/simple-pos",
    status: "in_progress",
  },
  {
    title: "TaskFun — Modern Task Management App",
    description: "A comprehensive task management application built with React, Vite, and TypeScript featuring interactive dashboards, multiple task views, and powerful data visualization.",
    longDescription: "TaskFun is a modern web-based task management application designed to help users organize, monitor, and evaluate their tasks efficiently and enjoyably. Built with cutting-edge technologies including React 19, Vite, TypeScript, and Tailwind CSS, the application offers a comprehensive suite of productivity features. The system includes an interactive dashboard with task statistics and performance graphs, multiple task viewing modes (Card, Table, and Calendar views), task history tracking, and data visualization using Recharts. Enhanced with Framer Motion animations for smooth user interactions, React Hotkeys for keyboard shortcuts, and Zustand for state management, TaskFun delivers a responsive and intuitive user experience. The application demonstrates proficiency in modern React development, TypeScript implementation, advanced UI/UX design patterns, and building scalable productivity applications.",
    images: ["/taskfun/dashboardfix.jpg", "/taskfun/tugas.jpg", "/taskfun/riwayat.png", "/taskfun/kalender.jpg"],
    tech: [
      <SiReact key="react" />,
      <SiTailwindcss key="tailwind" />,
      <SiTypescript key="ts" />,
      <FaGolang key="go" />,
      <AiOutlineAntDesign key="antd" />,
    ],
    techNames: ["React", "Tailwind CSS", "TypeScript", "Golang", "Ant Design"],
    liveUrl: "https://taskfun-fe.vercel.app/",
    githubRepos: [
      { label: "Frontend Repository", url: "https://github.com/raimusthafa/taskfun-fe-new" },
      { label: "Backend Repository", url: "https://github.com/raimusthafa/taskfun-backend" }
    ],
    status: "in_progress",
  },
];


export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: ProjectDetail) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className="py-12 px-4 md:px-20 mx-auto max-w-[85rem]">
      <h2 className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 text-center">I love building things</h2>
      <div className="grid md:grid-cols-3 md:gap-8">
        {projects.map((project, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className=" bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-900 dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border border-emerald-200 dark:border-emerald-800">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white line-clamp-1"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-2"
              >
                {project.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={project.images[0]}
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
                  onClick={() => handleOpenModal(project)}
                  className="cursor-pointer px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  See More
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  );
}
