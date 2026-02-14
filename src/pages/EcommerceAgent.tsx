
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
                        <div className="pt-6 space-y-4">
                            <div className="flex flex-wrap gap-3">
                                <Button asChild size="lg" className="bg-[#635bff] hover:bg-[#635bff]/90 text-white flex-1 min-w-[200px] h-12 text-base shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                                    <a href="https://buy.stripe.com/placeholder" target="_blank" rel="noopener noreferrer">
                                        Pay with Stripe
                                    </a>
                                </Button>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <Button asChild variant="outline" size="sm" className="flex-1 border-[#ee4d2d] text-[#ee4d2d] hover:bg-[#ee4d2d]/10">
                                    <a href="https://shopee.com/placeholder" target="_blank" rel="noopener noreferrer">
                                        Buy on Shopee
                                    </a>
                                </Button>
                                <Button asChild variant="outline" size="sm" className="flex-1 border-foreground text-foreground hover:bg-foreground/10">
                                    <a href="https://tiktok.com/placeholder" target="_blank" rel="noopener noreferrer">
                                        Buy on TikTok
                                    </a>
                                </Button>
                            </div>
                            <p className="text-xs text-muted-foreground flex items-center gap-2 pt-2">
                                <span className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></div> Instant Access</span>
                                <span className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></div> Secure Payment</span>
                            </p>
                        </div>
                    </div>
                    <div className="relative aspect-video bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl overflow-hidden border border-purple-500/20 shadow-2xl flex flex-col group p-4 gap-4 order-1 md:order-2">
                        {/* CSS-only UI Mockup */}
                        <div className="w-full h-8 bg-background/50 backdrop-blur-sm rounded-md flex items-center justify-between px-3 border border-white/5">
                            <div className="text-[10px] text-muted-foreground">AI Analytics Dashboard</div>
                            <div className="flex gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-red-500/40"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500/40"></div>
                            </div>
                        </div>
                        <div className="flex-1 grid grid-cols-3 gap-3">
                            <div className="col-span-2 space-y-3">
                                <div className="h-24 bg-background/40 rounded-md border border-white/5 p-3 relative overflow-hidden">
                                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-purple-500/20 to-transparent"></div>
                                    <div className="w-full h-full flex items-end justify-between px-1 pb-1">
                                        <div className="w-2 h-8 bg-purple-500/40 rounded-t-sm"></div>
                                        <div className="w-2 h-12 bg-purple-500/60 rounded-t-sm"></div>
                                        <div className="w-2 h-6 bg-purple-500/30 rounded-t-sm"></div>
                                        <div className="w-2 h-14 bg-purple-500/80 rounded-t-sm"></div>
                                        <div className="w-2 h-10 bg-purple-500/50 rounded-t-sm"></div>
                                    </div>
                                </div>
                                <div className="h-auto space-y-2">
                                    <div className="h-2 w-full bg-muted-foreground/10 rounded-full"></div>
                                    <div className="h-2 w-3/4 bg-muted-foreground/10 rounded-full"></div>
                                </div>
                            </div>
                            <div className="col-span-1 space-y-2">
                                <div className="h-8 w-full bg-blue-500/10 rounded-md border border-blue-500/20"></div>
                                <div className="h-8 w-full bg-background/40 rounded-md border border-white/5"></div>
                                <div className="h-8 w-full bg-background/40 rounded-md border border-white/5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EcommerceAgent;
