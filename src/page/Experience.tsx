import { Card, CardContent } from "@/components/ui/card";
import { LinkPreview } from "@/components/ui/link-preview";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Software Engineering Student",
    company: "Telkom University",
    duration: "2025 - Present",
    type: "education",
    url: "https://telkomuniversity.ac.id/",
    description:
      "Pursuing a Bachelor's degree in Software Engineering with a focus on building scalable systems, modern web and mobile development, and software architecture. Actively learning system design, algorithm optimization, and collaborative development practices while working on academic and personal projects.",
    highlights: [
      "System Design & Architecture",
      "Full-Stack Development",
      "Software Engineering Principles",
      "Collaborative Projects"
    ]
  },
  {
    role: "Web Developer",
    company: "CV Tarkiz Paz Banua",
    duration: "Nov 2024 - Agu 2025",
    type: "work",
    url: "https://www.linkedin.com/company/tpazcom/about/",
    description:
      "Building and maintaining responsive, user-centric web applications for diverse clients. Specializing in frontend development with modern frameworks and ensuring seamless user experiences across devices. Collaborating closely with design and backend teams to deliver high-quality, scalable solutions.",
    highlights: [
      "React & Next.js Development",
      "Responsive UI/UX Implementation",
      "Client Project Management",
      "Cross-functional Collaboration"
    ]
  },
  {
    role: "Software Engineering Student",
    company: "SMK Telkom Banjarbaru",
    duration: "2022 - 2025",
    type: "education",
    url: "https://www.smktelkom-bjb.sch.id/web/",
    description:
      "Completed a 3-year vocational program specializing in Software Engineering. Gained hands-on experience in web development, mobile app development, and database management. Participated in various coding competitions and developed real-world applications including attendance systems and e-commerce platforms.",
    highlights: [
      "Laravel & Flutter Development",
      "Database Design & Management",
      "Competitive Programming",
      "Project-Based Learning"
    ]
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 px-4 md:px-20 mx-auto">
      <div className="max-w-[70rem] mx-auto">
        <h2 className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 pb-8 text-center">
          Experience & Education
        </h2>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-600 dark:from-emerald-600 dark:via-emerald-500 dark:to-emerald-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-20">
                <div className="absolute left-[-8px] md:left-[24px] top-2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white dark:border-gray-950 shadow-lg"></div>

                <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-l-4 border-l-emerald-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                      <div className="flex items-center gap-3">
                        {exp.type === "education" ? (
                          <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                            <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          </div>
                        ) : (
                          <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900">
                            <Briefcase className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                          </div>
                        )}
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                            {exp.role}
                          </h3>
                          <LinkPreview url={exp.url}>
                            <p className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition-colors">
                              {exp.company} ↗
                            </p>
                          </LinkPreview>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{exp.duration}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary"
                          className="bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
