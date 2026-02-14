import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-hero overflow-hidden"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--blurple)/0.15),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(var(--blurple)/0.08),_transparent_50%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--hero-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--hero-foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-hero-foreground/60">
          Digital Solutions & Automation
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-hero-foreground leading-[1.1] mb-6">
          Building the Future of{" "}
          <span className="text-blurple">Automation</span>
        </h1>
        <p className="text-lg md:text-xl text-hero-foreground/60 mb-10 max-w-xl mx-auto leading-relaxed">
          Powerful tools to automate licensing, pricing, and e-commerce — so you can focus on what matters.
        </p>
        <Button
          onClick={scrollToProducts}
          className="bg-blurple hover:bg-blurple/90 text-blurple-foreground px-8 py-6 text-base rounded-lg gap-2 shadow-[0_0_30px_hsl(var(--blurple)/0.3)]"
        >
          Explore Products
          <ArrowDown className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
