import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigation = (target: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation, then scroll
      setTimeout(() => {
        const element = document.getElementById(target);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(target);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-hero/95 backdrop-blur-md border-b border-white/10 shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <button onClick={() => handleNavigation("home")} className="text-xl font-bold tracking-tight text-hero-foreground">
          Modafe Khidmat
        </button>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => handleNavigation("home")} className="text-sm text-hero-foreground/70 hover:text-hero-foreground transition-colors">
            Home
          </button>
          <button onClick={() => handleNavigation("products")} className="text-sm text-hero-foreground/70 hover:text-hero-foreground transition-colors">
            Products
          </button>
          <Link to="/about-us" className="text-sm text-hero-foreground/70 hover:text-hero-foreground transition-colors">
            About Us
          </Link>
        </nav>

        {/* Mobile */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-hero-foreground">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-hero border-white/10">
            <SheetTitle className="text-hero-foreground">Menu</SheetTitle>
            <nav className="flex flex-col gap-6 mt-8">
              <button onClick={() => handleNavigation("home")} className="text-lg text-hero-foreground/70 hover:text-hero-foreground transition-colors text-left">
                Home
              </button>
              <button onClick={() => handleNavigation("products")} className="text-lg text-hero-foreground/70 hover:text-hero-foreground transition-colors text-left">
                Products
              </button>
              <Link to="/about-us" className="text-lg text-hero-foreground/70 hover:text-hero-foreground transition-colors text-left">
                About Us
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
