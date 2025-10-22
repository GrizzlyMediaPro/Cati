import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Despre() {
  return (
    <div className="min-h-screen">
      <Navbar currentPage="despre" />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC01871.jpg"
            alt="Dr. Catalina Nae Iancu - Cabinet Stomatologic"
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
                Povestea Doamnei Doctor
              </h1>
              <p className="text-xl text-white opacity-95 max-w-3xl mx-auto drop-shadow-md">
                O călătorie de pasiune, dedicare și iubire pentru stomatologie
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#7A1E39' }}>
                Începuturile unei Pasiuni
              </h2>
              <div className="space-y-6 text-lg" style={{ color: '#333333' }}>
                <p>
                  Dr. Catalina Nae Iancu și-a descoperit pasiunea pentru stomatologie încă din copilărie, 
                  când vizitele regulate la dentist nu erau o experiență temută, ci o aventură 
                  fascinantă în lumea științei și tehnologiei medicale.
                </p>
                <p>
                  Crescută într-o familie de medici, a învățat de mică că sănătatea este cea mai 
                  prețioasă comoară și că un zâmbet sănătos poate schimba viața unei persoane. 
                  Această convingere a pus bazele unei cariere dedicate îmbunătățirii calității 
                  vieții pacienților prin stomatologie de excelență.
                </p>
                <p>
                  &ldquo;Fiecare dinte spune o poveste, și eu vreau să fiu parte din povestea 
                  zâmbetului perfect al fiecărui pacient&rdquo;, spune Dr. Catalina Nae Iancu cu o 
                  zâmbet cald și încurajator.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl p-8 shadow-2xl" style={{ backgroundColor: '#A3C7E2' }}>
                <div className="aspect-square bg-white rounded-xl flex items-center justify-center">
                  <Image
                    src="/logo-cati.png"
                    alt="Dr. Catalina Nae Iancu - Începuturile"
                    width={400}
                    height={400}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg" style={{ backgroundColor: '#E24B6C' }}>
                2008
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl p-8 shadow-2xl" style={{ backgroundColor: '#7A1E39' }}>
                <div className="aspect-square bg-white rounded-xl flex items-center justify-center">
                  <Image
                    src="/logo-cati.png"
                    alt="Dr. Catalina Nae Iancu - Formarea"
                    width={400}
                    height={400}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#7A1E39' }}>
                Anii de Formare și Perfecționare
              </h2>
              <div className="space-y-6 text-lg" style={{ color: '#333333' }}>
                <p>
                  Absolventă cu distincție a Facultății de Medicină Dentară, Dr. Catalina Nae Iancu 
                  și-a continuat formarea prin specializări în stomatologie estetică și 
                  reconstructive la cele mai prestigioase centre din Europa.
                </p>
                <p>
                  A participat la peste 50 de congrese și cursuri de specialitate în țară și 
                  străinătate, dobândind tehnici avansate în implantologie, ortodonție și 
                  stomatologie estetică. Fiecare curs reprezintă pentru ea o oportunitate 
                  de a învăța ceva nou și de a-și îmbunătăți abilitățile pentru beneficiul pacienților.
                </p>
                <p>
                  &ldquo;Învățarea nu se oprește niciodată în medicina dentară. Tehnologiile evoluează 
                  rapid și trebuie să fim mereu la curent cu ultimele inovații pentru a oferi 
                  pacienților cea mai bună îngrijire posibilă.&rdquo;
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#7A1E39' }}>
                Deschiderea Cabinetului
              </h2>
              <div className="space-y-6 text-lg" style={{ color: '#333333' }}>
                <p>
                  În 2015, Dr. Catalina Nae Iancu și-a realizat visul de a deschide propriul cabinet 
                  stomatologic, un spațiu modern și confortabil unde pacienții se pot simți 
                  în siguranță și relaxați.
                </p>
                <p>
                  Cabinetul a fost proiectat cu grijă pentru a oferi o experiență plăcută 
                  și relaxantă. De la designul modern și culorile calde, până la echipamentele 
                  de ultimă generație, totul a fost gândit pentru confortul și siguranța pacienților.
                </p>
                <p>
                  &ldquo;Vreau ca fiecare pacient să părăsească cabinetul cu un zâmbet pe buze, 
                  nu doar din cauza tratamentului primit, ci și pentru experiența plăcută 
                  pe care am creat-o împreună.&rdquo;
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl p-8 shadow-2xl" style={{ backgroundColor: '#E24B6C' }}>
                <div className="aspect-square bg-white rounded-xl flex items-center justify-center">
                  <Image
                    src="/logo-cati.png"
                    alt="Dr. Catalina Nae Iancu - Cabinetul"
                    width={400}
                    height={400}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg" style={{ backgroundColor: '#A3C7E2' }}>
                2015
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl p-8 shadow-2xl" style={{ backgroundColor: '#A3C7E2' }}>
                <div className="aspect-square bg-white rounded-xl flex items-center justify-center">
                  <Image
                    src="/logo-cati.png"
                    alt="Dr. Catalina Nae Iancu - Prezentul"
                    width={400}
                    height={400}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#7A1E39' }}>
                Prezentul și Viitorul
              </h2>
              <div className="space-y-6 text-lg" style={{ color: '#333333' }}>
                <p>
                  Astăzi, Dr. Catalina Nae Iancu este recunoscută ca unul dintre cei mai de succes 
                  stomatologi din zonă, cu peste 5000 de pacienți mulțumiți și o reputație 
                  solidă în domeniul stomatologiei estetice.
                </p>
                <p>
                  Continuă să investească în tehnologii moderne, participând la cursuri 
                  internaționale și implementând cele mai noi tehnici în cabinetul său. 
                  De la tratamente de canal cu microscop, la implanturi cu tehnologie 3D, 
                  fiecare procedură este executată cu precizie și atenție la detalii.
                </p>
                <p>
                  &ldquo;Visul meu este să continui să transform zâmbetele și să ofer pacienților 
                  mei încrederea de a zâmbi din toată inima. Fiecare pacient care părăsește 
                  cabinetul cu un zâmbet perfect este o nouă poveste de succes.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #7A1E39 0%, #E24B6C 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Valorile Noastre
            </h2>
            <div className="w-24 h-1 mx-auto rounded bg-white"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-white bg-opacity-20">
                <svg className="w-10 h-10 text-[#7A1E39]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                  <path d="M19 15L19.5 17L22 17.5L19.5 18L19 20L18.5 18L16 17.5L18.5 17L19 15Z"/>
                  <path d="M5 15L5.5 17L8 17.5L5.5 18L5 20L4.5 18L2 17.5L4.5 17L5 15Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excelență</h3>
              <p className="text-white opacity-90">
                Ne străduim să oferim servicii de cea mai înaltă calitate, folosind tehnologii moderne și tehnici avansate.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-white bg-opacity-20">
                <svg className="w-10 h-10 text-[#7A1E39]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  <path d="M12 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Compasiune</h3>
              <p className="text-white opacity-90">
                Înțelegem că vizita la dentist poate fi stresantă și ne angajăm să oferim o experiență confortabilă și relaxantă.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-white bg-opacity-20">
                <svg className="w-10 h-10 [#7A1E39]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Încredere</h3>
              <p className="text-white opacity-90">
                Construim relații de încredere cu pacienții noștri prin transparență, comunicare deschisă și rezultate de calitate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#7A1E39' }}>
            Vrei să fii parte din povestea noastră?
          </h2>
          <p className="text-xl mb-8" style={{ color: '#333333' }}>
            Programează o consultație și descoperă cum putem transforma zâmbetul tău
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 rounded-full font-semibold text-white transition-transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: '#E24B6C' }}
            >
              Programează Consultație
            </a>
            <a 
              href="/servicii" 
              className="inline-block px-8 py-4 rounded-full font-semibold border-2 transition-all hover:scale-105 shadow-lg"
              style={{ color: '#7A1E39', borderColor: '#7A1E39' }}
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
