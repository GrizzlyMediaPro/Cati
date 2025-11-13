"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Servicii() {
  return (
    <div className="min-h-screen">
      <Navbar currentPage="servicii" />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC01947.jpg"
            alt="Dr. Catalina-Ionela Iancu - Servicii Stomatologice"
            fill
            className="object-cover"
            priority
          />
          {/* Burgundy Fade Overlay */}
          <div 
            className="absolute inset-0 z-10"
            style={{ 
              background: 'linear-gradient(135deg, rgba(122, 30, 57, 0.8) 0%, rgba(122, 30, 57, 0.6) 50%, rgba(122, 30, 57, 0.4) 100%)'
            }}
          ></div>
        </div>
        
        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto flex-1 flex flex-col">
          <div className="flex-1 flex items-center justify-center pt-20">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
                Servicii și Prețuri
              </h1>
              <p className="text-xl text-white opacity-95 max-w-3xl mx-auto drop-shadow-md">
                Descoperă gama completă de servicii stomatologice oferite de Dr. Catalina-Ionela Iancu cu prețuri transparente și accesibile
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabel Servicii și Prețuri */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#7A1E39' }}>Lista de tarife</h2>
            <p className="text-gray-600 mt-2">Toate prețurile sunt exprimate în RON. Prețuri orientative; în cazuri complexe, tariful se stabilește după consultație.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow ring-1 ring-gray-200 responsive-table">
            <table className="min-w-full divide-y divide-gray-200 price-ron">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Serviciu</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">Preț</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {/* URGENTE STOMATOLOGICE */}
                <tr className="bg-rose-50/60 category-row">
                  <td colSpan={2} className="px-4 py-3 font-bold category" style={{ color: '#7A1E39' }}>URGENTE STOMATOLOGICE</td>
                </tr>
                <tr><td className="px-4 py-3">Consultație + plan tratament</td><td className="px-4 py-3 text-right">150</td></tr>
                <tr><td className="px-4 py-3">Drenaj endodontic</td><td className="px-4 py-3 text-right">300</td></tr>
                <tr><td className="px-4 py-3">Incizie abces</td><td className="px-4 py-3 text-right">200</td></tr>
                <tr><td className="px-4 py-3">Chiuretaj alveolar</td><td className="px-4 py-3 text-right">200</td></tr>
                <tr><td className="px-4 py-3">Pansament calmant</td><td className="px-4 py-3 text-right">200</td></tr>

                {/* ODONTOTERAPIE RESTAURATOARE */}
                <tr id="odontoterapie-restauratoare" className="bg-rose-50/60 category-row scroll-mt-20">
                  <td colSpan={2} className="px-4 py-3 font-bold category" style={{ color: '#7A1E39' }}>ODONTOTERAPIE RESTAURATOARE</td>
                </tr>
                <tr><td className="px-4 py-3">Obturatie compozit fotopolimerizabil</td><td className="px-4 py-3 text-right">300-450</td></tr>
                <tr><td className="px-4 py-3">Fațetă directă compozit</td><td className="px-4 py-3 text-right">500</td></tr>
                <tr><td className="px-4 py-3">Obturatie Glassionomer</td><td className="px-4 py-3 text-right">200</td></tr>
                <tr><td className="px-4 py-3">Sigilări dinți temporari/definitivi (compozit fluid alb/colorat)</td><td className="px-4 py-3 text-right">150</td></tr>
                <tr><td className="px-4 py-3">Pansament provizoriu / Eugenat</td><td className="px-4 py-3 text-right">100</td></tr>
                <tr><td className="px-4 py-3">Reconstituire bont protetic</td><td className="px-4 py-3 text-right">200</td></tr>

                {/* PROFILAXIE */}
                <tr id="profilaxie" className="bg-rose-50/60 category-row scroll-mt-20">
                  <td colSpan={2} className="px-4 py-3 font-bold category" style={{ color: '#7A1E39' }}>PROFILAXIE</td>
                </tr>
                <tr><td className="px-4 py-3">Detartraj ultrasonic + periaj profesional + AirFlow</td><td className="px-4 py-3 text-right">300</td></tr>
                <tr><td className="px-4 py-3">Fluorizare profesională</td><td className="px-4 py-3 text-right">200</td></tr>
                <tr><td className="px-4 py-3">Albire dentară profesională în cabinet / arcadă</td><td className="px-4 py-3 text-right">500</td></tr>
                <tr><td className="px-4 py-3">Albire dentară acasă (include gutiere)</td><td className="px-4 py-3 text-right">1000</td></tr>
                <tr><td className="px-4 py-3">Bijuterii dentare</td><td className="px-4 py-3 text-right">400</td></tr>

                {/* ENDODONTIE */}
                <tr id="endodontie" className="bg-rose-50/60 category-row scroll-mt-20">
                  <td colSpan={2} className="px-4 py-3 font-bold category" style={{ color: '#7A1E39' }}>ENDODONȚIE</td>
                </tr>
                <tr><td className="px-4 py-3">Extirpare vitală + obturație canal monoradicular (rotativ endomotor)</td><td className="px-4 py-3 text-right">300</td></tr>
                <tr><td className="px-4 py-3">Extirpare vitală + obturație canal pluriradicular (rotativ endomotor)</td><td className="px-4 py-3 text-right">400</td></tr>
                <tr><td className="px-4 py-3">Retratament endodontic (dezobturare canal radicular)</td><td className="px-4 py-3 text-right">400</td></tr>
                <tr><td className="px-4 py-3">Tratament gangrenă (3-4 ședințe) [pasta antibiotic, pasta CO(OH)₂, obturație canal]</td><td className="px-4 py-3 text-right">400</td></tr>
                <tr><td className="px-4 py-3">Tratament albire ENDO / dinte</td><td className="px-4 py-3 text-right">300</td></tr>
                <tr><td className="px-4 py-3">Drenaj endodontic</td><td className="px-4 py-3 text-right">200</td></tr>
                <tr><td className="px-4 py-3">Pansament calmant / antiseptic</td><td className="px-4 py-3 text-right">200</td></tr>
                <tr><td className="px-4 py-3">Reconstrucție corono-radiculară (pivot fibră sticlă)</td><td className="px-4 py-3 text-right">300</td></tr>

                {/* CHIRURGIE */}
                <tr id="chirurgie" className="bg-rose-50/60 category-row scroll-mt-20">
                  <td colSpan={2} className="px-4 py-3 font-bold category" style={{ color: '#7A1E39' }}>CHIRURGIE</td>
                </tr>
                <tr><td className="px-4 py-3">Extracție dinte monoradicular</td><td className="px-4 py-3 text-right">300</td></tr>
                <tr><td className="px-4 py-3">Extracție dinte pluriradicular</td><td className="px-4 py-3 text-right">400</td></tr>
                <tr><td className="px-4 py-3">Extracție molar minte (erupt complet)</td><td className="px-4 py-3 text-right">500-700</td></tr>
                <tr><td className="px-4 py-3">Extracție molar de minte semiinclus</td><td className="px-4 py-3 text-right">800-1000</td></tr>
                <tr><td className="px-4 py-3">Extracție dinte parodontic</td><td className="px-4 py-3 text-right">200</td></tr>
                <tr><td className="px-4 py-3">Tratament hemoragie post-extracție</td><td className="px-4 py-3 text-right">150</td></tr>
                <tr><td className="px-4 py-3">Tratament alveolită post-extracție</td><td className="px-4 py-3 text-right">150</td></tr>
                <tr><td className="px-4 py-3">Sutură post-extracție</td><td className="px-4 py-3 text-right">100</td></tr>
                <tr><td className="px-4 py-3">Rezecție apicală + adiție osoasă</td><td className="px-4 py-3 text-right">1500</td></tr>
                <tr><td className="px-4 py-3">Adiție osoasă (1 seringă Bond Apetite Augma + A-PRF)</td><td className="px-4 py-3 text-right">1000</td></tr>
                <tr><td className="px-4 py-3">Terapie A-PRF, I-PRF (recoltare sânge)</td><td className="px-4 py-3 text-right">500</td></tr>

                {/* PARODONTOLOGIE */}
                <tr id="parodontologie" className="bg-rose-50/60 category-row scroll-mt-20">
                  <td colSpan={2} className="px-4 py-3 font-bold category" style={{ color: '#7A1E39' }}>PARODONTOLOGIE</td>
                </tr>
                <tr><td className="px-4 py-3">Tratamentul abcesului parodontal (antibiotic)</td><td className="px-4 py-3 text-right">200</td></tr>
                <tr><td className="px-4 py-3">Chiuretaj parodontal (decontaminare/sterilizare asistată laser / arcadă)</td><td className="px-4 py-3 text-right">500</td></tr>
                <tr><td className="px-4 py-3">Decontaminare pungi parodontale - Hybenx</td><td className="px-4 py-3 text-right">200</td></tr>
                <tr><td className="px-4 py-3">Terapie PRP arcadă (regenerare tisulară)</td><td className="px-4 py-3 text-right">500</td></tr>

                {/* PEDODONTIE */}
                <tr id="pedodontie" className="bg-rose-50/60 category-row scroll-mt-20">
                  <td colSpan={2} className="px-4 py-3 font-bold category" style={{ color: '#7A1E39' }}>PEDODONȚIE</td>
                </tr>
                <tr><td className="px-4 py-3">Periaj profesional + fluorizare</td><td className="px-4 py-3 text-right">200</td></tr>
                <tr><td className="px-4 py-3">Extracție dinți temporari</td><td className="px-4 py-3 text-right">200</td></tr>
                <tr><td className="px-4 py-3">Obturatie compozit fotopolimerizabil colorat – dentiție temporară</td><td className="px-4 py-3 text-right">150</td></tr>
                <tr><td className="px-4 py-3">Obturatie compozit fotopolimerizabil – dentiție permanentă</td><td className="px-4 py-3 text-right">200</td></tr>
                <tr><td className="px-4 py-3">Pansament provizoriu Eugenat</td><td className="px-4 py-3 text-right">100</td></tr>

                {/* IMPLANTOLOGIE */}
                <tr id="implantologie" className="bg-rose-50/60 category-row scroll-mt-20">
                  <td colSpan={2} className="px-4 py-3 font-bold category" style={{ color: '#7A1E39' }}>IMPLANTOLOGIE</td>
                </tr>
                <tr><td className="px-4 py-3">Inserare implant JDEvolution</td><td className="px-4 py-3 text-right">3000</td></tr>
                <tr><td className="px-4 py-3">Aplicare bont protetic JDEvolution</td><td className="px-4 py-3 text-right">450</td></tr>
                <tr><td className="px-4 py-3">Inserare implant DIO</td><td className="px-4 py-3 text-right">3000</td></tr>
                <tr><td className="px-4 py-3">Aplicare bont protetic DIO</td><td className="px-4 py-3 text-right">450</td></tr>
                <tr><td className="px-4 py-3">Inserare implant Bredent</td><td className="px-4 py-3 text-right">4000</td></tr>
                <tr><td className="px-4 py-3">Aplicare bont Bredent</td><td className="px-4 py-3 text-right">550</td></tr>
                <tr><td className="px-4 py-3">Lucrare fixă pe implanturi cu structură Crom-Cobalt / arcadă</td><td className="px-4 py-3 text-right">10000</td></tr>
                <tr><td className="px-4 py-3">Supraproteză mobilă pe implanturi (cu locator și capse)</td><td className="px-4 py-3 text-right">10000</td></tr>

                {/* PROTETICA DENTARA */}
                <tr id="protetica-dentara" className="bg-rose-50/60 category-row scroll-mt-20">
                  <td colSpan={2} className="px-4 py-3 font-bold category" style={{ color: '#7A1E39' }}>PROTETICĂ DENTARĂ</td>
                </tr>
                <tr><td className="px-4 py-3">Ablație coroană / dinte</td><td className="px-4 py-3 text-right">50</td></tr>
                <tr><td className="px-4 py-3">Coroană provizorie PMMA</td><td className="px-4 py-3 text-right">400</td></tr>
                <tr><td className="px-4 py-3">Coroană metalo-ceramică fizionomică</td><td className="px-4 py-3 text-right">800</td></tr>
                <tr><td className="px-4 py-3">Coroană ceramică pe suport Zirconiu</td><td className="px-4 py-3 text-right">1200</td></tr>
                <tr><td className="px-4 py-3">Coroană pe implant metalo-ceramică fizionomică</td><td className="px-4 py-3 text-right">1000</td></tr>
                <tr><td className="px-4 py-3">Coroană pe implant ceramică pe Zirconiu</td><td className="px-4 py-3 text-right">1500</td></tr>
                <tr><td className="px-4 py-3">Proteza totală/parțială acrilat</td><td className="px-4 py-3 text-right">1800-2000</td></tr>
                <tr><td className="px-4 py-3">Proteza scheletată</td><td className="px-4 py-3 text-right">3500</td></tr>
                <tr><td className="px-4 py-3">Proteza dentară Kemeny (1-2 dinți)</td><td className="px-4 py-3 text-right">700</td></tr>
                <tr><td className="px-4 py-3">Reparație proteză (căptușire)</td><td className="px-4 py-3 text-right">450</td></tr>
                <tr><td className="px-4 py-3">Adăugare dinți în proteză existentă</td><td className="px-4 py-3 text-right">300</td></tr>
                <tr><td className="px-4 py-3">Gutiere Bruxism</td><td className="px-4 py-3 text-right">400</td></tr>
                <tr><td className="px-4 py-3">Cimentare definitivă</td><td className="px-4 py-3 text-right">200</td></tr>
              </tbody>
            </table>
          </div>
          <style jsx>{`
            .price-ron tbody td:last-child::after { content: ' RON'; }
            .price-ron tbody td:last-child { white-space: nowrap; padding-right: 2rem !important; }
            .price-ron tbody td.category::after { content: '' !important; }
            /* Mobile-friendly table */
            @media (max-width: 640px) {
              .responsive-table thead { display: none; }
              .responsive-table table { border-collapse: separate; border-spacing: 0; }
              .responsive-table tbody tr { display: flex; align-items: center; justify-content: space-between; padding: 12px; }
              .responsive-table tbody tr:nth-child(odd) { background: #fafafa; }
              /* Category rows centered */
              .responsive-table tbody tr.category-row { display: block; text-align: center; }
              .responsive-table tbody tr.category-row td.category { display: block; width: 100%; text-align: center; }
              .responsive-table tbody td { display: block; padding: 0 !important; }
              .responsive-table tbody td:first-child { flex: 1; padding-right: 12px !important; word-break: break-word; }
              .responsive-table tbody td:last-child { font-weight: 600; margin-left: 16px; padding-right: 18px !important; }
            }
          `}</style>
          <div className="text-sm text-gray-500 mt-4">Prețurile pot varia în funcție de complexitatea cazului și materialele folosite.</div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
