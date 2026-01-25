import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Hunehar | Non Profit Charity Organisation",
    template: "%s | Hunehar",
  },

  description:
    "Hunehar is a non-profit charity organisation dedicated to empowering underprivileged communities through education, welfare initiatives, and social development since 2012.",

  keywords: [
    "Hunehar",
    "Hunehar NGO",
    "non profit charity organisation",
    "education NGO Pakistan",
    "welfare organization Pakistan",
    "charity for underprivileged children",
    "student run NGO Pakistan",
  ],

  openGraph: {
    title: "Hunehar | Non Profit Charity Organisation",
    description:
      "Empowering lives through education, compassion, and community-driven welfare initiatives.",
    url: "https://www.hunehar.org",
    siteName: "Hunehar",
    images: [
      {
        url: "/images/favicon.png",
        width: 1200,
        height: 630,
        alt: "Hunehar Non Profit Charity Organisation",
      },
    ],
    type: "website",
  },

  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
