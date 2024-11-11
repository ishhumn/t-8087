import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="relative w-full z-50 border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between h-16">
        <Link to="/" className="font-mono text-xl font-bold">
          MaxData
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-sm font-medium hover:text-primary"
          >
            Products
          </button>
          <button 
            onClick={() => scrollToSection('integrate')} 
            className="text-sm font-medium hover:text-primary"
          >
            Solutions
          </button>
          <button 
            onClick={() => scrollToSection('community')} 
            className="text-sm font-medium hover:text-primary"
          >
            Resources
          </button>
          <button 
            onClick={() => scrollToSection('team')} 
            className="text-sm font-medium hover:text-primary"
          >
            Team
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm">Try Free</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;