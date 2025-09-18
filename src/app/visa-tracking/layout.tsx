import type { Metadata } from "next";
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Visa Tracking - EZMove | Track Your Ireland Visa Status",
  description: "Track your Ireland visa application status with EZMove. Get real-time updates on your visa processing, document verification, and approval timeline. Secure and reliable visa tracking system.",
  keywords: "visa tracking Ireland, Ireland visa status, visa application tracker, visa processing time Ireland, track visa application, Ireland visa updates, visa status checker, immigration status Ireland",
};

export default function VisaTrackingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Clean Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="group">
              <div className="flex items-center gap-3">
                <img 
                  src="/assets/images/ez.png" 
                  alt="EZMove Logo" 
                  width={48} 
                  height={48} 
                  className="rounded-2xl transition-all duration-300 w-12 h-12 object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-black text-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent tracking-tight">
                    EZMove
                  </span>
                  <span className="text-xs text-slate-500 font-medium -mt-1">Relocation Simplified</span>
                </div>
              </div>
            </Link>
            <Link 
              href="/"
              className="text-slate-600 hover:text-emerald-600 font-medium transition-colors"
            >
              ← Back to Main Page
            </Link>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main>
        {children}
      </main>
    </div>
  );
}