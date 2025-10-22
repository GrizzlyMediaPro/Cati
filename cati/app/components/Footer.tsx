import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 md:py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#7A1E39' }}>
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/logo-cati.png"
                alt="Dr. Catalina Nae Iancu - Medic Stomatologie Generala"
                width={50}
                height={50}
                className="object-contain md:w-[60px] md:h-[60px]"
              />
              <div className="ml-3 md:ml-4">
                <h3 className="text-lg md:text-2xl font-bold text-white">Dr. Catalina Nae Iancu</h3>
                <p className="text-sm md:text-base text-white opacity-90">Medic Stomatologie Generala</p>
              </div>
            </div>
            <p className="text-white opacity-90 mb-4 text-sm md:text-base max-w-md">
              Oferim servicii stomatologice de înaltă calitate într-un mediu modern și confortabil. 
              Zâmbetul tău este prioritatea noastră.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              <a 
                href="tel:+40XXXXXXXXX" 
                className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                style={{ backgroundColor: '#E24B6C' }}
                aria-label="Sună-ne"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/40XXXXXXXXX?text=Bună! Vreau să programez o consultație." 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                style={{ backgroundColor: '#25D366' }}
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
              <a 
                href="mailto:contact@drcatalinax.ro" 
                className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                style={{ backgroundColor: '#A3C7E2' }}
                aria-label="Email"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Link-uri Rapide</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white opacity-90 hover:opacity-100 transition-opacity text-sm md:text-base">
                  Acasă
                </Link>
              </li>
              <li>
                <a href="/despre" className="text-white opacity-90 hover:opacity-100 transition-opacity text-sm md:text-base">
                  Despre Noi
                </a>
              </li>
              <li>
                <a href="/servicii" className="text-white opacity-90 hover:opacity-100 transition-opacity text-sm md:text-base">
                  Servicii
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white opacity-90 hover:opacity-100 transition-opacity text-sm md:text-base">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Contact</h4>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-start">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white mt-1 mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
                <p className="text-white opacity-90 text-xs md:text-sm">
                  Str. Exemplu Nr. 123<br/>
                  Sector 1, București<br/>
                  România, 010001
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white mt-1 mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <p className="text-white opacity-90 text-xs md:text-sm">
                  +40 XXX XXX XXX
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white mt-1 mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
                </svg>
                <div className="text-white opacity-90 text-xs md:text-sm">
                  <p>Luni - Vineri: 09:00 - 19:00</p>
                  <p>Sâmbătă: 10:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white border-opacity-20 pt-4 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-white text-center md:text-left">
              <p className="text-xs md:text-sm opacity-90">
                © 2025 Cabinet Stomatologic Dr. Catalina Nae Iancu. Toate drepturile rezervate.
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6 text-xs md:text-sm">
              <a href="#" className="text-white opacity-90 hover:opacity-100 transition-opacity">
                Politica de Confidențialitate
              </a>
              <a href="#" className="text-white opacity-90 hover:opacity-100 transition-opacity">
                Termeni și Condiții
              </a>
              <a href="#" className="text-white opacity-90 hover:opacity-100 transition-opacity">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
