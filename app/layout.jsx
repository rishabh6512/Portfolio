import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rishabh Sharma | Fresher | Full-Stack Developer",
  description:
    "Full-stack Developer specializing in React.js, Next.js, and Node.js. Building scalable web applications with modern JavaScript technologies.",
  keywords: [
    "Rishabh Sharma",
    "Fresher",
    "Full-Stack Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "Web Development",
    "JavaScript",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack",
  ],
  authors: [{ name: "Rishabh Sharma" }],
  creator: "Rishabh Sharma",
  publisher: "Rishabh Sharma",
  openGraph: {
    title: "Rishabh Sharma | Fresher",
    description:
      "Full-Stack Developer specializing in React.js, Next.js, and Node.js. Building scalable web applications with modern JavaScript technologies.",
    siteName: "Rishabh Sharma",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}