import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Navigation, Footer } from "@/components/Navigation";
import { CheckCircle, ArrowRight, Zap, Award, Users, Target } from "lucide-react";

/**
 * Students Page
 * Modern Minimalism Design - Indigo & Teal Accents
 * Features: Hero section, how it works, differentiators, CTAs
 */
export default function Students() {
  const howItWorks = [
    {
      step: 1,
      title: "Your college gets you in",
      description:
        "Access BloomingPros.ai through your college's partnership with us.",
    },
    {
      step: 2,
      title: "Build your portfolio",
      description:
        "Showcase your skills, projects, and achievements with authentic evidence.",
    },
    {
      step: 3,
      title: "Get discovered on merit",
      description:
        "Companies discover you based on your real capabilities, not just credentials.",
    },
  ];

  const differences = [
    {
      icon: Target,
      title: "Skill-first, not resume-first",
      description:
        "Your portfolio shows companies what you can do — not just your CGPA or college name.",
    },
    {
      icon: Zap,
      title: "Start in earlier Year, not just final year",
      description:
        "The earlier you build, the stronger your portfolio by placement season.",
    },
    {
      icon: Users,
      title: "Not just Tier-1 colleges",
      description:
        "Talent is everywhere. Our platform gives every student the same visibility tools.",
    },
    {
      icon: Award,
      title: "Verified by your institution",
      description:
        "Your profile carries institutional credibility, which companies trust.",
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
                AI-Powered Employability for Students
              </h1>

              <h2 className="text-2xl md:text-3xl font-semibold text-accent mb-6">
                Build Skills. Create Portfolios. Become Employable.
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                BloomingPros.ai helps you discover your strengths, build real
                capabilities, and showcase your work through authentic portfolios.
                We're here to help you become truly employable, not just
                placement-ready.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-gradient-to-r from-[#1F2937] to-[#14B8A6] hover:shadow-lg transition-shadow w-full sm:w-auto">
                  <Link href="/contact?source=students">Request Access <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto border-border hover:bg-secondary">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-white border-y border-border">
          <div className="container">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <div className="h-1 w-16 bg-gradient-to-r from-[#1F2937] to-[#14B8A6]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Three simple steps to get started on your employability journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {howItWorks.map((item, index) => (
                <div key={index} className="relative">
                  {/* Connector line */}
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#14B8A6] to-transparent -z-10"></div>
                  )}

                  <div className="bg-background rounded-lg p-8 border border-border hover:shadow-md transition-shadow">
                    {/* Step number */}
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#14B8A6] to-[#1F2937] text-white font-bold mb-6">
                      {item.step}
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/contact?source=students" className="mt-12 block p-6 bg-blue-50 border border-blue-200 rounded-lg hover:shadow-md transition-shadow">
              <p className="text-center text-foreground">
                <span className="font-semibold">Ask your Training & Placement cell to join BloomingPros.ai</span>
                <br />
                <span className="text-sm text-muted-foreground">
                  If your college isn't a partner yet, encourage them to reach out to us.
                </span>
              </p>
            </Link>
          </div>
        </section>

        {/* Why Different Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <div className="h-1 w-16 bg-gradient-to-r from-[#1F2937] to-[#14B8A6]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Why BloomingPros.ai is Different
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We've reimagined employability from the ground up.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {differences.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-8 border border-border hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-[#14B8A6]/20 to-[#1F2937]/20">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Who Is This For Section */}
        <section className="py-20 bg-white border-y border-border">
          <div className="container">
            <div className="max-w-3xl">
              <div className="h-1 w-16 bg-gradient-to-r from-[#1F2937] to-[#14B8A6] mb-6"></div>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Who is this for?
              </h2>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Currently, BloomingPros.ai focuses on engineering and technology
                  students for the Proof of Concept (PoC). If your college is a
                  partner, you're eligible to join.
                </p>

                <p>
                  Support for other streams — business, design, commerce — is
                  coming after the PoC phase. We're committed to expanding our
                  platform to serve all students, regardless of their field of
                  study.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                  <h3 className="font-semibold text-foreground mb-3">
                    What you need to get started:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Enrollment at a partner college</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Engineering or technology background (for PoC)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Passion for building real skills</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#1F2937] to-[#14B8A6]">
          <div className="container text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your Portfolio?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Request access to BloomingPros.ai and start your journey to true
              employability.
            </p>
            <Button asChild className="bg-white text-foreground hover:bg-gray-100 font-semibold">
              <Link href="/contact?source=students">Request Access <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
