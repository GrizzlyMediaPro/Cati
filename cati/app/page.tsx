import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar currentPage="home" />

      <Hero />

      {/* Despre Section */}
      <section id="despre" className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #A3C7E2 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#7A1E39' }}>
              Despre Dr. Catalina Nae Iancu
            </h2>
            <div className="w-24 h-1 mx-auto rounded" style={{ backgroundColor: '#E24B6C' }}></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl p-8 shadow-xl" style={{ backgroundColor: '#7A1E39' }}>
              <div className="aspect-square bg-white rounded-xl flex items-center justify-center">
          <Image
                  src="/logo-cati.png"
                  alt="Dr. Catalina Nae Iancu"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#7A1E39' }}>
                Experiență și Profesionalism
              </h3>
              <p className="mb-4" style={{ color: '#333333' }}>
                Dr. Catalina Nae Iancu este medic stomatolog cu peste 15 ani de experiență în domeniul tratamentelor dentare moderne. 
                Absolventă cu distincție a Facultății de Medicină Dentară, și-a perfecționat continuu abilitățile prin 
                participarea la numeroase cursuri de specialitate în țară și străinătate.
              </p>
              <p className="mb-6" style={{ color: '#333333' }}>
                Pasionată de domeniul stomatologiei estetice și reconstructive, Dr. Catalina Nae Iancu oferă pacienților săi 
                cele mai moderne și eficiente tratamente, adaptate nevoilor individuale ale fiecăruia.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#E24B6C' }}></div>
                  <span style={{ color: '#333333' }}>Certificări internaționale în stomatologie</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#E24B6C' }}></div>
                  <span style={{ color: '#333333' }}>Membru al asociațiilor profesionale de specialitate</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#E24B6C' }}></div>
                  <span style={{ color: '#333333' }}>Formare continuă și tehnologii de ultimă generație</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicii Section */}
      <section id="servicii" className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #7A1E39 0%, #E24B6C 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Serviciile Noastre
            </h2>
            <div className="w-24 h-1 mx-auto rounded bg-white"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Service Card 1 - Stomatologie Generală */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 group">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src="/preventiva.jpg"
                  alt="Stomatologie Generală"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Stomatologie Generală
                  </h3>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-center text-sm sm:text-base" style={{ color: '#333333' }}>
                  Consultații complete, tratamente cariilor, detartraj, igienizare profesională și alte servicii de bază.
                </p>
              </div>
            </div>

            {/* Service Card 2 - Stomatologie Estetică */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 group">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src="/estetica.webp"
                  alt="Stomatologie Estetică"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Stomatologie Estetică
                  </h3>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-center text-sm sm:text-base" style={{ color: '#333333' }}>
                  Albire dentară, fațete dentare, coroane și punți estetice pentru un zâmbet perfect.
                </p>
              </div>
            </div>

            {/* Service Card 3 - Implantologie */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 group">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src="/implantologie.jpg"
                  alt="Implantologie"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Implantologie
                  </h3>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-center text-sm sm:text-base" style={{ color: '#333333' }}>
                  Implanturi dentare de calitate superioară pentru înlocuirea dinților lipsă, cu aspect natural.
                </p>
              </div>
            </div>

            {/* Service Card 4 - Endodonție */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 group">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src="/endodontic.jpg"
                  alt="Endodonție"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Endodonție
                  </h3>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-center text-sm sm:text-base" style={{ color: '#333333' }}>
                  Tratamente de canal radicular cu tehnologii moderne pentru salvarea dinților.
                </p>
              </div>
            </div>

            {/* Service Card 5 - Chirurgie Orală */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 group">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src="/Chirurgie-orala.jpg"
                  alt="Chirurgie Orală"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Chirurgie Orală
                  </h3>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-center text-sm sm:text-base" style={{ color: '#333333' }}>
                  Extracții dentare, intervenții chirurgicale și tratamente pentru afecțiuni complexe.
                </p>
              </div>
            </div>

            {/* Service Card 6 - Parodontologie */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 group">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src="/Parodontologie.jpg"
                  alt="Parodontologie"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Parodontologie
                  </h3>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-center text-sm sm:text-base" style={{ color: '#333333' }}>
                  Tratarea afecțiunilor gingivale și a țesuturilor de susținere ale dinților.
                </p>
              </div>
            </div>

            {/* Service Card 7 - Pedodontie */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 group">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src="/pedodontie.jpg"
                  alt="Pedodontie"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Pedodontie
                  </h3>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-center text-sm sm:text-base" style={{ color: '#333333' }}>
                  Stomatologie pediatrică - îngrijirea specializată a dinților copiilor.
                </p>
              </div>
            </div>

            {/* Service Card 8 - Restaurativă */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 group">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src="/restaurativa.jpg"
                  alt="Stomatologie Restaurativă"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Stomatologie Restaurativă
                  </h3>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-center text-sm sm:text-base" style={{ color: '#333333' }}>
                  Obturații, coroane, punți și alte lucrări pentru restaurarea funcției dentare.
                </p>
              </div>
            </div>

            {/* Service Card 9 - Protetică */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 group">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src="/protetica-dentara.webp"
                  alt="Protetică Dentară"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Protetică Dentară
                  </h3>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-center text-sm sm:text-base" style={{ color: '#333333' }}>
                  Proteze mobile și fixe, coroane, fațete și alte lucrări protetice.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a 
              href="/servicii" 
              className="inline-block px-8 py-4 bg-white text-lg font-semibold rounded-full transition-transform hover:scale-105 shadow-lg"
              style={{ color: '#7A1E39' }}
            >
              Vezi Toate Prețurile
            </a>
          </div>
        </div>
      </section>

      {/* De ce să ne alegi Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#7A1E39' }}>
              De ce să ne alegi pe noi?
            </h2>
            <div className="w-24 h-1 mx-auto rounded" style={{ backgroundColor: '#E24B6C' }}></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-3" style={{ color: '#E24B6C' }}>15+</div>
              <p className="font-semibold mb-1 md:mb-2 text-sm sm:text-base" style={{ color: '#7A1E39' }}>Ani de Experiență</p>
              <p className="text-xs sm:text-sm" style={{ color: '#333333' }}>În domeniul stomatologiei</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-3" style={{ color: '#E24B6C' }}>5000+</div>
              <p className="font-semibold mb-1 md:mb-2 text-sm sm:text-base" style={{ color: '#7A1E39' }}>Pacienți Mulțumiți</p>
              <p className="text-xs sm:text-sm" style={{ color: '#333333' }}>De-a lungul anilor</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-3" style={{ color: '#E24B6C' }}>100%</div>
              <p className="font-semibold mb-1 md:mb-2 text-sm sm:text-base" style={{ color: '#7A1E39' }}>Tehnologie Modernă</p>
              <p className="text-xs sm:text-sm" style={{ color: '#333333' }}>Echipamente de ultimă generație</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-3" style={{ color: '#E24B6C' }}>★ 5.0</div>
              <p className="font-semibold mb-1 md:mb-2 text-sm sm:text-base" style={{ color: '#7A1E39' }}>Evaluări Excelente</p>
              <p className="text-xs sm:text-sm" style={{ color: '#333333' }}>Recenzii de la pacienți</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#A3C7E2' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#7A1E39' }}>
              Contactează-ne
            </h2>
            <div className="w-24 h-1 mx-auto rounded" style={{ backgroundColor: '#E24B6C' }}></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6" style={{ backgroundColor: '#7A1E39' }}>
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4" style={{ color: '#7A1E39' }}>Locația Noastră</h3>
              <p className="mb-4 text-sm sm:text-base" style={{ color: '#333333' }}>Str. Exemplu Nr. 123, București</p>
              <a 
                href="/contact" 
                className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-white transition-transform hover:scale-105 shadow-lg text-sm sm:text-base"
                style={{ backgroundColor: '#E24B6C' }}
              >
                Vezi Hartă
              </a>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#E24B6C' }}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#7A1E39' }}>Sună Acum</h3>
              <p className="mb-4" style={{ color: '#333333' }}>+40 XXX XXX XXX</p>
              <a 
                href="tel:+40XXXXXXXXX" 
                className="inline-block px-6 py-3 rounded-full font-semibold text-white transition-transform hover:scale-105 shadow-lg"
                style={{ backgroundColor: '#7A1E39' }}
              >
                Sună
              </a>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6" style={{ backgroundColor: '#A3C7E2' }}>
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4" style={{ color: '#7A1E39' }}>WhatsApp</h3>
              <p className="mb-4 text-sm sm:text-base" style={{ color: '#333333' }}>Mesaj rapid</p>
              <a 
                href="https://wa.me/40XXXXXXXXX?text=Bună! Vreau să programez o consultație." 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-white transition-transform hover:scale-105 shadow-lg text-sm sm:text-base"
                style={{ backgroundColor: '#25D366' }}
              >
                WhatsApp
              </a>
            </div>
          </div>
          <div className="text-center mt-12">
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-white text-lg font-semibold rounded-full transition-transform hover:scale-105 shadow-lg"
              style={{ color: '#7A1E39' }}
            >
              Vezi Toate Informațiile de Contact
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
