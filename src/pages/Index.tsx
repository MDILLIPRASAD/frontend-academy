import { Header } from "@/components/layout/Header";
import { FreeCourses } from "@/components/courses/FreeCourses";
import { PortfolioSection } from "@/components/portfolio/PortfolioSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, BookOpen, Users, Target, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Gradient Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-8 max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-6xl md:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Transform Your Future
              </span>
              <br />
              <span className="text-4xl md:text-5xl text-gray-800">
                with Modern Web Development
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Join thousands of developers mastering the art of modern web development through interactive learning
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button size="lg" className="group bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">
                Start Learning 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                View Courses
              </Button>
            </motion.div>
          </motion.div>

          {/* Floating Elements Animation */}
          <div className="absolute top-1/2 left-0 w-full h-full -z-10 overflow-hidden">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-20 left-[15%] w-20 h-20 bg-purple-200 rounded-full opacity-20"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -10, 0]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-40 right-[20%] w-32 h-32 bg-blue-200 rounded-full opacity-20"
            />
          </div>
        </div>
      </section>

      {/* Features Grid with Hover Effects */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 shadow-sm hover:shadow-xl transition-all"
            >
              <Rocket className="h-12 w-12 text-purple-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Learn Fast</h3>
              <p className="text-gray-600">Accelerate your learning with our interactive curriculum and hands-on projects</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-sm hover:shadow-xl transition-all"
            >
              <Target className="h-12 w-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Build Projects</h3>
              <p className="text-gray-600">Create real-world applications that showcase your skills to potential employers</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 shadow-sm hover:shadow-xl transition-all"
            >
              <Users className="h-12 w-12 text-indigo-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Join Community</h3>
              <p className="text-gray-600">Connect with fellow developers and build your professional network</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Portfolio Section with Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <PortfolioSection />
      </motion.div>

      {/* Courses Section with Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <FreeCourses />
      </motion.div>

      {/* Call to Action with Gradient */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">Join thousands of successful developers who transformed their careers with us</p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="group bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg"
          >
            Enroll Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;