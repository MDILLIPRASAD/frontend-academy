import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Globe, Layout, Palette, BookOpen, Rocket, Brain, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Index = () => {
  const handlePurchase = (courseTitle: string, price: string) => {
    toast.success(`Thank you for your interest in ${courseTitle}! This is a demo purchase for ${price}`);
  };

  const individualCourses = [
    {
      title: "Frontend Fundamentals",
      description: "Mastery in HTML5, CSS3, and Modern JavaScript",
      skills: ["HTML5", "CSS3", "JavaScript ES6+"],
      icon: <Code2 className="w-8 h-8 text-blue-500" />,
      price: "$99",
    },
    {
      title: "React Development",
      description: "Building scalable applications with React and its ecosystem",
      skills: ["React", "Redux", "React Query", "Next.js"],
      icon: <Globe className="w-8 h-8 text-green-500" />,
      price: "$149",
    },
    {
      title: "UI/UX Development",
      description: "Creating responsive and accessible user interfaces",
      skills: ["Responsive Design", "Accessibility", "UI Components"],
      icon: <Layout className="w-8 h-8 text-purple-500" />,
      price: "$129",
    },
    {
      title: "Modern Frontend Tools",
      description: "Experience with modern development tools and frameworks",
      skills: ["TypeScript", "Tailwind CSS", "Version Control"],
      icon: <Palette className="w-8 h-8 text-orange-500" />,
      price: "$119",
    },
  ];

  const bundleCourses = [
    {
      title: "Frontend Master Bundle",
      description: "Complete frontend development journey from basics to advanced",
      skills: ["All Individual Courses", "Project Portfolio", "Career Guidance"],
      icon: <Rocket className="w-8 h-8 text-red-500" />,
      price: "$399",
      originalPrice: "$496",
      savings: "20% off",
    },
    {
      title: "React Specialist Track",
      description: "Become a React expert with our specialized bundle",
      skills: ["React Fundamentals", "Advanced Patterns", "Performance Optimization"],
      icon: <Brain className="w-8 h-8 text-indigo-500" />,
      price: "$249",
      originalPrice: "$299",
      savings: "17% off",
    },
    {
      title: "Full Stack Bundle",
      description: "Master both frontend and backend development",
      skills: ["Frontend Complete", "Node.js", "Database Design"],
      icon: <Terminal className="w-8 h-8 text-teal-500" />,
      price: "$599",
      originalPrice: "$749",
      savings: "20% off",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Frontend Developer Courses</h1>
            <p className="text-xl text-muted-foreground">
              Level up your development skills with our comprehensive courses
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Individual Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {individualCourses.map((course, index) => (
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
                      <div className="flex flex-wrap gap-2 justify-center mb-4">
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
                      <p className="text-2xl font-bold text-center text-primary">
                        {course.price}
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <Button 
                        onClick={() => handlePurchase(course.title, course.price)}
                        className="w-full"
                      >
                        Purchase Course
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Course Bundles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {bundleCourses.map((bundle, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-primary">
                    <CardHeader>
                      <div className="flex items-center justify-center mb-4">
                        {bundle.icon}
                      </div>
                      <CardTitle className="text-xl text-center">{bundle.title}</CardTitle>
                      <CardDescription className="text-center">
                        {bundle.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 justify-center mb-4">
                        {bundle.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="text-sm"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="text-center space-y-2">
                        <p className="text-2xl font-bold text-primary">
                          {bundle.price}
                        </p>
                        <p className="text-sm text-muted-foreground line-through">
                          {bundle.originalPrice}
                        </p>
                        <Badge variant="destructive">{bundle.savings}</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <Button 
                        onClick={() => handlePurchase(bundle.title, bundle.price)}
                        className="w-full"
                        variant="default"
                      >
                        Purchase Bundle
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;