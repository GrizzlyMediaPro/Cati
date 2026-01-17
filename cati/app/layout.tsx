import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const baseUrl = "https://drcatalinaiancu.ro";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Dr. Catalina-Ionela Iancu - Cabinet Stomatologic București | Tratamente Dentare de Înaltă Calitate",
    template: "%s | Dr. Catalina-Ionela Iancu",
  },
  description: "Cabinet stomatologic modern în București, Sector 2. Dr. Catalina-Ionela Iancu oferă tratamente dentare profesionale: odontoterapie restauratoare, endodonție, implantologie, protetică dentară, parodontologie, pedodonție și chirurgie orală. Programează-te acum!",
  keywords: [
    "dentist București",
    "cabinet stomatologic București",
    "stomatologie Sector 2",
    "Dr. Catalina-Ionela Iancu",
    "tratamente dentare",
    "odontoterapie restauratoare",
    "endodonție",
    "implantologie dentară",
    "protetică dentară",
    "parodontologie",
    "pedodonție",
    "chirurgie orală",
    "albire dentară",
    "igienizare dentară",
    "medic stomatolog București",
    "dentist Sector 2",
    "cabinet stomatologic modern",
    "tratamente dentare profesionale",
    "Str. Iancu Capitanu",
  ],
  authors: [{ name: "Dr. Catalina-Ionela Iancu", url: baseUrl }],
  creator: "Dr. Catalina-Ionela Iancu",
  publisher: "Dr. Catalina-Ionela Iancu",
  category: "Stomatologie",
  classification: "Cabinet Stomatologic",
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: baseUrl,
    siteName: "Dr. Catalina-Ionela Iancu - Cabinet Stomatologic",
    title: "Dr. Catalina-Ionela Iancu - Cabinet Stomatologic București | Tratamente Dentare de Înaltă Calitate",
    description: "Cabinet stomatologic modern în București, Sector 2. Dr. Catalina-Ionela Iancu oferă tratamente dentare profesionale: odontoterapie restauratoare, endodonție, implantologie, protetică dentară, parodontologie, pedodonție și chirurgie orală. Programează-te acum!",
    images: [
      {
        url: `${baseUrl}/catalina-iancu).png`,
        width: 1200,
        height: 630,
        alt: "Dr. Catalina-Ionela Iancu - Cabinet Stomatologic București",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Catalina-Ionela Iancu - Cabinet Stomatologic București",
    description: "Cabinet stomatologic modern în București, Sector 2. Tratamente dentare profesionale: odontoterapie, endodonție, implantologie, protetică dentară și multe altele.",
    images: [`${baseUrl}/catalina-iancu).png`],
    creator: "@drcatalinaiancu",
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
  verification: {
    // Adaugă aici codurile de verificare pentru Google Search Console, Bing, etc. când le vei avea
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  other: {
    "geo.region": "RO-B",
    "geo.placename": "București",
    "geo.position": "44.4268;26.1025",
    "ICBM": "44.4268, 26.1025",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Dr. Catalina-Ionela Iancu",
    "image": `${baseUrl}/catalina-iancu).png`,
    "url": baseUrl,
    "telephone": "+40726822173",
    "email": "caty_nae@yahoo.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Str. Iancu Capitanu nr.19, etaj 1, interfon 102",
      "addressLocality": "București",
      "addressRegion": "Sector 2",
      "postalCode": "020000",
      "addressCountry": "RO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.4268,
      "longitude": 26.1025
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "$$",
    "medicalSpecialty": [
      "Dentistry",
      "Restorative Dentistry",
      "Endodontics",
      "Oral Surgery",
      "Periodontics",
      "Pediatric Dentistry",
      "Dental Implants",
      "Prosthodontics"
    ],
    "description": "Cabinet stomatologic modern în București, Sector 2. Dr. Catalina-Ionela Iancu oferă tratamente dentare profesionale: odontoterapie restauratoare, endodonție, implantologie, protetică dentară, parodontologie, pedodonție și chirurgie orală.",
    "sameAs": [
      "https://wa.me/40726822173"
    ]
  };

  return (
    <html lang="ro">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
