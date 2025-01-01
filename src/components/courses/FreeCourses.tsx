import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, Terminal, Palette } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const freeCourses = [
  {
    id: "web-dev-basics",
    title: "Web Development Basics",
    description: "Introduction to HTML, CSS, and JavaScript fundamentals",
    skills: ["HTML", "CSS", "Basic JavaScript"],
    icon: <Code2 className="w-8 h-8 text-blue-400" />,
    duration: "2 hours",
  },
  {
    id: "git-essentials",
    title: "Git Essentials",
    description: "Learn version control basics with Git",
    skills: ["Git", "GitHub", "Version Control"],
    icon: <Terminal className="w-8 h-8 text-gray-500" />,
    duration: "1.5 hours",
  },
  {
    id: "ui-design",
    title: "UI Design Principles",
    description: "Basic principles of user interface design",
    skills: ["Design Theory", "Color Theory", "Typography"],
    icon: <Palette className="w-8 h-8 text-pink-500" />,
    duration: "2.5 hours",
  },
];

export const FreeCourses = () => {
  const navigate = useNavigate();

  const handleEnroll = (e: React.MouseEvent, courseId: string, courseTitle: string) => {
    e.stopPropagation(); // Prevent card click event
    toast.success(`Successfully enrolled in ${courseTitle}! Check your email for next steps.`);
    navigate(`/course/${courseId}`);
  };

  const handleCardClick = (courseId: string) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div id="free-courses">
      <h2 className="text-2xl font-semibold mb-6">Free Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {freeCourses.map((course) => (
          <Card 
            key={course.id} 
            className="hover:shadow-lg transition-shadow cursor-pointer" 
            onClick={() => handleCardClick(course.id)}
          >
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
              <p className="text-center text-muted-foreground">
                Duration: {course.duration}
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button 
                onClick={(e) => handleEnroll(e, course.id, course.title)}
                variant="outline"
                className="w-full"
              >
                Enroll Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};