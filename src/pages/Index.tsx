import { Header } from "@/components/layout/Header";
import { FreeCourses } from "@/components/courses/FreeCourses";
import { PortfolioSection } from "@/components/portfolio/PortfolioSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, BookOpen, Users, Target } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Master Frontend Development
            </h1>
            <p className="text-xl text-muted-foreground">
              Join thousands of developers learning to build modern web applications with our comprehensive courses
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="group">
                Get Started 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                View Courses
              </Button>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          >
            <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <Sparkles className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
              <p className="text-muted-foreground">Learn by doing with hands-on projects and real-world examples</p>
            </div>
            <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <BookOpen className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comprehensive Curriculum</h3>
              <p className="text-muted-foreground">From basics to advanced concepts, everything you need to succeed</p>
            </div>
            <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <Target className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Career-Focused</h3>
              <p className="text-muted-foreground">Build a portfolio that gets you hired in top tech companies</p>
            </div>
          </motion.div>
        </div>

        {/* Background Decoration */}
        <div className="absolute -top-1/2 left-0 -z-10 w-full h-full bg-gradient-to-b from-purple-50 to-white opacity-50 blur-3xl" />
      </section>

      {/* Testimonial Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16 bg-primary/5"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">What Our Students Say</h2>
            <blockquote className="text-xl italic text-muted-foreground">
              "The courses here transformed my career. I went from knowing nothing about web development to landing my dream job in just 6 months!"
            </blockquote>
            <div className="mt-4">
              <p className="font-semibold">Sarah Johnson</p>
              <p className="text-sm text-muted-foreground">Frontend Developer at Tech Corp</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <PortfolioSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <FreeCourses />
      </motion.div>

      {/* Call to Action Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16 bg-primary text-primary-foreground"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of successful developers who transformed their careers with us</p>
          <Button size="lg" variant="secondary" className="group">
            Enroll Now
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;