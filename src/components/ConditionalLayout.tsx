"use client";

import { usePathname } from "next/navigation";

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  
  // Special pages that don't need navbar padding
  const noNavbarPages = ['/visa-tracking', '/careers'];
  const needsPadding = !noNavbarPages.includes(pathname);

  return (
    <div style={{ paddingTop: needsPadding ? '80px' : '0' }}>
      {children}
    </div>
  );
}