
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-16">
                <div className="container mx-auto px-6 max-w-5xl">
                    <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 text-sm group transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    <header className="mb-16 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            About Modafe Khidmat
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Empowering businesses with secure, scalable, and intelligent digital solutions.
                        </p>
                    </header>

                    <section className="mb-20">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    At Modafe Khidmat, we are dedicated to bridging the gap between complex technology and everyday business needs. We rely on open-source technologies to build affordable, high-quality, and secure software that empowers small and medium-sized enterprises.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Our focus is on creating tools that are not only powerful but also intuitive—respecting your data privacy and operational independence.
                                </p>
                            </div>
                            <div className="relative aspect-square md:aspect-video bg-muted/30 rounded-2xl overflow-hidden border border-border/50 shadow-sm flex items-center justify-center">
                                <div className="text-muted-foreground/40 text-sm font-medium">Team / Office Placeholder</div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-20">
                        <div className="bg-muted/20 rounded-2xl p-8 md:p-12 border border-border/50 text-center">
                            <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Us?</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    { title: "Privacy First", desc: "We prioritize local-first and secure architectures." },
                                    { title: "Open Source", desc: "Built on transparent and reliable foundations." },
                                    { title: "User Centric", desc: "Designed for real people, not just developers." }
                                ].map((item) => (
                                    <div key={item.title} className="p-4">
                                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                        <p className="text-muted-foreground">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="text-center">
                        <h2 className="text-3xl font-bold text-foreground mb-8">Get in Touch</h2>
                        <Button asChild size="lg" className="bg-blurple hover:bg-blurple/90 text-white">
                            <a href="mailto:contact@modafe-khidmat.com">Contact Us</a>
                        </Button>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AboutUs;
