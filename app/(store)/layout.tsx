import type { Metadata } from "next";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { SanityLive } from "@/sanity/lib/live";
import Footer from "@/components/Footer";
import ScrollWatcher from "@/components/ScrollWatcher";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
      <html lang="en">
        <body className="relative">
          <ScrollWatcher />
          <Header />
          {children}
          <SanityLive />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
