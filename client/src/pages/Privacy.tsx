import { Navigation, Footer } from "@/components/Navigation";
import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Privacy Policy Page
 * Modern Minimalism Design - Indigo & Teal Accents
 */
export default function Privacy() {
  const [location] = useLocation();

  useEffect(() => {
    if (location && location.startsWith("/privacy")) {
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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="h-1 w-16 bg-gradient-to-r from-[#1F2937] to-[#14B8A6] mb-6 mx-auto"></div>

              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Privacy Policy
              </h1>

              <p className="text-lg text-muted-foreground">
                Last updated: January 2026
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container max-w-3xl">
            <div className="prose prose-sm max-w-none space-y-8 text-muted-foreground">
              <div>
                <p className="text-base leading-relaxed">
                  BloomingPros.ai ("we", "us", "our") is an AI-powered employability
                  ecosystem that connects talent, educational institutions, and
                  industry to improve employment readiness and opportunities. This
                  Privacy Policy explains how we collect, use, store, and share your
                  information when you access our website, platform, campaigns, or
                  surveys.
                </p>
                <p className="text-base leading-relaxed mt-4">
                  By using our services, you agree to this Privacy Policy and our
                  Terms of Service.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Summary of Key Commitments
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span>We do not sell your personal data.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span>You control what you share on your profile and portfolio.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span>
                      Colleges and companies see what you choose to make visible or
                      what is required for employability-related activities.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span>
                      We use your data only for employment and employability-related
                      purposes.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span>
                      We do not explicitly use your personal data to train external
                      AI models.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span>
                      If you delete your account, your portfolio is deleted, and your
                      personal data is marked for deletion unless retention is required
                      by law.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span>
                      We follow global best practices and are aligned with GDPR and
                      India's DPDP Act.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  1. Legal Basis for Processing Data
                </h2>
                <p className="leading-relaxed">
                  We process your data based on:
                </p>
                <ul className="space-y-2 mt-3 ml-4">
                  <li>• Your explicit or implied consent</li>
                  <li>• Performance of a contract</li>
                  <li>• Compliance with legal and regulatory obligations</li>
                  <li>• Protection of vital interests</li>
                  <li>• Public interest</li>
                  <li>
                    • Our legitimate interests in operating an employability
                    ecosystem
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  2. Information We Collect
                </h2>
                <p className="leading-relaxed mb-4">
                  We may collect the following categories of personal information:
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      A. Personal & Identity Information
                    </h3>
                    <p className="text-sm">
                      First name, last name, title, contact details, email address,
                      location, institute or company name, gender, date of birth, and
                      religion/caste/ethnicity.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      B. Education & Employability Data
                    </h3>
                    <p className="text-sm">
                      Educational qualifications, marks, results, skills, assessments,
                      readiness indicators, employer information, and compensation
                      details.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      C. Electronic Identification Data
                    </h3>
                    <p className="text-sm">
                      IP address, location, date and time of access, login credentials,
                      browser details, device type, operating system, and usage
                      statistics.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      D. Portfolio & Evidence Data
                    </h3>
                    <p className="text-sm">
                      Any projects, documents, or evidence you upload are visible only
                      to colleges, companies, and mentors as per your settings.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  3. Data Storage & Security
                </h2>
                <p className="leading-relaxed mb-4">
                  Your data is securely stored in Microsoft Azure Cloud with:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• AES 256-bit encryption at rest</li>
                  <li>• TLS 1.2 encryption in transit</li>
                  <li>• Multi-tenant data isolation</li>
                  <li>• Audit logs for user activity and API interactions</li>
                  <li>• Azure Security Center threat monitoring</li>
                  <li>• Azure Active Directory (AAD) identity management and MFA</li>
                  <li>• Azure Firewall and Network Security Groups</li>
                  <li>• Regular vulnerability testing</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  4. Data Retention & Deletion
                </h2>
                <p className="leading-relaxed">
                  When you delete your account:
                </p>
                <ul className="space-y-2 mt-3 ml-4">
                  <li>
                    • Your portfolio and uploaded evidence are permanently deleted
                  </li>
                  <li>
                    • Your personal information is marked for deletion and becomes
                    non-discoverable
                  </li>
                  <li>
                    • Certain data may be retained only if required for legal
                    obligations, fraud prevention, security, or maintaining platform
                    integrity
                  </li>
                  <li>• We may retain anonymized data for analytics</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  5. Compliance
                </h2>
                <p className="leading-relaxed">
                  BloomingPros.ai follows global data protection principles and is
                  aligned with:
                </p>
                <ul className="space-y-2 mt-3 ml-4">
                  <li>• GDPR (General Data Protection Regulation)</li>
                  <li>• DPDP Act (India)</li>
                  <li>• Industry-standard security practices</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  6. Questions
                </h2>
                <p className="leading-relaxed">
                  For questions or concerns about our privacy practices, contact:
                </p>
                <p className="font-semibold text-foreground mt-3">
                  dpo@bloomingpros.ai
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  7. Modifications to This Privacy Policy
                </h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy periodically. If material changes
                  occur, we will notify you via email, in-service notifications, or
                  other methods required by law. Continued use of the services after
                  updates constitutes acceptance of the revised policy.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-sm">
                  This privacy policy is governed by the laws of India and forms part
                  of our terms of service. By using BloomingPros.ai, you acknowledge
                  that you have read and understood this policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
