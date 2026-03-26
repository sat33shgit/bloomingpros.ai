import { Navigation, Footer } from "@/components/Navigation";
import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Terms of Service Page
 * Modern Minimalism Design - Indigo & Teal Accents
 */
export default function Terms() {
  const [location] = useLocation();

  useEffect(() => {
    if (location && location.startsWith("/terms")) {
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
                Terms of Service
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
            <div className="space-y-8 text-muted-foreground">
              <div>
                <p className="text-base leading-relaxed">
                  These Terms of Service ("Terms") govern your access to and use of
                  BloomingPros.ai ("we", "us", "our"), an AI-powered employability
                  ecosystem connecting talent, educational institutions, and industry.
                  By accessing or using our Services, you agree to be bound by these
                  Terms and our Privacy Policy.
                </p>
                <p className="text-base leading-relaxed mt-4">
                  If you do not agree, you must stop using the Services immediately.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  1. Eligibility & Account Responsibilities
                </h2>
                <p className="leading-relaxed mb-4">
                  By using our Services, you confirm that:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span>
                      You are at least the age of majority or legal consent age in your
                      country.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span>
                      You will not use the Services for unlawful, harmful, or
                      unauthorized purposes.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span>
                      You will not transmit viruses, malware, or destructive code.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span>
                      You will comply with all applicable laws, including copyright and
                      data protection laws.
                    </span>
                  </li>
                </ul>
                <p className="leading-relaxed mt-4">
                  To access certain features, you may need to create an account and
                  provide accurate, current, and complete information. You agree to:
                </p>
                <ul className="space-y-2 ml-4 mt-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span>Keep your login credentials secure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span>Notify us immediately of any unauthorized access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span>Accept responsibility for all activities under your account</span>
                  </li>
                </ul>
                <p className="leading-relaxed mt-4">
                  You may be held liable for losses incurred by us or others due to
                  unauthorized use of your account.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  2. General Conditions
                </h2>
                <p className="leading-relaxed mb-4">
                  We reserve the right to:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span>Deny service to anyone at any time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span>Modify or discontinue any part of the Services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span>Remove content that violates these Terms</span>
                  </li>
                </ul>
                <p className="leading-relaxed mt-4">
                  You retain ownership of the content you upload ("User Content").
                  However, by submitting User Content, you grant us a worldwide,
                  royalty-free, transferable, perpetual, sub-licensable, non-exclusive
                  license to use, reproduce, distribute, display, and process your User
                  Content for operating and improving the Services, employability-related
                  activities, platform analytics, and product development.
                </p>
                <p className="leading-relaxed mt-4">
                  You are responsible for your User Content and must not use others'
                  content without permission. We are not liable for misuse of your User
                  Content or intellectual property violations caused by your actions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  3. Accuracy, Completeness & Timeliness of Information
                </h2>
                <p className="leading-relaxed">
                  We do not guarantee that information on the platform is accurate,
                  complete, or current. Content is provided for general informational
                  purposes only. You rely on it at your own risk.
                </p>
                <p className="leading-relaxed mt-4">
                  The Services are provided "as is", without warranties of any kind,
                  including merchantability, fitness for a particular purpose,
                  non-infringement, accuracy, or reliability. We disclaim liability for
                  any losses arising from your use of the Services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  4. Copyright & Trademark Policy
                </h2>
                <p className="leading-relaxed mb-4">
                  All materials on the platform, including text, audio, video, images,
                  graphics, data, and other content, are owned by BloomingPros.ai or
                  used with permission. These materials are protected by copyright,
                  trademark, and other laws.
                </p>
                <p className="leading-relaxed mb-4">You may not:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span>
                      Modify, reproduce, distribute, or publicly display BloomingPros.ai
                      IP
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span>
                      Use BloomingPros.ai IP for commercial purposes without written
                      permission
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span>Remove copyright or proprietary notices</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  5. Modifications to the Service
                </h2>
                <p className="leading-relaxed">
                  We may add or remove features, change requirements, suspend or
                  discontinue the Services at any time, without notice. We are not
                  liable for any modification, suspension, or discontinuation of the
                  Services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  6. Personal Information
                </h2>
                <p className="leading-relaxed">
                  Your submission of personal information is governed by our Privacy
                  Policy, which explains how we collect, use, and protect your data.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  7. Payments
                </h2>
                <p className="leading-relaxed">
                  Some Services may require payment. By purchasing paid Services, you
                  agree to pay applicable fees and taxes, comply with any additional
                  terms, and accept that fees are quoted in Indian Rupees unless stated
                  otherwise. Failure to pay may result in termination of your access.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  8. Service Availability
                </h2>
                <p className="leading-relaxed">
                  BloomingPros.ai is not a storage service. We do not guarantee storage
                  of your content, continued display of your content, or retrieval of
                  deleted or lost content. We may remove or limit access to content as
                  required by law or policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  9. Termination
                </h2>
                <p className="leading-relaxed mb-4">
                  Either you or BloomingPros.ai may terminate this agreement at any
                  time. We may suspend or terminate your access immediately if you
                  violate these Terms, we suspect misuse or unauthorized activity, or
                  if required by law or security concerns.
                </p>
                <p className="leading-relaxed mb-4">Upon termination:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span>Your right to use the Services ends</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span>You remain responsible for any outstanding payments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span>We may restrict future access</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  10. Feedback
                </h2>
                <p className="leading-relaxed">
                  We welcome feedback, suggestions, and ideas. By submitting feedback,
                  you grant us the unrestricted right to use, modify, implement, and
                  commercialize it without compensation or obligation.
                </p>
                <p className="leading-relaxed mt-4">
                  We may monitor, edit, or remove content that we determine to be
                  unlawful, offensive, threatening, defamatory, obscene, or in violation
                  of intellectual property rights or these Terms. You are solely
                  responsible for your comments and their accuracy.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  11. Contact Us
                </h2>
                <p className="leading-relaxed mb-4">
                  For general inquiries, you may contact us through our website.
                </p>
                <p className="leading-relaxed">
                  For legal notices or service of process:
                </p>
                <p className="font-semibold text-foreground mt-2">dpo@bloomingpros.ai</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-sm">
                  These Terms of Service are governed by the laws of India and form
                  part of our agreement with you. By using BloomingPros.ai, you
                  acknowledge that you have read and understood these Terms.
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
