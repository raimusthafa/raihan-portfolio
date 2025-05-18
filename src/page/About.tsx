import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { LinkPreview } from "@/components/ui/link-preview";

export function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 md:px-20 mx-auto">
      <h2 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 pb-8">About Me</h2>

      <Card className="bg-gray-50 dark:bg-gray-900 shadow-xl border border-emerald-200 dark:border-emerald-800">
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src="/me.jpg" alt="My profile" />
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-xl font-bold text-gray-800 dark:text-white">12th Grade Vocational High School Student</CardTitle>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Future Informatics Undergraduate</p>
          </div>
        </CardHeader>

        <CardContent className="text-gray-700 dark:text-gray-300 space-y-4">
          <p>
            I am a 12th grade vocational high school student focusing on software development using
            <LinkPreview
              url="https://laravel.com/"
              className="ml-1 font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
              Laravel,
            </LinkPreview>
            <LinkPreview
              url="https://react.dev/"
              className="ml-1 mr-1 font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
              React,
            </LinkPreview>
            and
            <LinkPreview
              url="https://flutter.dev/"
              className="ml-1 font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
              Flutter
            </LinkPreview>
            . Im passionate about building interactive and impactful web and mobile applications.
          </p>
          <p>
            Ive created a school attendance app, a student data management system, and an educational marketplace. Currently, I’m actively developing my skills through various personal projects.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">Laravel</Badge>
            <Badge variant="outline" className="bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200">React</Badge>
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">TypeScript</Badge>
            <Badge variant="outline" className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200">Flutter</Badge>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
