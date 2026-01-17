import type { Metadata } from "next";

const baseUrl = "https://drcatalinaiancu.ro";

export const metadata: Metadata = {
  title: "Servicii și Prețuri - Dr. Catalina-Ionela Iancu | Cabinet Stomatologic București",
  description: "Servicii stomatologice complete în București: odontoterapie restauratoare, endodonție, implantologie, protetică dentară, parodontologie, pedodonție, chirurgie orală. Prețuri transparente și accesibile. Programează-te acum!",
  keywords: [
    "servicii stomatologice București",
    "prețuri tratamente dentare",
    "odontoterapie restauratoare",
    "endodonție București",
    "implantologie dentară",
    "protetică dentară",
    "parodontologie",
    "pedodonție",
    "chirurgie orală",
    "albire dentară preț",
    "igienizare dentară",
    "tratamente stomatologice prețuri",
  ],
  openGraph: {
    title: "Servicii și Prețuri - Dr. Catalina-Ionela Iancu | Cabinet Stomatologic București",
    description: "Servicii stomatologice complete în București: odontoterapie, endodonție, implantologie, protetică dentară și multe altele. Prețuri transparente.",
    url: `${baseUrl}/servicii`,
    type: "website",
    images: [`${baseUrl}/DSC01947.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicii și Prețuri - Dr. Catalina-Ionela Iancu",
    description: "Servicii stomatologice complete în București cu prețuri transparente. Programează-te acum!",
  },
  alternates: {
    canonical: `${baseUrl}/servicii`,
  },
};

export default function ServiciiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
