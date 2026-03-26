import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Navigation, Footer } from "@/components/Navigation";
import {
  Users,
  Target,
  Zap,
  Award,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

/**
 * Home Page
 * Modern Minimalism Design - Indigo & Teal Accents
 * Features: Hero section with asymmetric layout, feature cards, CTA sections
 */
export default function Home() {
  const features = [
    {
      icon: Target,
      title: "Skill-First Approach",
      description:
        "Your portfolio shows companies what you can do — not just your CGPA or college name.",
    },
    {
      icon: Zap,
      title: "Start Early, Build Strong",
      description:
        "The earlier you build, the stronger your portfolio by placement season.",
    },
    {
      icon: Users,
      title: "Talent Everywhere",
      description:
        "Our platform gives every student the same visibility tools, regardless of college tier.",
    },
    {
      icon: Award,
      title: "Verified Credentials",
      description:
        "Your profile carries institutional credibility, which companies trust.",
    },
  ];

  const stakeholders = [
    {
      title: "For Students",
      description: "Build real skills, create authentic portfolios, and get discovered on merit.",
      href: "/students",
      icon: Users,
    },
    {
      title: "For Colleges",
      description: "Improve student outcomes and strengthen industry partnerships.",
      href: "/colleges",
      icon: Target,
    },
    {
      title: "For Companies",
      description: "Hire confident talent with verified skills and proven capabilities.",
      href: "/companies",
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 overflow-hidden">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                {/* Gradient accent bar */}
                <div className="h-1 w-16 bg-gradient-to-r from-[#1F2937] to-[#14B8A6]"></div>

                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  A Unified Employability Ecosystem
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  BloomingPros.ai connects students, colleges, and companies
                  through skills, evidence, and opportunity — enabling a more
                  transparent, guided, and outcome-driven journey.
                </p>

                <p className="text-base text-foreground font-medium">
                  We help learners become truly employable, not just
                  placement-ready.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild className="bg-gradient-to-r from-[#1F2937] to-[#14B8A6] hover:shadow-lg transition-shadow w-full sm:w-auto">
                    <Link href="/contact">Get Started <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full sm:w-auto border-border hover:bg-secondary">
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>

                {/* CTA Text */}
                <p className="text-sm text-muted-foreground pt-4 border-t border-border">
                  We are on-boarding our first cohort of colleges and companies
                  in 2026. If you join now, you shape the platform.
                </p>
              </div>

              {/* Right Visual */}
              <div className="hidden md:flex items-center justify-center">
                <div className="relative w-full h-96">
                  {/* Gradient blob background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/10 to-[#1F2937]/10 rounded-3xl blur-3xl"></div>

                  {/* Decorative elements */}
                  <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-2xl opacity-20 blur-2xl"></div>
                  <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-[#1F2937] to-[#14B8A6] rounded-2xl opacity-10 blur-2xl"></div>

                  {/* Center card */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xs">
                      <div className="space-y-4">
                        <div className="h-3 bg-gradient-to-r from-[#1F2937] to-[#14B8A6] rounded-full w-2/3"></div>
                        <div className="h-2 bg-secondary rounded-full w-full"></div>
                        <div className="h-2 bg-secondary rounded-full w-5/6"></div>
                      </div>
                    </div>
                  </div>
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
                Why BloomingPros.ai is Different
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're reimagining employability with a focus on skills, evidence,
                and real-world capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-background rounded-lg p-8 border border-border hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-[#14B8A6]/20 to-[#1F2937]/20">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stakeholder Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <div className="h-1 w-16 bg-gradient-to-r from-[#1F2937] to-[#14B8A6]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Designed for Everyone
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you're a student, college, or company, BloomingPros.ai
                has a solution for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stakeholders.map((stakeholder, index) => {
                const Icon = stakeholder.icon;
                return (
                  <Link key={index} href={stakeholder.href} className="group">
                    <div className="bg-white rounded-xl p-8 border border-border hover:border-accent hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                        <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-gradient-to-br from-[#14B8A6]/20 to-[#1F2937]/20 mb-6 group-hover:from-[#14B8A6]/30 group-hover:to-[#1F2937]/30 transition-colors">
                          <Icon className="h-8 w-8 text-accent" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-3">
                          {stakeholder.title}
                        </h3>
                        <p className="text-muted-foreground flex-1 mb-6">
                          {stakeholder.description}
                        </p>
                        <div className="flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#1F2937] to-[#14B8A6]">
          <div className="container text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Reimagine Employability?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join our first cohort of colleges and companies in 2026. Shape the
              future of employability with us.
            </p>
            <Button asChild className="bg-white text-foreground hover:bg-gray-100 font-semibold">
              <Link href="/contact">Get Started Today <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
