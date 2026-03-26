import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hari Ramachandran — Software Engineer",
  description:
    "Portfolio of Hariramakrrishnan Ramachandran — Software Engineer specializing in Java, Spring Boot, Microservices, and Data Analytics.",
  keywords: [
    "Software Engineer",
    "Java Developer",
    "Spring Boot",
    "Microservices",
    "Data Analytics",
    "Full Stack",
    "Dublin",
  ],
  authors: [{ name: "Hariramakrrishnan Ramachandran" }],
  openGraph: {
    title: "Hari Ramachandran — Software Engineer",
    description:
      "Software Engineer specializing in Java, Spring Boot, Microservices & Data Analytics",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
