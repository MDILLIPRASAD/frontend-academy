import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Book, Users, Trophy } from "lucide-react";
import { toast } from "sonner";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // This would typically come from an API, using static data for demo
  const courseDetails = {
    title: "Web Development Basics",
    description: "Introduction to HTML, CSS, and JavaScript fundamentals",
    longDescription: "This comprehensive course covers everything you need to know about web development basics. From HTML structure to CSS styling and JavaScript interactivity, you'll learn the core concepts that power modern websites.",
    skills: ["HTML", "CSS", "Basic JavaScript"],
    duration: "2 hours",
    lessons: 12,
    students: 1500,
    price: "$99",
    curriculum: [
      "Introduction to Web Development",
      "HTML Fundamentals",
      "CSS Styling Basics",
      "JavaScript Essentials",
      "Responsive Design",
      "Basic DOM Manipulation",
    ]
  };

  const handleEnroll = () => {
    toast.success(`Successfully enrolled in ${courseDetails.title}! Check your email for next steps.`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        onClick={() => navigate(-1)}
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl">{courseDetails.title}</CardTitle>
          <CardDescription className="text-lg">{courseDetails.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <Clock className="mr-2 h-5 w-5 text-muted-foreground" />
              <span>{courseDetails.duration}</span>
            </div>
            <div className="flex items-center">
              <Book className="mr-2 h-5 w-5 text-muted-foreground" />
              <span>{courseDetails.lessons} lessons</span>
            </div>
            <div className="flex items-center">
              <Users className="mr-2 h-5 w-5 text-muted-foreground" />
              <span>{courseDetails.students} students</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Course Overview</h3>
            <p className="text-muted-foreground">{courseDetails.longDescription}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Skills You'll Learn</h3>
            <div className="flex flex-wrap gap-2">
              {courseDetails.skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Curriculum</h3>
            <ul className="space-y-2">
              {courseDetails.curriculum.map((item, index) => (
                <li key={index} className="flex items-center">
                  <Trophy className="mr-2 h-4 w-4 text-muted-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <div className="text-2xl font-bold">{courseDetails.price}</div>
          <Button onClick={handleEnroll}>Enroll Now</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CourseDetails;