import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingNavBar } from "@/components/navbar";
import Footer from "@/components/footer";

const jakartaPlus = Plus_Jakarta_Sans({
  variable: "--font-jakarta-plus",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Jonatã Cardoso's Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jakartaPlus.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <FloatingNavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
