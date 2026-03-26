import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Navigation, Footer } from "@/components/Navigation";
import { ArrowRight, Linkedin } from "lucide-react";
import { useEffect } from "react";

/**
 * About Page
 * Modern Minimalism Design - Indigo & Teal Accents
 */
export default function About() {
  const [location] = useLocation();

  useEffect(() => {
    if (location && location.startsWith("/about")) {
      try {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch {
        window.scrollTo(0, 0);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 overflow-x-hidden">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="h-1 w-16 bg-gradient-to-r from-[#1F2937] to-[#14B8A6] mb-6 mx-auto"></div>

              <h1 className="mb-6 break-words text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl">
                About BloomingPros.ai
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                We're reimagining employability by connecting talent, educational
                institutions, and industry through skills, evidence, and
                opportunity.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white border-y border-border">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="h-1 w-16 bg-gradient-to-r from-[#1F2937] to-[#14B8A6] mb-6 mx-auto"></div>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                Our Story
              </h2>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  BloomingPros.ai was created to close the gap between what students
                  learn and what industry needs. We recognized a fundamental problem:
                  traditional recruitment focuses on credentials and CGPA, while
                  companies desperately need talent with real, demonstrable skills.
                </p>

                <p>
                  Students spend years in college building knowledge, but they often
                  lack authentic ways to showcase what they can actually do. Colleges
                  struggle to bridge the industry gap, and companies waste resources
                  sorting through resumes that don't reveal true capabilities.
                </p>

                <p>
                  We decided to build something different. A platform that puts skills
                  first, evidence at the center, and opportunity within reach for every
                  student, regardless of their college tier or background.
                </p>

                <p>
                  BloomingPros.ai is more than a job portal. It's an employability
                  ecosystem that empowers students to become truly employable, helps
                  colleges improve outcomes, and enables companies to hire with
                  confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team section moved further down */}

        {/* Mission & Values Section */}
        <section className="py-20 bg-slate-50 border-y border-border">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="text-center md:text-left">
                <div className="h-1 w-16 bg-gradient-to-r from-[#1F2937] to-[#14B8A6] mb-6 mx-auto md:mx-0"></div>
                <h3 className="text-3xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To reimagine employability by creating a transparent, guided, and
                  outcome-driven ecosystem that connects talent with opportunity,
                  helping students become truly employable, colleges improve outcomes,
                  and companies hire with confidence.
                </p>
              </div>

              {/* Vision */}
              <div className="text-center md:text-left">
                <div className="h-1 w-16 bg-gradient-to-r from-[#1F2937] to-[#14B8A6] mb-6 mx-auto md:mx-0"></div>
                <h3 className="text-3xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A world where employability is determined by skills and capability,
                  not credentials and background. Where every student has equal access
                  to opportunities, every college can improve student outcomes, and
                  every company can find the talent they need.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 bg-white border-y border-border">
          <div className="container">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <div className="h-1 w-16 bg-gradient-to-r from-[#1F2937] to-[#14B8A6]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Transparency
                </h3>
                <p className="text-muted-foreground">
                  We believe in open, honest communication with all stakeholders.
                  What you see is what you get.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Evidence-Based
                </h3>
                <p className="text-muted-foreground">
                  We focus on real skills and authentic evidence, not credentials or
                  assumptions.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Inclusive
                </h3>
                <p className="text-muted-foreground">
                  Talent is everywhere. We're committed to giving every student equal
                  visibility and opportunity.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Outcome-Driven
                </h3>
                <p className="text-muted-foreground">
                  We measure success by real employment outcomes and student success,
                  not vanity metrics.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Collaborative
                </h3>
                <p className="text-muted-foreground">
                  We work together with students, colleges, and companies to build
                  something meaningful.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Innovative
                </h3>
                <p className="text-muted-foreground">
                  We continuously evolve and improve, leveraging technology to solve
                  real problems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-20 bg-slate-50">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="mx-auto max-w-3xl text-center">
                <div className="h-1 w-16 bg-gradient-to-r from-[#1F2937] to-[#14B8A6] mb-6 mx-auto"></div>

                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                  Our Team
                </h2>

                <div className="space-y-6 pb-12 md:pb-16 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We are a team of experienced technology leaders with deep expertise
                  in enterprise systems, data security, scalable architectures, and
                  product innovation. Over the years, we've worked closely with
                  educational institutions and industry partners, giving us a clear
                  understanding of the evolving challenges on both sides.
                </p>

                <p>
                  Our collective background includes decades in global IT organizations,
                  delivering large-scale solutions for Fortune 500 companies and diverse
                  sectors. This experience helps us navigate complex technology
                  landscapes while staying focused on what's next.
                </p>

                <p>
                  What drives us is not just technical excellence, but a commitment to
                  bridging the gap between learning and real-world application. We
                  believe diverse perspectives and practical, evidence-based solutions
                  are essential to building meaningful, future-ready outcomes.
                </p>
              </div>
              
              </div>

              {/* Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Amit Ravankar */}
              <div className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-slate-100 px-6 pt-6">
                    <img
                      src="/images/team/amit-profile.webp"
                      alt="Amit Ravankar"
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                    />

                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Amit Ravankar
                  </h3>
                  <p className="text-accent font-semibold mb-4">Founder & CEO</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    After more than two decades of building digital businesses, leading
                    global teams, and shaping enterprise technology solutions, Amit
                    founded BloomingPros.ai to reimagine how talent is discovered and
                    developed. His extensive background in IT leadership, including
                    roles at TCS, has given him deep insights into the gap between
                    education and industry needs.
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Amit is passionate about leveraging technology and AI to create
                    transparent, evidence-based systems that give every student equal
                    access to opportunity, regardless of their background or college tier.
                  </p>
                  <a
                    href="https://in.linkedin.com/in/amitravankar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-[#1F2937] transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm font-medium">Connect on LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Mugdha Gadre */}
              <div className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-slate-100 px-6 pt-6">
                     <img
                      src="/images/team/mughda-profile.webp"
                      alt="Mugdha Gadre"
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                    />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Mugdha Gadre
                  </h3>
                  <p className="text-accent font-semibold mb-4">Co-Founder</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Mugdha brings a unique blend of technical expertise and operational
                    excellence to BloomingPros.ai. With a background spanning technology,
                    product development, and strategic partnerships, she plays a crucial
                    role in building the platform's core infrastructure and ensuring
                    seamless integration between students, colleges, and companies.
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Her commitment to creating scalable, secure, and user-centric
                    solutions drives the technical vision of BloomingPros.ai. Mugdha
                    believes that the right technology can democratize access to
                    opportunity and transform how employability is measured.
                  </p>
                  <a
                    href="https://in.linkedin.com/in/mugdha-gadre-82391755"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-[#1F2937] transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm font-medium">Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#1F2937] to-[#14B8A6]">
          <div className="container text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Us in Reimagining Employability
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you're a student, college, or company, we'd love to connect
              with you.
            </p>
            <Button asChild className="bg-white text-foreground hover:bg-gray-100 font-semibold">
              <Link href="/contact">Get in Touch <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
