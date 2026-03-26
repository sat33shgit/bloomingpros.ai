import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Navigation, Footer } from "@/components/Navigation";
import { ArrowRight, Users, Target, CheckCircle, Zap } from "lucide-react";

/**
 * Companies Page
 * Modern Minimalism Design - Indigo & Teal Accents
 */
export default function Companies() {
  const benefits = [
    {
      icon: Target,
      title: "Hire with Confidence",
      description:
        "Access talent with verified skills and proven capabilities, not just credentials.",
    },
    {
      icon: Users,
      title: "Diverse Talent Pool",
      description:
        "Discover talent from all colleges and backgrounds, not just Tier-1 institutions.",
    },
    {
      icon: Zap,
      title: "Faster Hiring Process",
      description:
        "Streamlined recruitment with pre-vetted candidates and authentic portfolios.",
    },
    {
      icon: CheckCircle,
      title: "Build Long-term Partnerships",
      description:
        "Collaborate with educational institutions to shape the future of talent.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="max-w-3xl">
              <div className="h-1 w-16 bg-gradient-to-r from-[#1F2937] to-[#14B8A6] mb-6"></div>

              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Hire Confident Talent
              </h1>

              <h2 className="text-2xl md:text-3xl font-semibold text-accent mb-6">
                Partner with BloomingPros.ai
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Access a curated pool of talent with verified skills and authentic
                portfolios. Build meaningful partnerships with educational
                institutions and hire with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-gradient-to-r from-[#1F2937] to-[#14B8A6] hover:shadow-lg transition-shadow w-full sm:w-auto">
                  <Link href="/contact?source=companies">Get Started <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white border-y border-border">
          <div className="container">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <div className="h-1 w-16 bg-gradient-to-r from-[#1F2937] to-[#14B8A6]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Why Partner With BloomingPros.ai
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transform your recruitment strategy with verified talent.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-background rounded-lg p-8 border border-border hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-[#14B8A6]/20 to-[#1F2937]/20">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <div className="h-1 w-16 bg-gradient-to-r from-[#1F2937] to-[#14B8A6]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                How It Works
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-[#14B8A6] to-[#1F2937] text-white font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Define Your Talent Needs
                  </h3>
                  <p className="text-muted-foreground">
                    Tell us about the skills and roles you're looking to fill.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-[#14B8A6] to-[#1F2937] text-white font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Access Verified Talent
                  </h3>
                  <p className="text-muted-foreground">
                    Browse candidates with verified skills and authentic portfolios.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-[#14B8A6] to-[#1F2937] text-white font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Connect & Hire
                  </h3>
                  <p className="text-muted-foreground">
                    Streamlined communication and hiring process with qualified candidates.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-[#14B8A6] to-[#1F2937] text-white font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Build Partnerships
                  </h3>
                  <p className="text-muted-foreground">
                    Develop long-term relationships with educational institutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white border-y border-border">
          <div className="container">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <div className="h-1 w-16 bg-gradient-to-r from-[#1F2937] to-[#14B8A6]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Platform Features
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Talent Discovery
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Advanced skill-based search
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Verified portfolios and evidence
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Readiness assessments
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Institutional credibility indicators
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Recruitment Tools
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Customizable job postings
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Candidate management dashboard
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Communication tools
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Analytics and insights
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#1F2937] to-[#14B8A6]">
          <div className="container text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Hire Confident Talent?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join BloomingPros.ai and access a curated pool of verified talent.
            </p>
            <Button asChild className="bg-white text-foreground hover:bg-gray-100 font-semibold">
              <Link href="/contact?source=companies">Get Started <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
