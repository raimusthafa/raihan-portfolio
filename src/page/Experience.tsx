import { Card, CardContent } from "@/components/ui/card";
import { LinkPreview } from "@/components/ui/link-preview";

const experiences = [
  {
    role: "Software Engineering Student",
    company: "SMK Telkom Banjarbaru",
    duration: "2022 - 2025",
    url: "https://www.smktelkom-bjb.sch.id/web/",
    description:
      "Pursuing a 3-year vocational education focused on Software Engineering. Active in various school projects and web development competitions.",
  },
  {
    role: "Web Developer",
    company: "CV Tarkiz Paz Banua",
    duration: "Nov 2024 - Present",
    url: "https://www.linkedin.com/company/tpazcom/about/",
    description:
      "Responsible for developing and maintaining web projects assigned by the company from various clients, with a strong emphasis on frontend development and user experience.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-4 md:px-20 mx-auto">
      <div>
        <h2
          className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 pb-8"
        >
          Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <Card
              key={exp.role}
              className="text-left bg-gray-50 dark:bg-gray-900 border border-emerald-200 dark:border-emerald-800 shadow-md"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">{exp.role}</h3>
                <div className="flex gap-4">
                  <LinkPreview url={exp.url}>
                    <p className="underline text-sm text-neutral-600 dark:text-neutral-300">{exp.company}</p>
                  </LinkPreview>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300">{exp.duration}</p>
                </div>
                <p className="mt-2 text-neutral-700 dark:text-neutral-200">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
