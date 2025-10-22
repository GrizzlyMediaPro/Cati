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
            alt="Dr. Catalina Nae Iancu - Servicii Stomatologice"
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
                Descoperă gama completă de servicii stomatologice oferite de Dr. Catalina Nae Iancu cu prețuri transparente și accesibile
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Urgențe Stomatologice */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#7A1E39' }}>
                Urgențe Stomatologice
              </h2>
              <div className="w-24 h-1 mx-auto rounded" style={{ backgroundColor: '#E24B6C' }}></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#7A1E39' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Consultație</h3>
                <p className="text-gray-600 mb-3">Examinare completă și diagnostic</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>50 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#7A1E39' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Drenaj Endodontic</h3>
                <p className="text-gray-600 mb-3">Tratament de urgență pentru infecții</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>50 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#7A1E39' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Incizie Abces</h3>
                <p className="text-gray-600 mb-3">Intervenție chirurgicală de urgență</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>30 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#7A1E39' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Chiuretaj Alveolar</h3>
                <p className="text-gray-600 mb-3">Curățare profundă a țesuturilor</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>50 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#7A1E39' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Pansament Calmant</h3>
                <p className="text-gray-600 mb-3">Tratament pentru dureri acute</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>30 RON</div>
              </div>
            </div>
          </div>

          {/* Profilaxie */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#7A1E39' }}>
                Profilaxie
              </h2>
              <div className="w-24 h-1 mx-auto rounded" style={{ backgroundColor: '#E24B6C' }}></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#A3C7E2' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Detartraj Ultrasunete / Dinte</h3>
                <p className="text-gray-600 mb-3">Curățare cu ultrasunete per dinte</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>10 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#A3C7E2' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Detartraj + Periaj / Arcadă</h3>
                <p className="text-gray-600 mb-3">Tratament complet pentru o arcadă</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>100 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#A3C7E2' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Detartraj + AirFlow / Arcadă</h3>
                <p className="text-gray-600 mb-3">Tratament premium cu lustruire AirFlow</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>200 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#A3C7E2' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Fluorizare / Arcadă</h3>
                <p className="text-gray-600 mb-3">Întărirea smalțului dentar</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>50 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#A3C7E2' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Sigilare / Dinte</h3>
                <p className="text-gray-600 mb-3">Protecție pentru dinții de lapte</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>100 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#A3C7E2' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Periaj Profesional / Arcadă</h3>
                <p className="text-gray-600 mb-3">Curățare profesională cu periaj</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>50 RON</div>
              </div>
            </div>
          </div>

          {/* Odontologie */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#7A1E39' }}>
                Odontologie
              </h2>
              <div className="w-24 h-1 mx-auto rounded" style={{ backgroundColor: '#E24B6C' }}></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#E24B6C' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Obturație Compozit Fluid</h3>
                <p className="text-gray-600 mb-3">Obturație estetică cu compozit fluid</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>100 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#E24B6C' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Obturație Compozit Fotopolimerizabil</h3>
                <p className="text-gray-600 mb-3">Obturație modernă cu polimerizare</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>200 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#E24B6C' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Obturație Glassionomer</h3>
                <p className="text-gray-600 mb-3">Obturație cu material biocompatibil</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>100 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#E24B6C' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Refacere Bont Dentar cu Breeze</h3>
                <p className="text-gray-600 mb-3">Reconstrucție cu material Breeze</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>150 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#E24B6C' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Refacere Bont Dentar cu Compozit</h3>
                <p className="text-gray-600 mb-3">Reconstrucție cu compozit</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>150 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#E24B6C' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Îndepărtare Obturație Amalgam</h3>
                <p className="text-gray-600 mb-3">Înlăturarea obturațiilor vechi</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>20 RON</div>
              </div>
            </div>
          </div>

          {/* Endodonție */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#7A1E39' }}>
                Endodonție
              </h2>
              <div className="w-24 h-1 mx-auto rounded" style={{ backgroundColor: '#E24B6C' }}></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#7A1E39' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Extirpare Vitală + Obturație Canal (Monoradiculari)</h3>
                <p className="text-gray-600 mb-3">Tratament de canal pentru dinți cu o rădăcină</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>150 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#7A1E39' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Extirpare Vitală + Obturație Canal (Pluriradiculari)</h3>
                <p className="text-gray-600 mb-3">Tratament de canal pentru dinți cu mai multe rădăcini</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>200 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#7A1E39' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Tratament Gangrene (4 ședințe)</h3>
                <p className="text-gray-600 mb-3">Tratament complex pentru infecții</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>200 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#7A1E39' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Dezobturare Canal Radicular</h3>
                <p className="text-gray-600 mb-3">Retratament pentru canalele radiculare</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>50 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#7A1E39' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Tratament Albire ENDO / Dinte</h3>
                <p className="text-gray-600 mb-3">Albire internă pentru dinți tratate endodontic</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>100 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#7A1E39' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Pivot Fibră Sticlă + Reconstituire</h3>
                <p className="text-gray-600 mb-3">Reconstrucție cu pivot de fibră de sticlă</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>200 RON</div>
              </div>
            </div>
          </div>

          {/* Chirurgie */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#7A1E39' }}>
                Chirurgie
              </h2>
              <div className="w-24 h-1 mx-auto rounded" style={{ backgroundColor: '#E24B6C' }}></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#A3C7E2' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Extracție Dinte Monoradicular</h3>
                <p className="text-gray-600 mb-3">Extracție pentru dinți cu o rădăcină</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>100 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#A3C7E2' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Extracție Dinte Pluriradicular</h3>
                <p className="text-gray-600 mb-3">Extracție pentru dinți cu mai multe rădăcini</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>150 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#A3C7E2' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Extracție Dinte Mobil</h3>
                <p className="text-gray-600 mb-3">Extracție pentru dinți mobili sau temporari</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>80 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#A3C7E2' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Extracție Molar de Minte</h3>
                <p className="text-gray-600 mb-3">Extracție pentru dinții de minte</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>200 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#A3C7E2' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Decapușonare</h3>
                <p className="text-gray-600 mb-3">Înlăturarea operculului gingival</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>50 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#A3C7E2' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Sutură</h3>
                <p className="text-gray-600 mb-3">Suturarea rănilor chirurgicale</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>20 RON</div>
              </div>
            </div>
          </div>

          {/* Parodontologie */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#7A1E39' }}>
                Parodontologie
              </h2>
              <div className="w-24 h-1 mx-auto rounded" style={{ backgroundColor: '#E24B6C' }}></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#E24B6C' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Tratament Abces Parodontal</h3>
                <p className="text-gray-600 mb-3">Tratament pentru infecții parodontale</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>50 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#E24B6C' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Instilații în Pungile Parodontale</h3>
                <p className="text-gray-600 mb-3">Tratament cu antibiotic în pungi parodontale</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>20 RON</div>
              </div>
            </div>
          </div>

          {/* Protetică */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#7A1E39' }}>
                Protetică
              </h2>
              <div className="w-24 h-1 mx-auto rounded" style={{ backgroundColor: '#E24B6C' }}></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#7A1E39' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Coroană Metalică</h3>
                <p className="text-gray-600 mb-3">Coroană din metal pentru rezistență</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>300 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#7A1E39' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Coroană Semifizionomică cu Fațetă Ceramică</h3>
                <p className="text-gray-600 mb-3">Coroană estetică cu fațetă ceramică</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>500 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#7A1E39' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Coroană Fizionomică Ceramică Cr-Co</h3>
                <p className="text-gray-600 mb-3">Coroană estetică cu suport metalic</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>600 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#7A1E39' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Coroană Fizionomică Ceramică Zirconiu</h3>
                <p className="text-gray-600 mb-3">Coroană premium cu suport din zirconiu</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>850 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#7A1E39' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Proteză Acrilică</h3>
                <p className="text-gray-600 mb-3">Proteză mobilă din acrilic</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>1400 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#7A1E39' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Proteză Scheletată</h3>
                <p className="text-gray-600 mb-3">Proteză mobilă cu schelet metalic</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>2500 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#7A1E39' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Reparație Fractură Proteză</h3>
                <p className="text-gray-600 mb-3">Reparație pentru proteze fracturate</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>200 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#7A1E39' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Reparație Croset</h3>
                <p className="text-gray-600 mb-3">Reparație pentru crosete de proteză</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>100 RON</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: '#7A1E39' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#7A1E39' }}>Gutiere Bruxism</h3>
                <p className="text-gray-600 mb-3">Gutiere pentru protecție împotriva bruxismului</p>
                <div className="text-2xl font-bold" style={{ color: '#E24B6C' }}>200 RON</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center py-16 rounded-2xl" style={{ background: 'linear-gradient(135deg, #7A1E39 0%, #E24B6C 100%)' }}>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ai întrebări despre prețuri?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Contactează-ne pentru o consultație gratuită și un plan de tratament personalizat
            </p>
            <Link 
              href="/#contact" 
              className="inline-block px-8 py-4 bg-white text-lg font-semibold rounded-full transition-transform hover:scale-105 shadow-lg"
              style={{ color: '#7A1E39' }}
            >
              Programează Consultație
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
