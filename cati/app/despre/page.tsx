"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function Despre() {
  const certificates = [
    "/diploma1.jpg",
    "/Screenshot 2025-11-07 132104.png",
    "/Screenshot 2025-11-07 132116.png",
    "/Screenshot 2025-11-07 132128.png",
    "/Screenshot 2025-11-07 132140.png",
    "/Screenshot 2025-11-07 132204.png"
  ];

  const cabinetImages = [
    "/cabinet1.jpg",
    "/cabinet2.jpg",
    "/cabinet3.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCabinetIndex, setCurrentCabinetIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
    }, 4000); // Schimbă imaginea la fiecare 4 secunde

    return () => clearInterval(interval);
  }, [certificates.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCabinetIndex((prevIndex) => (prevIndex + 1) % cabinetImages.length);
    }, 4000); // Schimbă imaginea la fiecare 4 secunde

    return () => clearInterval(interval);
  }, [cabinetImages.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToCabinetSlide = (index: number) => {
    setCurrentCabinetIndex(index);
  };

  const goToCabinetPrevious = () => {
    setCurrentCabinetIndex((prevIndex) => 
      prevIndex === 0 ? cabinetImages.length - 1 : prevIndex - 1
    );
  };

  const goToCabinetNext = () => {
    setCurrentCabinetIndex((prevIndex) => 
      prevIndex === cabinetImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="min-h-screen">
      <Navbar currentPage="despre" />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC01871.jpg"
            alt="Dr. Catalina-Ionela Iancu - Cabinet Stomatologic"
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
                  Dr. Catalina-Ionela Iancu și-a început cariera în domeniul medical absolvind școala 
                  post-liceală sanitară, unde a dobândit cunoștințe fundamentale despre asistența 
                  medicală și îngrijirea pacienților.
                </p>
                <p>
                  Ulterior, lucrând într-un cabinet stomatologic, a descoperit pasiunea pentru 
                  stomatologie și a decis să-și continue formarea profesională. Această experiență 
                  practică i-a oferit o perspectivă unică asupra nevoilor pacienților și a pus 
                  bazele pentru o carieră dedicată îmbunătățirii sănătății orale.
                </p>
                <p>
                  Motivată de dorința de a oferi îngrijire de calitate superioară, a început 
                  facultatea de medicină dentară, unde și-a consolidat cunoștințele teoretice 
                  și practice în domeniul stomatologiei.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl p-6 shadow-2xl max-w-sm mx-auto relative overflow-visible" style={{ backgroundColor: '#A3C7E2' }}>
                <div className="aspect-square bg-white rounded-xl flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/cati.png"
                    alt="Dr. Catalina-Ionela Iancu - Începuturile"
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10" style={{ backgroundColor: '#E24B6C', transform: 'translate(50%, -50%)' }}>
                  2013
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl p-4 shadow-2xl bg-gradient-to-br from-gray-50 to-white relative overflow-visible border border-gray-200 max-w-md mx-auto">
                {/* Slideshow Container */}
                <div className="relative w-full" style={{ aspectRatio: '3/4', maxHeight: '500px' }}>
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-white shadow-inner border-2 border-gray-100">
                    {certificates.map((cert, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                          index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                      >
                  <Image
                          src={cert}
                          alt={`Certificat ${index + 1}`}
                          fill
                          className="object-contain p-2"
                          priority={index === 0}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ))}
                    
                    {/* Navigation Buttons */}
                    <button
                      onClick={goToPrevious}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2.5 shadow-xl transition-all z-20 hover:scale-110 border border-gray-200"
                      aria-label="Imaginea anterioară"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#7A1E39' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={goToNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2.5 shadow-xl transition-all z-20 hover:scale-110 border border-gray-200"
                      aria-label="Imaginea următoare"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#7A1E39' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                      {certificates.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`rounded-full transition-all duration-300 ${
                            index === currentIndex 
                              ? 'bg-[#7A1E39] w-8 h-2' 
                              : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
                          }`}
                          aria-label={`Mergi la slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#7A1E39' }}>
                Anii de Formare și Perfecționare
              </h2>
              <div className="space-y-6 text-lg" style={{ color: '#333333' }}>
                <p>
                  Dr. Catalina-Ionela Iancu este medic stomatolog cu peste 12 ani de experienta, a absolvit Universitatea Titu Maiorescu Bucuresti-Facultatea de Medicina Dentara 2013.
                </p>
                <p>
                  Din 2014 este membru al Colegiului Medicilor Dentisti Bucuresti.
                </p>
                <p>
                  Si-a perfectionat continuu abilitatile prin participarea la numeroase congrese, cursuri, simpozioane de specialitate.
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
                  În 2023, Dr. Catalina-Ionela Iancu și-a realizat visul de a deschide propriul cabinet 
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
              <div className="rounded-2xl p-4 shadow-2xl bg-gradient-to-br from-gray-50 to-white relative overflow-visible border border-gray-200 max-w-md mx-auto">
                {/* Slideshow Container */}
                <div className="relative w-full" style={{ aspectRatio: '4/3', maxHeight: '400px' }}>
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-white shadow-inner border-2 border-gray-100">
                    {cabinetImages.map((img, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                          index === currentCabinetIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`Cabinet ${index + 1}`}
                          fill
                          className="object-cover"
                          priority={index === 0}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ))}
                    
                    {/* Navigation Buttons */}
                    <button
                      onClick={goToCabinetPrevious}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2.5 shadow-xl transition-all z-20 hover:scale-110 border border-gray-200"
                      aria-label="Imaginea anterioară"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#7A1E39' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={goToCabinetNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2.5 shadow-xl transition-all z-20 hover:scale-110 border border-gray-200"
                      aria-label="Imaginea următoare"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#7A1E39' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                      {cabinetImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToCabinetSlide(index)}
                          className={`rounded-full transition-all duration-300 ${
                            index === currentCabinetIndex 
                              ? 'bg-[#7A1E39] w-8 h-2' 
                              : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
                          }`}
                          aria-label={`Mergi la slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10" style={{ backgroundColor: '#A3C7E2', transform: 'translate(-50%, 50%)' }}>
                  2023
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl p-6 shadow-2xl max-w-sm mx-auto" style={{ backgroundColor: '#A3C7E2' }}>
                <div className="aspect-square bg-white rounded-xl flex items-center justify-center">
                  <Image
                    src="/logo-cati.png"
                    alt="Dr. Catalina-Ionela Iancu - Prezentul"
                    width={300}
                    height={300}
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
                  Continuă să investească în tehnologii moderne, participând la cursuri și implementând cele mai noi tehnici în cabinet, fiecare procedură fiind executată cu precizie și atenție la detalii.
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
