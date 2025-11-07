import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Lucrari() {
  const lucrari = [
    {
      id: 1,
      inainte: "/pozalucrareinainte1.jpg",
      dupa: "/pozalucraredupa1.jpg",
      titlu: "Lucrare 1",
      descriere: "Transformare completă a zâmbetului prin tratamente estetice și restaurative de înaltă calitate."
    },
    {
      id: 2,
      inainte: "/pozalucrareinainte2.jpg",
      dupa: "/pozalucraredupa2.jpg",
      titlu: "Lucrare 2",
      descriere: "Reconstrucție dentară cu rezultate naturale și durabile, respectând estetica facială."
    },
    {
      id: 3,
      inainte: "/pozalucrareinainte3.jpg",
      dupa: "/pozalucraredupa3.jpg",
      titlu: "Lucrare 3",
      descriere: "Tratament complex de restaurare cu tehnologii moderne și materiale premium."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar currentPage="lucrari" />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC01947.jpg"
            alt="Dr. Catalina-Ionela Iancu - Lucrări"
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
                Lucrările Noastre
              </h1>
              <p className="text-xl text-white opacity-95 max-w-3xl mx-auto drop-shadow-md">
                Descoperă transformările realizate și rezultatele obținute prin tratamente stomatologice de excelență
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lucrări Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#7A1E39' }}>
              Rezultate Reale, Zâmbete Perfecte
            </h2>
            <div className="w-24 h-1 mx-auto rounded" style={{ backgroundColor: '#E24B6C' }}></div>
            <p className="mt-6 text-lg max-w-3xl mx-auto" style={{ color: '#333333' }}>
              Fiecare lucrare reprezintă dedicarea noastră pentru a oferi cele mai bune rezultate, 
              combinând tehnologii moderne cu experiență și atenție la detalii.
            </p>
          </div>

          <div className="space-y-24">
            {lucrari.map((lucrare, index) => (
              <div key={lucrare.id} className="space-y-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-2" style={{ color: '#7A1E39' }}>
                    {lucrare.titlu}
                  </h3>
                  <p className="text-lg" style={{ color: '#666666' }}>
                    {lucrare.descriere}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Înainte */}
                  <div className="space-y-4">
                    <div className="text-center">
                      <h4 className="text-2xl font-semibold mb-2" style={{ color: '#7A1E39' }}>
                        Înainte
                      </h4>
                      <div className="w-16 h-1 mx-auto rounded" style={{ backgroundColor: '#E24B6C' }}></div>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-50 border-2 border-gray-100">
                      <div className="relative aspect-square bg-white">
                        <Image
                          src={lucrare.inainte}
                          alt={`Înainte - ${lucrare.titlu}`}
                          fill
                          className="object-contain p-2"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  </div>

                  {/* După */}
                  <div className="space-y-4">
                    <div className="text-center">
                      <h4 className="text-2xl font-semibold mb-2" style={{ color: '#7A1E39' }}>
                        După
                      </h4>
                      <div className="w-16 h-1 mx-auto rounded" style={{ backgroundColor: '#E24B6C' }}></div>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-50 border-2" style={{ borderColor: '#7A1E39' }}>
                      <div className="relative aspect-square bg-white">
                        <Image
                          src={lucrare.dupa}
                          alt={`După - ${lucrare.titlu}`}
                          fill
                          className="object-contain p-2"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {index < lucrari.length - 1 && (
                  <div className="flex justify-center pt-8">
                    <div className="w-24 h-1 rounded" style={{ backgroundColor: '#A3C7E2' }}></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #7A1E39 0%, #E24B6C 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Vrei să transformi și tu zâmbetul tău?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Programează o consultație și descoperă ce tratamente sunt potrivite pentru tine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-white text-lg font-semibold rounded-full transition-transform hover:scale-105 shadow-lg"
              style={{ color: '#7A1E39' }}
            >
              Programează Consultație
            </a>
            <a 
              href="/servicii" 
              className="inline-block px-8 py-4 bg-transparent text-lg font-semibold rounded-full border-2 border-white text-white transition-all hover:bg-white hover:text-[#7A1E39] shadow-lg"
            >
              Vezi Serviciile
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

