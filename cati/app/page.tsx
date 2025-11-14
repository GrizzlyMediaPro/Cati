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
              Despre Dr. Catalina-Ionela Iancu
            </h2>
            <div className="w-24 h-1 mx-auto rounded" style={{ backgroundColor: '#E24B6C' }}></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl p-8 shadow-xl" style={{ backgroundColor: '#7A1E39' }}>
              <div className="aspect-square bg-white rounded-xl flex items-center justify-center">
          <Image
                  src="/sub-hero.jpg"
                  alt="Dr. Catalina-Ionela Iancu"
                  width={300}
                  height={300}
                  className="object-cover rounded-xl shadow-2xl"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#7A1E39' }}>
                Experiență și Profesionalism
              </h3>
              <p className="mb-4" style={{ color: '#333333' }}>
              Dr. Catalina-Ionela Iancu este medic stomatolog cu peste 12 ani de experienta, a absolvit Universitatea Titu Maiorescu Bucuresti-Facultatea de Medicina Dentara 2013.
              Din 2014 este membru al Colegiului Medicilor Dentisti Bucuresti.
              Si-a perfectionat continuu abilitatile prin participarea la numeroase congrese, cursuri, simpozioane de specialitate

              </p>
              <p className="mb-6" style={{ color: '#333333' }}>
                Pasionată de domeniul stomatologiei estetice și reconstructive, Dr. Catalina-Ionela Iancu oferă pacienților săi 
                cele mai moderne și eficiente tratamente, adaptate nevoilor individuale ale fiecăruia.
              </p>
              <div className="space-y-3">
                <h4 className="text-xl font-semibold" style={{ color: '#7A1E39' }}>Certificări și formare</h4>
                <ul className="list-disc pl-6 space-y-2" style={{ color: '#333333' }}>
                  <li>Absolventă Universitatea Titu Maiorescu – Facultatea de Medicină Dentară (promoția 2013)</li>
                  <li>Membru Colegiul Medicilor Dentiști București (din 2014)</li>
                  <li>Certificări și cursuri de perfecționare în endodonție, protetică, estetică dentară și chirurgie orală</li>
                  <li>Participări periodice la congrese, simpozioane și workshopuri naționale și internaționale</li>
                </ul>
                
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Service Card 1 - Odontoterapie Restauratoare */}
            <a href="/servicii#odontoterapie-restauratoare" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 group block">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src="/restaurativa.jpg"
                  alt="Odontoterapie Restauratoare"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-lg">
                    Odontoterapie Restauratoare
                  </h3>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-center text-sm sm:text-base font-medium" style={{ color: '#7A1E39' }}>
                  Tratamentul cariei dentare.
                </p>
              </div>
            </a>

            {/* Service Card 2 - Profilaxie */}
            <a href="/servicii#profilaxie" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 group block">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src="/preventiva.jpg"
                  alt="Profilaxie"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-lg">
                    Profilaxie
                  </h3>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-center text-sm sm:text-base font-medium" style={{ color: '#7A1E39' }}>
                  Prevenția problemelor dentare și menținerea sănătății orale prin pechete de igienizare și albire dentară.
                </p>
              </div>
            </a>

            {/* Service Card 3 - Endodonție */}
            <a href="/servicii#endodontie" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 group block">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src="/endodontic.jpg"
                  alt="Endodonție"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-lg">
                    Endodonție
                  </h3>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-center text-sm sm:text-base font-medium" style={{ color: '#7A1E39' }}>
                  Tratamentul afectiunii pulpei dentare.
                </p>
              </div>
            </a>

            {/* Service Card 4 - Chirurgie */}
            <a href="/servicii#chirurgie" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 group block">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src="/Chirurgie-orala.jpg"
                  alt="Chirurgie"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-lg">
                    Chirurgie
                  </h3>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-center text-sm sm:text-base font-medium" style={{ color: '#7A1E39' }}>
                  Extracții dentare și intervenții chirurgicale.
                </p>
              </div>
            </a>

            {/* Service Card 5 - Parodontologie */}
            <a href="/servicii#parodontologie" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 group block">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src="/Parodontologie.jpg"
                  alt="Parodontologie"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-lg">
                    Parodontologie
                  </h3>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-center text-sm sm:text-base font-medium" style={{ color: '#7A1E39' }}>
                  Tratamente pentru afectiuni gingivale și parodontale.
                </p>
              </div>
            </a>

            {/* Service Card 6 - Pedodonție */}
            <a href="/servicii#pedodontie" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 group block">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src="/pedodontie.jpg"
                  alt="Pedodonție"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-lg">
                    Pedodonție
                  </h3>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-center text-sm sm:text-base font-medium" style={{ color: '#7A1E39' }}>
                  Profilaxia și tratamentul dentiției temporare și definitive.
                </p>
              </div>
            </a>

            {/* Service Card 7 - Implantologie */}
            <a href="/servicii#implantologie" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 group block">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src="/implantologie.jpg"
                  alt="Implantologie"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-lg">
                    Implantologie
                  </h3>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-center text-sm sm:text-base font-medium" style={{ color: '#7A1E39' }}>
                  Înlocuirea dinților lipsă prin implanturi dentare.
                </p>
              </div>
            </a>

            {/* Service Card 8 - Protetică Dentară */}
            <a href="/servicii#protetica-dentara" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 group block">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src="/protetica-dentara.webp"
                  alt="Protetică Dentară"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-lg">
                    Protetică Dentară
                  </h3>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-center text-sm sm:text-base font-medium" style={{ color: '#7A1E39' }}>
                  Înlocuirea dinților lipsă prin lucrări protetice fixe sau mobile.
                </p>
              </div>
            </a>
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

      {/* Contact Preview Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#A3C7E2' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#7A1E39' }}>
              Contactează-ne
            </h2>
            <div className="w-24 h-1 mx-auto rounded" style={{ backgroundColor: '#E24B6C' }}></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6" style={{ backgroundColor: '#7A1E39' }}>
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4" style={{ color: '#7A1E39' }}>Locația Noastră</h3>
              <p className="mb-4 text-sm sm:text-base" style={{ color: '#333333' }}>Str. Iancu Capitanu nr.19, etaj 1, interfon 102, sector 2, București</p>
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
              <p className="mb-4" style={{ color: '#333333' }}>0726822173</p>
              <a 
                href="tel:0726822173" 
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
                href="https://wa.me/40726822173?text=Bună! Vreau să programez o consultație." 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-white transition-transform hover:scale-105 shadow-lg text-sm sm:text-base"
                style={{ backgroundColor: '#25D366' }}
              >
                WhatsApp
              </a>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6" style={{ backgroundColor: '#7A1E39' }}>
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4" style={{ color: '#7A1E39' }}>Mail</h3>
              <p className="mb-4 text-sm sm:text-base" style={{ color: '#333333' }}>caty_nae@yahoo.com</p>
              <a 
                href="mailto:caty_nae@yahoo.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-white transition-transform hover:scale-105 shadow-lg text-sm sm:text-base"
                style={{ backgroundColor: '#7A1E39' }}
              >
                Trimite Email
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
