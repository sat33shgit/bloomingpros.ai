import { Navigation, Footer } from "@/components/Navigation";
import { useState } from "react";
import { ArrowDown } from "lucide-react";
import { Link } from "wouter";

const Section = ({ title, items }: { title: string; items: string[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-12">
      <div className="container max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-foreground mb-6">{title}</h3>
        <div className="space-y-4">
          {items.map((q, i) => (
            <div
              key={i}
              className="bg-white border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className="text-sm font-medium">{q}</span>
                <ArrowDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === i && (
                <div className="p-4 text-sm text-muted-foreground border-t border-border">
                  <p>
                    For detailed answers see the canonical FAQ page or open the
                    original content: <a href="https://content.bloomingpros.ai/faq" target="_blank" rel="noopener noreferrer" className="text-accent">content.bloomingpros.ai/faq</a>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function FAQ() {
  const gettingStarted = [
    "What is BloomingPros.ai",
    "Who can use BloomingPros.ai",
    "How do I get started",
    "Do I need any special technical knowledge",
    "What devices can I use",
  ];

  const poc = [
    "What is the PoC (Proof of Concept) program",
    "Is there really no cost",
    "What happens after the PoC ends (after June 2026)",
    "Why should I join the PoC now",
    "What are you looking for in PoC participants",
    "How long is the commitment",
    "How many people/institutions are participating in the PoC",
  ];

  const students = [
    "What can I do as a student on BloomingPros.ai",
    "I'm a first-year student. Is this relevant for me",
    "I'm about to graduate. Is it too late",
    "What if I don't have any projects to showcase",
    "Will this help me get a job",
    "Is this only for technical/engineering students",
  ];

  const colleges = [
    "What can colleges/institutions do on BloomingPros.ai",
    "How do we onboard our students",
    "What about student data privacy",
    "How much time does this require from our placement cell",
    "We already use a placement management system. Can we still use BloomingPros.ai",
    "What size institutions is this suitable for",
    "Do we need to pay for company connections",
  ];

  const companies = [
    "What can companies do on BloomingPros.ai",
    "What types of companies is this for",
    "How is this different from LinkedIn or Naukri",
    "Is there a cost for companies",
    "How do we evaluate candidates on the platform",
    "Can we connect with specific colleges",
    "What if we need high-volume hiring (100+ positions)",
  ];

  const technical = [
    "Is my data secure",
    "What happens to my data if I delete my account",
    "Can I use BloomingPros.ai offline",
    "What browsers are supported",
    "What if I encounter a technical issue or bug",
    "How does the AI matching work",
    "Do you use AI to read my portfolios",
    "What technology stack do you use",
  ];

  const support = [
    "How do I get help if I'm stuck",
    "What are your support hours",
    "Can I schedule a demo or onboarding call",
    "How do I provide feedback or suggest features",
    "I have a partnership or collaboration idea. Who do I contact",
    "Where can I learn more about your company",
    "Can I share BloomingPros.ai with others",
    "Do you have a community or user group",
    "How often do you update the platform",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="h-1 w-16 bg-gradient-to-r from-[#1F2937] to-[#14B8A6] mb-6 mx-auto"></div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
              <p className="text-muted-foreground">Concise answers and helpful links. If you need more detail, open the full FAQ content.</p>
            </div>
          </div>
        </section>

        {/* Ready to Get Started CTA moved to page end */}

        <Section title="Getting Started" items={gettingStarted} />
        <Section title="About the PoC Program" items={poc} />
        <Section title="For Students" items={students} />
        <Section title="For Colleges" items={colleges} />
        <Section title="For Companies" items={companies} />
        <Section title="Technical & Security" items={technical} />
        <Section title="Support & Contact" items={support} />

        <section className="py-12">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-foreground">Still Have Questions?</h2>
              <p className="text-muted-foreground">Can't find what you're looking for?</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-2xl">📧</div>
                <div>
                  <div className="text-sm text-muted-foreground">Email us:</div>
                  <a href="mailto:contact@bloomingpros.ai" className="text-accent font-medium">contact@bloomingpros.ai</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">📝</div>
                <div>
                  <div className="text-sm text-muted-foreground">Fill out our contact form:</div>
                  <a href="https://content.bloomingpros.ai/contact" target="_blank" rel="noopener noreferrer" className="text-accent font-medium">content.bloomingpros.ai/contact</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">💼</div>
                <div>
                  <div className="text-sm text-muted-foreground">For partnerships:</div>
                  <a href="mailto:partnerships@bloomingpros.ai" className="text-accent font-medium">partnerships@bloomingpros.ai</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">🔗</div>
                <div>
                  <div className="text-sm text-muted-foreground">Connect on LinkedIn:</div>
                  <a href="https://www.linkedin.com/company/bloomingpros-ai" target="_blank" rel="noopener noreferrer" className="text-accent font-medium">linkedin.com/company/bloomingpros-ai</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white border-t border-border">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Get Started?</h2>

            <div className="space-y-4">
              <div>
                <Link href="/app/signup" className="text-accent font-medium">Sign Up Now →</Link>
                <span className="ml-3 text-muted-foreground">Join our free PoC program</span>
              </div>

              <div>
                <Link href="/contact" className="text-accent font-medium">Contact Us →</Link>
                <span className="ml-3 text-muted-foreground">Have specific questions?</span>
              </div>
            </div>
          </div>
        </section>
        
      </main>

      <Footer />
    </div>
  );
}
