import { Button } from "@/components/ui/button";
import { Navigation, Footer } from "@/components/Navigation";
import { Link } from "wouter";
import { Gift, Calendar, CreditCard, MessageSquare, Star } from "lucide-react";
import { useState } from "react";

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
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder: integrate signup flow
    alert("Thanks — we'll reach out about the PoC.");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left marketing card */}
            <div className="lg:col-span-7">
              <div className="max-w-xl bg-gradient-to-r from-white to-white/95 rounded-2xl shadow-xl p-12">
                <div className="flex items-center justify-center mb-6">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[#E6F7F4] to-[#EEF8FB] flex items-center justify-center">
                    <Gift className="w-10 h-10 text-accent" />
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-6">
                  Join Our Free 6-Month PoC Program
                </h1>

                <p className="text-center text-muted-foreground mb-8">
                  Completely free until June 2026 — no credit card required. Shape the product as a founding user.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-gray-50 border border-border rounded-lg p-4">
                    <Calendar className="w-5 h-5 text-accent" />
                    <div className="text-sm text-foreground">Completely free until June 2026</div>
                  </div>

                  <div className="flex items-center gap-4 bg-gray-50 border border-border rounded-lg p-4">
                    <CreditCard className="w-5 h-5 text-accent" />
                    <div className="text-sm text-foreground">No credit card required</div>
                  </div>

                  <div className="flex items-center gap-4 bg-gray-50 border border-border rounded-lg p-4">
                    <MessageSquare className="w-5 h-5 text-accent" />
                    <div className="text-sm text-foreground">Shape the product with your feedback</div>
                  </div>

                  <div className="flex items-center gap-4 bg-gray-50 border border-border rounded-lg p-4">
                    <Star className="w-5 h-5 text-accent" />
                    <div className="text-sm text-foreground">Lifetime benefits as a founding user</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right signup form */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-lg shadow p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Sign Up</h2>
                <p className="text-sm text-muted-foreground mb-6">Enter your details to join the PoC</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm text-foreground mb-2">User Type *</label>
                    <select
                      name="userType"
                      value={form.userType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-white"
                    >
                      <option value="">Select User Type</option>
                      <option value="student">Student</option>
                      <option value="college">College</option>
                      <option value="company">Company</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="First name *"
                      className="w-full px-4 py-2 border border-border rounded-lg"
                      required
                    />
                    <input
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Last name *"
                      className="w-full px-4 py-2 border border-border rounded-lg"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Official Email Id *"
                      className="w-full px-4 py-2 border border-border rounded-lg"
                      required
                    />
                    <input
                      name="contact"
                      value={form.contact}
                      onChange={handleChange}
                      placeholder="Contact Number *"
                      className="w-full px-4 py-2 border border-border rounded-lg"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-[#1F2937] to-[#14B8A6]">
                    Join Free PoC
                  </Button>

                  <div className="text-center text-sm text-muted-foreground mt-4">
                    <div>
                      Already have an account? <Link href="/login" className="text-accent">Login</Link>
                    </div>
                    <div className="mt-2">
                        By creating an account, you agree to our <Link href="/terms" className="text-accent">Terms and Conditions</Link> and <Link href="/privacy" className="text-accent">Privacy Policy</Link>
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
