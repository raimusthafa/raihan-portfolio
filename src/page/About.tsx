import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { LinkPreview } from "@/components/ui/link-preview";
import { Code2, Palette, Database, Lightbulb } from "lucide-react";

export function AboutSection() {
  const interests = [
    { icon: Code2, title: "Clean Architecture", description: "Building maintainable, scalable systems" },
    { icon: Database, title: "API Development", description: "Creating robust backend solutions" },
    { icon: Palette, title: "UI/UX Design", description: "Crafting intuitive user experiences" },
    { icon: Lightbulb, title: "Problem Solving", description: "Continuously learning & experimenting" }
  ];

  return (
    <section id="about" className="py-10 px-4 md:px-20 mx-auto">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 pb-8 text-center">About Me</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <Card className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 shadow-xl border border-emerald-200 dark:border-emerald-800">
              <CardHeader className="flex flex-row items-start gap-6 pb-4">
                <Avatar className="w-20 h-20 ring-4 ring-emerald-200 dark:ring-emerald-800">
                  <AvatarImage src="/me4.jpeg" alt="My profile" />
                  <AvatarFallback>RMK</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">
                    Software Engineering Student
                  </CardTitle>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Telkom University</p>
                </div>
              </CardHeader>

              <CardContent className="text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed">
                <p>
                  I'm a Software Engineering student at Telkom University with a strong passion for creating modern, intuitive, and scalable digital experiences. I work primarily with
                  <LinkPreview
                    url="https://laravel.com/"
                    className="ml-1 font-semibold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                  >
                    Laravel
                  </LinkPreview>
                  ,
                  <LinkPreview
                    url="https://react.dev/"
                    className="ml-1 font-semibold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                  >
                    React
                  </LinkPreview>
                  ,
                  <LinkPreview
                    url="https://nextjs.org/"
                    className="ml-1 font-semibold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                  >
                    Next.js
                  </LinkPreview>
                  , and
                  <LinkPreview
                    url="https://flutter.dev/"
                    className="ml-1 font-semibold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                  >
                    Flutter
                  </LinkPreview>
                  , and I enjoy exploring how these technologies can be combined to build impactful products across web and mobile platforms.
                </p>
                <p>
                  I'm particularly interested in clean architecture, API development, UI/UX design, and the overall craft of writing high-quality, maintainable code. Beyond technical skills, I'm committed to continuous learning—experimenting with new tools, understanding system design principles, and improving the way I think about solving problems.
                </p>
                <p className="text-emerald-700 dark:text-emerald-300 font-medium">
                  My goal is to grow into a developer who not only builds functional software but also creates meaningful, efficient, and user-centered digital experiences.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300 border-red-300 dark:border-red-800">Laravel</Badge>
                  <Badge variant="outline" className="bg-cyan-50 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300 border-cyan-300 dark:border-cyan-800">React</Badge>
                  <Badge variant="outline" className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-700">Next.js</Badge>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border-blue-300 dark:border-blue-800">TypeScript</Badge>
                  <Badge variant="outline" className="bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300 border-sky-300 dark:border-sky-800">Flutter</Badge>
                  <Badge variant="outline" className="bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800">Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Areas of Interest</h3>
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <Card key={index} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900">
                        <Icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white text-sm mb-1">{interest.title}</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{interest.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
