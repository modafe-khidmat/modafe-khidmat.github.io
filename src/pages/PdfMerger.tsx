
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PdfMerger = () => {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-6 py-12 max-w-5xl">
                <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 text-sm group transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                <header className="mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                        PDF Merger
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        A powerful, secure, and offline-capable tool to combine multiple PDF files and images into a single document.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="relative aspect-video bg-gradient-to-br from-muted/50 to-muted/10 rounded-xl overflow-hidden border border-border/50 shadow-2xl flex flex-col group p-4 gap-4">
                        {/* CSS-only UI Mockup */}
                        <div className="w-full h-8 bg-muted-foreground/10 rounded-md flex items-center px-3 gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400/50"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400/50"></div>
                        </div>
                        <div className="flex-1 flex gap-4">
                            <div className="w-1/4 h-full bg-muted-foreground/5 rounded-md"></div>
                            <div className="flex-1 h-full bg-muted-foreground/5 rounded-md border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                                <div className="text-muted-foreground/30 text-xs font-medium">Drag & Drop Zone</div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold">Key Features</h3>
                        <ul className="space-y-4">
                            {[
                                "Merge multiple PDFs instantly",
                                "Support for Image to PDF conversion",
                                "Completely offline & secure processing",
                                "Drag & drop interface",
                                "No file size limits",
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
                                <span className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></div> Instant Delivery</span>
                                <span className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></div> Secure Payment</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PdfMerger;
