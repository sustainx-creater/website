import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - EZMove | Join Our Team",
  description: "Join the EZMove team and help us build the future of relocation technology in Ireland. Currently in closed beta with future opportunities available.",
  keywords: "EZMove careers, jobs Ireland, relocation technology, startup jobs, Dublin jobs",
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}