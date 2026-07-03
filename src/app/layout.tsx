import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SearchProvider } from "@/components/search/search-provider";
import { SearchDialog } from "@/components/search/search-dialog";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { BackToTop } from "@/components/layout/back-to-top";
import { ServiceWorkerRegister } from "@/components/pwa/sw-register";
import { RecordRecentlyViewed } from "@/components/interaction/recently-viewed";
import { JsonLd } from "@/components/content/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/constants";
import { withBasePath } from "@/lib/base-path";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = buildMetadata({
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="manifest" href={withBasePath("/manifest.webmanifest")} />
        <meta name="theme-color" content="#0f172a" />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: SITE_NAME,
            description: SITE_DESCRIPTION,
            url: SITE_URL,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>
            <SearchProvider>
              <Header />
              <Breadcrumbs />
              <SearchDialog />
              <main className="flex-1">{children}</main>
              <Footer />
              <BackToTop />
              <ServiceWorkerRegister />
              <RecordRecentlyViewed />
            </SearchProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
