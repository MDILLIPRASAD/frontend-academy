import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Search, User } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="border-b bg-white">
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
                      <Link to="/" className="block p-3 hover:bg-accent rounded-lg">
                        <div className="font-medium mb-1">Individual Courses</div>
                        <p className="text-sm text-muted-foreground">Learn at your own pace</p>
                      </Link>
                      <Link to="/" className="block p-3 hover:bg-accent rounded-lg">
                        <div className="font-medium mb-1">Course Bundles</div>
                        <p className="text-sm text-muted-foreground">Save with our bundles</p>
                      </Link>
                      <Link to="/" className="block p-3 hover:bg-accent rounded-lg">
                        <div className="font-medium mb-1">Career Tracks</div>
                        <p className="text-sm text-muted-foreground">Structured learning paths</p>
                      </Link>
                      <Link to="/" className="block p-3 hover:bg-accent rounded-lg">
                        <div className="font-medium mb-1">Free Resources</div>
                        <p className="text-sm text-muted-foreground">Start learning today</p>
                      </Link>
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
                      <Link to="/" className="block p-3 hover:bg-accent rounded-lg">
                        <div className="font-medium mb-1">Team Training</div>
                        <p className="text-sm text-muted-foreground">Upskill your entire team</p>
                      </Link>
                      <Link to="/" className="block p-3 hover:bg-accent rounded-lg">
                        <div className="font-medium mb-1">Custom Programs</div>
                        <p className="text-sm text-muted-foreground">Tailored to your needs</p>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Events
                  </NavigationMenuLink>
                </Link>
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