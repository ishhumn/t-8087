import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto flex items-center justify-between h-16">
        <Link to="/" className="font-mono text-xl font-bold">
          MaxData
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/products" className="text-sm font-medium hover:text-primary">
            Products
          </Link>
          <Link to="/solutions" className="text-sm font-medium hover:text-primary">
            Solutions
          </Link>
          <Link to="/resources" className="text-sm font-medium hover:text-primary">
            Resources
          </Link>
          <Link to="/pricing" className="text-sm font-medium hover:text-primary">
            Pricing
          </Link>
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