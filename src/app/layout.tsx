import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import NavigationMenu from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { ReactQueryClientProvider } from "@/components/ReactQueryClientProvider";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CaseCobra",
  description: "A Case That You Wouldn't like to miss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <NavigationMenu />
        <main className="flex flex-col min-h-[100dvh]">
          <div className="flex-1 flex flex-col h-full">
            <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
          </div>
          <Footer />
        </main>
        <Toaster richColors closeButton position="top-center" theme="light" />
      </body>
    </html>
  );
}
