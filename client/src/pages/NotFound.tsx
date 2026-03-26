import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Navigation, Footer } from "@/components/Navigation";
import { ArrowRight, Home } from "lucide-react";

/**
 * Not Found (404) Page
 * Modern Minimalism Design - Indigo & Teal Accents
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container text-center">
          <div className="mb-8">
            <div className="text-9xl font-bold bg-gradient-to-r from-[#1F2937] to-[#14B8A6] bg-clip-text text-transparent">
              404
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Page Not Found
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Oops! It looks like you've wandered off the path. The page you're
            looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-gradient-to-r from-[#1F2937] to-[#14B8A6] hover:shadow-lg transition-shadow">
              <Link href="/"> <Home className="w-4 h-4 mr-2" /> Back to Home</Link>
            </Button>
            <Button asChild variant="outline" className="border-border hover:bg-secondary">
              <Link href="/contact">Contact Support <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>

          {/* Decorative elements */}
          <div className="mt-20 flex justify-center gap-8">
            <Link href="/" className="text-muted-foreground hover:text-accent transition-colors text-sm">Home</Link>
            <Link href="/students" className="text-muted-foreground hover:text-accent transition-colors text-sm">For Students</Link>
            <Link href="/colleges" className="text-muted-foreground hover:text-accent transition-colors text-sm">For Colleges</Link>
            <Link href="/companies" className="text-muted-foreground hover:text-accent transition-colors text-sm">For Companies</Link>
            <Link href="/about" className="text-muted-foreground hover:text-accent transition-colors text-sm">About</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
