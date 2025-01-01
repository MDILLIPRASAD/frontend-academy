import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Book, Users, Trophy } from "lucide-react";
import { toast } from "sonner";

export const courseDetailsData = {
  "web-dev-basics": {
    title: "Web Development Basics",
    description: "Introduction to HTML, CSS, and JavaScript fundamentals",
    longDescription: "Master the core technologies that power the modern web. This comprehensive course covers everything from basic HTML structure to advanced CSS layouts and JavaScript interactivity.",
    skills: ["HTML", "CSS", "Basic JavaScript"],
    duration: "2 hours",
    lessons: 12,
    students: 1500,
    curriculum: [
      "Introduction to Web Development",
      "HTML5 Structure and Semantics",
      "CSS Styling and Layouts",
      "JavaScript Fundamentals",
      "DOM Manipulation",
      "Responsive Design Principles"
    ],
    prerequisites: ["Basic computer skills", "Text editor"],
    price: "Free"
  },
  "git-essentials": {
    title: "Git Essentials",
    description: "Learn version control basics with Git",
    longDescription: "Master Git version control system used by professionals worldwide. Learn branching, merging, and collaboration workflows essential for modern development teams.",
    skills: ["Git", "GitHub", "Version Control"],
    duration: "1.5 hours",
    lessons: 8,
    students: 1200,
    curriculum: [
      "Git Fundamentals",
      "Branching and Merging",
      "Remote Repositories",
      "Collaboration Workflows",
      "Git Best Practices",
      "GitHub Integration"
    ],
    prerequisites: ["Command line basics"],
    price: "Free"
  },
  "ui-design": {
    title: "UI Design Principles",
    description: "Basic principles of user interface design",
    longDescription: "Learn the fundamental principles of creating effective and beautiful user interfaces. From color theory to typography, master the elements that make great designs.",
    skills: ["Design Theory", "Color Theory", "Typography"],
    duration: "2.5 hours",
    lessons: 15,
    students: 900,
    curriculum: [
      "Design Fundamentals",
      "Color Theory in Practice",
      "Typography Essentials",
      "Layout Principles",
      "Visual Hierarchy",
      "UI Components Design"
    ],
    prerequisites: ["None"],
    price: "Free"
  }
};

export type CourseId = keyof typeof courseDetailsData;

export const isCourseId = (id: string): id is CourseId => {
  return id in courseDetailsData;
};