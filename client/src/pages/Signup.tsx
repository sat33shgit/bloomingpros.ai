import { Navigation, Footer } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Calendar, CreditCard, ExternalLink, Gift, MessageSquare, Star } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "wouter";

export default function Signup() {
  const [form, setForm] = useState({
    userType: "",
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks - we'll reach out about the PoC.");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 py-12">
        <div className="container">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="max-w-xl rounded-2xl bg-gradient-to-r from-white to-white/95 p-12 shadow-xl">
                <div className="mb-6 flex items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#E6F7F4] to-[#EEF8FB]">
                    <Gift className="h-10 w-10 text-accent" />
                  </div>
                </div>

                <h1 className="mb-6 text-center text-3xl font-bold text-foreground md:text-4xl">
                  Join Our Free 6-Month PoC Program
                </h1>

                <p className="mb-8 text-center text-muted-foreground">
                  Completely free until June 2026 - no credit card required. Shape the product as a founding user.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 rounded-lg border border-border bg-gray-50 p-4">
                    <Calendar className="h-5 w-5 text-accent" />
                    <div className="text-sm text-foreground">Completely free until June 2026</div>
                  </div>

                  <div className="flex items-center gap-4 rounded-lg border border-border bg-gray-50 p-4">
                    <CreditCard className="h-5 w-5 text-accent" />
                    <div className="text-sm text-foreground">No credit card required</div>
                  </div>

                  <div className="flex items-center gap-4 rounded-lg border border-border bg-gray-50 p-4">
                    <MessageSquare className="h-5 w-5 text-accent" />
                    <div className="text-sm text-foreground">Shape the product with your feedback</div>
                  </div>

                  <div className="flex items-center gap-4 rounded-lg border border-border bg-gray-50 p-4">
                    <Star className="h-5 w-5 text-accent" />
                    <div className="text-sm text-foreground">Lifetime benefits as a founding user</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-lg bg-white p-8 shadow">
                <h2 className="mb-4 text-2xl font-semibold text-foreground">Sign Up</h2>
                <p className="mb-6 text-sm text-muted-foreground">Enter your details to join the PoC</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm text-foreground">User Type *</label>
                    <select
                      name="userType"
                      value={form.userType}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-border bg-white px-4 py-2"
                    >
                      <option value="">Select User Type</option>
                      <option value="student">Student</option>
                      <option value="college">College</option>
                      <option value="company">Company</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <input
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="First name *"
                      className="w-full rounded-lg border border-border px-4 py-2"
                      required
                    />
                    <input
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Last name *"
                      className="w-full rounded-lg border border-border px-4 py-2"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Official Email Id *"
                      className="w-full rounded-lg border border-border px-4 py-2"
                      required
                    />
                    <input
                      name="contact"
                      value={form.contact}
                      onChange={handleChange}
                      placeholder="Contact Number *"
                      className="w-full rounded-lg border border-border px-4 py-2"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-[#1F2937] to-[#14B8A6]">
                    Join Free PoC
                  </Button>

                  <div className="mt-4 text-center text-sm text-muted-foreground">
                    <div>
                      Already have an account?{" "}
                      <a
                        href="/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-accent"
                      >
                        <span>Login</span>
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    </div>
                    <div className="mt-2">
                      By creating an account, you agree to our{" "}
                      <Link href="/terms" className="text-accent">
                        Terms and Conditions
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-accent">
                        Privacy Policy
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
