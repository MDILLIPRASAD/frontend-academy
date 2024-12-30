import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Browser, Layout, Palette } from "lucide-react";

const Index = () => {
  const courses = [
    {
      title: "Frontend Fundamentals",
      description: "Mastery in HTML5, CSS3, and Modern JavaScript",
      skills: ["HTML5", "CSS3", "JavaScript ES6+"],
      icon: <Code2 className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "React Development",
      description: "Building scalable applications with React and its ecosystem",
      skills: ["React", "Redux", "React Query", "Next.js"],
      icon: <Browser className="w-8 h-8 text-green-500" />,
    },
    {
      title: "UI/UX Development",
      description: "Creating responsive and accessible user interfaces",
      skills: ["Responsive Design", "Accessibility", "UI Components"],
      icon: <Layout className="w-8 h-8 text-purple-500" />,
    },
    {
      title: "Modern Frontend Tools",
      description: "Experience with modern development tools and frameworks",
      skills: ["TypeScript", "Tailwind CSS", "Version Control"],
      icon: <Palette className="w-8 h-8 text-orange-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Frontend Developer Portfolio</h1>
            <p className="text-xl text-muted-foreground">
              Showcasing my expertise in modern web development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    {course.icon}
                  </div>
                  <CardTitle className="text-xl text-center">{course.title}</CardTitle>
                  <CardDescription className="text-center">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {course.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;