import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Navigation, Footer } from "@/components/Navigation";
import { ArrowRight, TrendingUp, Users, Award, BarChart3 } from "lucide-react";

/**
 * Colleges Page
 * Modern Minimalism Design - Indigo & Teal Accents
 */
export default function Colleges() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Improve Student Outcomes",
      description:
        "Help your students build real skills and become truly employable, not just placement-ready.",
    },
    {
      icon: Users,
      title: "Strengthen Industry Partnerships",
      description:
        "Create meaningful connections between your institution and leading companies.",
    },
    {
      icon: Award,
      title: "Enhance Institutional Credibility",
      description:
        "Showcase your commitment to student success and industry-aligned education.",
    },
    {
      icon: BarChart3,
      title: "Track & Measure Impact",
      description:
        "Get detailed insights into student progress and employment outcomes.",
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
                Elevate Your Institution
              </h1>

              <h2 className="text-2xl md:text-3xl font-semibold text-accent mb-6">
                Partner with BloomingPros.ai
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Empower your students with an AI-powered platform that bridges the
                gap between education and industry. Help them build real skills,
                create authentic portfolios, and secure meaningful employment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-gradient-to-r from-[#1F2937] to-[#14B8A6] hover:shadow-lg transition-shadow w-full sm:w-auto">
                  <Link href="/contact?source=colleges">Schedule a Demo <ArrowRight className="w-4 h-4 ml-2" /></Link>
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
                Why Partner With Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transform your institution's approach to student employability.
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

        {/* Features Section */}
        <section className="py-20">
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
              <div className="bg-white rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  For Your Institution
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Centralized student portfolio management
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Real-time analytics and insights
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Industry partnership management
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Customizable skill frameworks
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  For Your Students
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Skill discovery and development
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Authentic portfolio building
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Verified credentials and badges
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Direct visibility to companies
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
              Ready to Transform Your Institution?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join our first cohort of partner colleges in 2026. Let's reimagine
              employability together.
            </p>
            <Button asChild className="bg-white text-foreground hover:bg-gray-100 font-semibold">
              <Link href="/contact?source=colleges">Schedule a Demo <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
