import { Header } from "@/components/layout/Header";
import { FreeCourses } from "@/components/courses/FreeCourses";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, Globe, Layout, Palette, Rocket, Brain, Terminal, GraduationCap, Users, Calendar, Building } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const handlePurchase = (courseTitle: string, price: string) => {
    toast.success(`Thank you for your interest in ${courseTitle}! This is a demo purchase for ${price}`);
  };

  const handleEnroll = (courseTitle: string) => {
    toast.success(`Successfully enrolled in ${courseTitle}! Check your email for next steps.`);
  };

  const handleRegister = (eventTitle: string) => {
    toast.success(`Successfully registered for ${eventTitle}! Check your email for the confirmation.`);
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

  const careerTracks = [
    {
      title: "Frontend Engineer Track",
      description: "Complete path to becoming a professional frontend engineer",
      duration: "6 months",
      icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
      includes: ["All Frontend Courses", "React Specialist Track", "Career Mentorship"],
      price: "$999",
      originalPrice: "$1,299",
      savings: "23% off",
    },
    {
      title: "UI/UX Designer Track",
      description: "Comprehensive journey to becoming a UI/UX designer",
      duration: "5 months",
      icon: <Palette className="w-8 h-8 text-pink-600" />,
      includes: ["UI/UX Courses", "Design Systems", "Portfolio Building"],
      price: "$899",
      originalPrice: "$1,199",
      savings: "25% off",
    },
  ];

  const upcomingWorkshops = [
    {
      title: "Advanced React Patterns",
      date: "March 15, 2024",
      time: "10:00 AM - 2:00 PM EST",
      instructor: "Sarah Johnson",
      price: "$149",
      icon: <Calendar className="w-8 h-8 text-indigo-500" />,
      spots: "15 spots left",
    },
    {
      title: "Building Design Systems",
      date: "March 20, 2024",
      time: "1:00 PM - 5:00 PM EST",
      instructor: "Michael Chen",
      price: "$129",
      icon: <Layout className="w-8 h-8 text-green-500" />,
      spots: "8 spots left",
    },
  ];

  const enterpriseOptions = {
    title: "Enterprise Training Solutions",
    description: "Customized training programs for your team",
    features: [
      "Custom curriculum development",
      "Private group sessions",
      "Progress tracking",
      "Certification program",
    ],
    icon: <Building className="w-8 h-8 text-slate-700" />,
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Frontend Developer Academy</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive learning paths for modern web development
            </p>
          </div>

          <FreeCourses />

          {/* Individual Courses Section */}
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

          {/* Course Bundles Section */}
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
                    >
                      Purchase Bundle
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Career Tracks Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Career Tracks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {careerTracks.map((track, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-purple-500">
                  <CardHeader>
                    <div className="flex items-center justify-center mb-4">
                      {track.icon}
                    </div>
                    <CardTitle className="text-xl text-center">{track.title}</CardTitle>
                    <CardDescription className="text-center">
                      {track.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {track.includes.map((item, itemIndex) => (
                        <Badge
                          key={itemIndex}
                          variant="secondary"
                          className="text-sm"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-center space-y-2">
                      <p className="text-2xl font-bold text-primary">
                        {track.price}
                      </p>
                      <p className="text-sm text-muted-foreground line-through">
                        {track.originalPrice}
                      </p>
                      <Badge variant="destructive">{track.savings}</Badge>
                      <p className="text-sm text-muted-foreground">
                        Duration: {track.duration}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button 
                      onClick={() => handlePurchase(track.title, track.price)}
                      className="w-full"
                      variant="secondary"
                    >
                      Start Career Track
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Workshops & Events Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Upcoming Workshops & Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingWorkshops.map((workshop, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-center mb-4">
                      {workshop.icon}
                    </div>
                    <CardTitle className="text-xl text-center">{workshop.title}</CardTitle>
                    <CardDescription className="text-center">
                      With {workshop.instructor}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-center">
                      <p className="text-muted-foreground">{workshop.date}</p>
                      <p className="text-muted-foreground">{workshop.time}</p>
                      <Badge variant="outline" className="mt-2">
                        {workshop.spots}
                      </Badge>
                      <p className="text-2xl font-bold text-primary mt-4">
                        {workshop.price}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button 
                      onClick={() => handleRegister(workshop.title)}
                      variant="outline"
                      className="w-full"
                    >
                      Register Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Enterprise Section */}
          <div>
            <Card className="hover:shadow-lg transition-shadow border-2 border-slate-200">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  {enterpriseOptions.icon}
                </div>
                <CardTitle className="text-2xl text-center">{enterpriseOptions.title}</CardTitle>
                <CardDescription className="text-center">
                  {enterpriseOptions.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {enterpriseOptions.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-sm">
                        {feature}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button 
                  onClick={() => toast.success("Thank you for your interest! Our team will contact you shortly.")}
                  variant="default"
                  className="w-full"
                >
                  Contact Sales
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
