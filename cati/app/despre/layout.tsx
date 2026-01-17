import type { Metadata } from "next";

const baseUrl = "https://drcatalinaiancu.ro";

export const metadata: Metadata = {
  title: "Despre - Dr. Catalina-Ionela Iancu | Experiență și Profesionalism în Stomatologie",
  description: "Dr. Catalina-Ionela Iancu - Medic stomatolog cu peste 12 ani de experiență. Absolventă Universitatea Titu Maiorescu, membru Colegiul Medicilor Dentiști București. Certificări în endodonție, protetică, estetică dentară și chirurgie orală.",
  keywords: [
    "Dr. Catalina-Ionela Iancu",
    "medic stomatolog București",
    "dentist experiență",
    "certificări stomatologie",
    "universitatea titu maiorescu",
    "colegiul medicilor dentiști",
    "experiență stomatologie",
  ],
  openGraph: {
    title: "Despre - Dr. Catalina-Ionela Iancu | Experiență și Profesionalism",
    description: "Dr. Catalina-Ionela Iancu - Medic stomatolog cu peste 12 ani de experiență, membru Colegiul Medicilor Dentiști București.",
    url: `${baseUrl}/despre`,
    type: "website",
    images: [`${baseUrl}/sub-hero.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Despre - Dr. Catalina-Ionela Iancu | Experiență și Profesionalism",
    description: "Medic stomatolog cu peste 12 ani de experiență. Certificări în endodonție, protetică, estetică dentară și chirurgie orală.",
  },
  alternates: {
    canonical: `${baseUrl}/despre`,
  },
};

export default function DespreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
