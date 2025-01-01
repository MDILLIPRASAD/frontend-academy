import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Search, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      // Add some offset for the sticky header
      window.scrollBy(0, -80);
    }
  };

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            Frontend Academy
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="grid grid-cols-2 gap-3">
                      <div 
                        onClick={() => scrollToSection("free-courses")} 
                        className="block p-3 hover:bg-accent rounded-lg cursor-pointer"
                      >
                        <div className="font-medium mb-1">Free Courses</div>
                        <p className="text-sm text-muted-foreground">Start learning today</p>
                      </div>
                      <div 
                        onClick={() => scrollToSection("individual-courses")} 
                        className="block p-3 hover:bg-accent rounded-lg cursor-pointer"
                      >
                        <div className="font-medium mb-1">Individual Courses</div>
                        <p className="text-sm text-muted-foreground">Learn at your own pace</p>
                      </div>
                      <div 
                        onClick={() => scrollToSection("course-bundles")} 
                        className="block p-3 hover:bg-accent rounded-lg cursor-pointer"
                      >
                        <div className="font-medium mb-1">Course Bundles</div>
                        <p className="text-sm text-muted-foreground">Save with our bundles</p>
                      </div>
                      <div 
                        onClick={() => scrollToSection("portfolio")} 
                        className="block p-3 hover:bg-accent rounded-lg cursor-pointer"
                      >
                        <div className="font-medium mb-1">Our Impact</div>
                        <p className="text-sm text-muted-foreground">See our achievements</p>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Enterprise</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-6 w-[400px]">
                    <div className="mb-3">
                      <div className="font-medium mb-1">Enterprise Solutions</div>
                      <p className="text-sm text-muted-foreground">Custom training for teams</p>
                    </div>
                    <div className="grid gap-2">
                      <div 
                        onClick={() => scrollToSection("team-training")} 
                        className="block p-3 hover:bg-accent rounded-lg cursor-pointer"
                      >
                        <div className="font-medium mb-1">Team Training</div>
                        <p className="text-sm text-muted-foreground">Upskill your entire team</p>
                      </div>
                      <div 
                        onClick={() => scrollToSection("custom-programs")} 
                        className="block p-3 hover:bg-accent rounded-lg cursor-pointer"
                      >
                        <div className="font-medium mb-1">Custom Programs</div>
                        <p className="text-sm text-muted-foreground">Tailored to your needs</p>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <div
                  onClick={() => scrollToSection("portfolio")}
                  className="cursor-pointer"
                >
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Portfolio
                  </NavigationMenuLink>
                </div>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button>Sign In</Button>
          </div>
        </div>
      </div>
    </header>
  );
};