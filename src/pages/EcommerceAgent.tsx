
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const EcommerceAgent = () => {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-6 py-12 max-w-5xl">
                <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 text-sm group transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                <header className="mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                        E-Commerce AI Agent
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Automated price tracking and platform matching powered by AI to optimize your listings.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="space-y-8 order-2 md:order-1">
                        <h3 className="text-2xl font-semibold">Smart Intelligence</h3>
                        <ul className="space-y-4">
                            {[
                                "Real-time competitor tracking",
                                "Automated price adjustment",
                                "Multi-platform synchronization",
                                "Profit margin optimization",
                                "Trend analysis & forecasting",
                            ].map((feature) => (
                                <li key={feature} className="flex items-center text-muted-foreground">
                                    <div className="w-2 h-2 rounded-full bg-blurple mr-3" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <div className="pt-4 flex flex-col sm:flex-row gap-4 flex-wrap">
                            <Button asChild size="lg" className="bg-[#ee4d2d] hover:bg-[#ee4d2d]/90 text-white">
                                <a href="https://shopee.com/placeholder" target="_blank" rel="noopener noreferrer">
                                    Buy on Shopee
                                </a>
                            </Button>
                            <Button asChild size="lg" className="bg-[#000000] hover:bg-[#000000]/80 text-white">
                                <a href="https://tiktok.com/placeholder" target="_blank" rel="noopener noreferrer">
                                    Buy on TikTok
                                </a>
                            </Button>
                            <Button asChild size="lg" className="bg-[#635bff] hover:bg-[#635bff]/90 text-white">
                                <a href="https://buy.stripe.com/placeholder" target="_blank" rel="noopener noreferrer">
                                    Pay with Stripe
                                </a>
                            </Button>
                        </div>
                    </div>
                    <div className="relative aspect-video bg-muted/30 rounded-xl overflow-hidden border border-border/50 shadow-sm flex items-center justify-center group order-1 md:order-2">
                        <div className="text-muted-foreground/40 text-sm font-medium">Dashboard Preview Placeholder</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EcommerceAgent;
