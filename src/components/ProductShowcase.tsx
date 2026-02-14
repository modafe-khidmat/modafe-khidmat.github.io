import { Shield, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: Shield,
    title: "PDF Merger",
    description:
      "A powerful, secure, and offline-capable PDF merging tool. Combine multiple PDF files and images into a single document with ease.",
    internalLink: "/pdf-merger",
    paymentLink: "https://buy.stripe.com/placeholder",
  },
  {
    icon: Bot,
    title: "E-Commerce AI Agent",
    description:
      "Automated price tracking and platform matching powered by AI. Monitor competitors, detect price changes, and optimize your listings across marketplaces.",
    internalLink: "/ecommerce-agent",
    paymentLink: "https://buy.stripe.com/placeholder",
  },
];

const ProductShowcase = () => (
  <section id="products" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          Our Products
        </h2>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto">
          Purpose-built tools for modern digital businesses.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {products.map((product) => (
          <Card
            key={product.title}
            className="border border-border/60 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
          >
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-blurple/10 flex items-center justify-center mb-4">
                <product.icon className="h-6 w-6 text-blurple" />
              </div>
              <CardTitle className="text-xl">{product.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription className="text-base leading-relaxed">
                {product.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Button
                asChild
                className="w-full bg-blurple hover:bg-blurple/90 text-blurple-foreground rounded-lg py-5"
              >
                <Link to={product.internalLink}>View Project</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full rounded-lg py-5 border-blurple/20 hover:bg-blurple/5"
              >
                <a href={product.paymentLink} target="_blank" rel="noopener noreferrer">
                  Buy Now
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ProductShowcase;
