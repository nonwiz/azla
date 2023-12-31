import "./globals.css";

import { Metadata } from "next";

import { Analytics } from "@/components/analytics";
import { ThemeProvider } from "@/components/providers";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { siteConfig } from "@/config/site";
import { fontJosefin } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Public health",
    "Mental health",
    "Community outreach",
    "Fundraising",
    "Health promotion",
    "Program development and evaluation",
  ],
  authors: [
    {
      name: "Azla Jonuling",
      url: "https://azla.vercel.app",
    },
  ],
  creator: "Azla Jonuling",
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "white" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "Azla Jonuling",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href={"/logo.png"} type="image/x-icon" sizes="any" />
        </head>
        <body
          className={cn(
            "min-h-screen bg-background antialiased",
            fontJosefin.className
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              {/* <SiteHeader /> */}
              <div className="flex-1">{children}</div>
              {/* <SiteFooter /> */}
            </div>
            <TailwindIndicator />
          </ThemeProvider>
          <ThemeSwitcher />
          <Analytics />
        </body>
      </html>
    </>
  );
}
