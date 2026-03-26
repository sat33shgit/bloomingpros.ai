import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Navigation, Footer } from "@/components/Navigation";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Contact Page
 * Modern Minimalism Design - Indigo & Teal Accents
 */
export default function Contact() {
  const [location] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    source: "",
    message: "",
    consent: false,
  });

  useEffect(() => {
    // Get source from URL params
    const params = new URLSearchParams(window.location.search);
    const source = params.get("source") || "general";
    setFormData((prev) => ({ ...prev, source }));
  }, [location]);

  useEffect(() => {
    // When navigated to the contact page, scroll to top
    if (location && location.startsWith("/contact")) {
      try {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch {
        window.scrollTo(0, 0);
      }
    }
  }, [location]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    if (!formData.consent) {
      alert("Please agree to the communication consent to continue.");
      return;
    }

    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      role: "",
      source: formData.source,
      message: "",
      consent: false,
    });
  };

  const sourceOptions = [
    { value: "students", label: "I'm a Student" },
    { value: "colleges", label: "I'm from a College" },
    { value: "companies", label: "I'm from a Company" },
    { value: "general", label: "General Inquiry" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="h-1 w-16 bg-gradient-to-r from-[#1F2937] to-[#14B8A6]"></div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Contact Us
              </h1>

              <h2 className="text-2xl md:text-3xl font-semibold text-accent mb-6">
                Let's Reimagine Employability Together
              </h2>

              <p className="text-lg text-muted-foreground">
                Whether you're a college, company, or student, we'd love to connect.
                Have questions? Want to discuss partnerships? Reach out to our team.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white border-y border-border">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-[#14B8A6]/20 to-[#1F2937]/20">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">Email</h3>
                    </div>
                    <p className="text-muted-foreground">
                      <a
                        href="mailto:dpo@bloomingpros.ai"
                        className="hover:text-accent transition-colors"
                      >
                        dpo@bloomingpros.ai
                      </a>
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-[#14B8A6]/20 to-[#1F2937]/20">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        Location
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      Pune, India
                      <br />
                      Global Team
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="font-semibold text-foreground mb-3">
                      Response Time
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      We typically respond to inquiries within 24-48 hours during
                      business days.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white text-foreground"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white text-foreground"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white text-foreground"
                        placeholder="Enter your contact number"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Organization/College/Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white text-foreground"
                        placeholder="Your organization"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Organization/College/Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white text-foreground"
                        placeholder="Your organization"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="role"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Your Role
                      </label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white text-foreground"
                        placeholder="Your role/position"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="source"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      I am interested in *
                    </label>
                    <select
                      id="source"
                      name="source"
                      value={formData.source}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white text-foreground"
                    >
                      {sourceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white text-foreground resize-none"
                      placeholder="Tell us about your inquiry..."
                    ></textarea>
                  </div>

                  <div className="text-sm text-muted-foreground bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <p className="mb-4">
                      BloomingPros.ai is committed to protecting and respecting your privacy, and we’ll only use your personal information to administer your account and to provide the products and services you requested from us. From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you. If you consent to us contacting you for this purpose, please tick below to say how you would like us to contact you:
                    </p>

                    <label className="inline-flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData((p) => ({ ...p, consent: e.target.checked }))}
                        className="w-4 h-4"
                      />
                      <span className="ml-2">I agree to receive other communications from BloomingPros.ai.</span>
                    </label>

                    <p className="mt-4">
                      You can unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our Privacy Policy.
                    </p>

                    <p className="mt-4 text-xs">
                      By clicking submit below, you consent to allow BloomingPros.ai to store and process the personal information submitted above to provide you the content requested.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    disabled={!formData.consent}
                    className={`w-full bg-gradient-to-r from-[#1F2937] to-[#14B8A6] hover:shadow-lg transition-shadow ${
                      !formData.consent ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
                
              </div>
            </div>
          </div>
        </section>

        {/* FAQ removed as requested */}
      </main>

      <Footer />
    </div>
  );
}
