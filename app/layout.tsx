import type { Metadata } from "next";
import "./globals.css";
import { SiteProvider } from "@/components/site-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Mandal Jewellers ",
  description: "Discover timeless gold, diamond and everyday jewellery at Mandal Jewellers.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteProvider>
          <div className="bg-ink px-4 py-2 text-center text-[10px] font-medium uppercase tracking-[.22em] text-white sm:text-xs">
            A little luxury, made personal <span className="mx-2 text-gold"></span> 
          </div>
          <Header />
          {children}
          <Footer />
        </SiteProvider>
      </body>
    </html>
  );
}
