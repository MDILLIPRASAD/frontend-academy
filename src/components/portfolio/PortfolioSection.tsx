import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, BookOpen, Rocket, Target, Trophy } from "lucide-react";

export const PortfolioSection = () => {
  const stats = [
    {
      title: "Students Enrolled",
      value: "10,000+",
      icon: <Users className="w-8 h-8 text-blue-500" />,
      description: "Active learners worldwide"
    },
    {
      title: "Course Completion Rate",
      value: "94%",
      icon: <Award className="w-8 h-8 text-green-500" />,
      description: "Success rate among our students"
    },
    {
      title: "Available Courses",
      value: "50+",
      icon: <BookOpen className="w-8 h-8 text-purple-500" />,
      description: "Diverse learning paths"
    },
    {
      title: "Career Transitions",
      value: "2,000+",
      icon: <Rocket className="w-8 h-8 text-orange-500" />,
      description: "Students who landed tech jobs"
    },
    {
      title: "Industry Partners",
      value: "100+",
      icon: <Target className="w-8 h-8 text-red-500" />,
      description: "Companies hiring our graduates"
    },
    {
      title: "Student Projects",
      value: "5,000+",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      description: "Real-world portfolio projects"
    }
  ];

  return (
    <div id="portfolio" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering students worldwide to achieve their dreams through quality education and practical learning experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <CardTitle className="text-2xl text-center">{stat.value}</CardTitle>
                <CardDescription className="text-center text-lg font-medium">
                  {stat.title}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};