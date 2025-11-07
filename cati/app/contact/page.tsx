import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar currentPage="contact" />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact-caty.jpg"
            alt="Dr. Catalina-Ionela Iancu - Contact"
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
                Contactează-ne
              </h1>
              <p className="text-xl text-white opacity-95 max-w-3xl mx-auto drop-shadow-md">
                Suntem aici să îți răspundem la întrebări și să programăm consultația ta
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info & Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-6" style={{ color: '#7A1E39' }}>
                  Informații de Contact
                </h2>
                <div className="w-24 h-1 rounded" style={{ backgroundColor: '#E24B6C' }}></div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4" style={{ borderLeftColor: '#7A1E39' }}>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4" style={{ backgroundColor: '#7A1E39' }}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#7A1E39' }}>Adresă</h3>
                    <p className="text-lg" style={{ color: '#333333' }}>
                      Str. Iancu Capitanu nr.19<br/>
                      Etaj 1, interfon 102<br/>
                      Sector 2, București
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4" style={{ borderLeftColor: '#E24B6C' }}>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4" style={{ backgroundColor: '#E24B6C' }}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#7A1E39' }}>Telefon</h3>
                    <p className="text-lg mb-3" style={{ color: '#333333' }}>
                      0726822173
                    </p>
                    <a 
                      href="tel:0726822173" 
                      className="inline-block px-6 py-3 rounded-full font-semibold text-white transition-transform hover:scale-105 shadow-lg"
                      style={{ backgroundColor: '#E24B6C' }}
                    >
                      Sună Acum
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4" style={{ borderLeftColor: '#A3C7E2' }}>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4" style={{ backgroundColor: '#A3C7E2' }}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#7A1E39' }}>WhatsApp</h3>
                    <p className="text-lg mb-3" style={{ color: '#333333' }}>
                      Trimite mesaj rapid
                    </p>
                    <a 
                      href="https://wa.me/40726822173?text=Bună! Vreau să programez o consultație la cabinetul stomatologic." 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 rounded-full font-semibold text-white transition-transform hover:scale-105 shadow-lg"
                      style={{ backgroundColor: '#25D366' }}
                    >
                      Mesaj WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4" style={{ borderLeftColor: '#7A1E39' }}>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4" style={{ backgroundColor: '#7A1E39' }}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#7A1E39' }}>Email</h3>
                    <p className="text-lg mb-3" style={{ color: '#333333' }}>
                      caty_nae@yahoo.com
                    </p>
                    <a 
                      href="mailto:caty_nae@yahoo.com" 
                      className="inline-block px-6 py-3 rounded-full font-semibold text-white transition-transform hover:scale-105 shadow-lg"
                      style={{ backgroundColor: '#7A1E39' }}
                    >
                      Trimite Email
                    </a>
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4" style={{ borderLeftColor: '#E24B6C' }}>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4" style={{ backgroundColor: '#E24B6C' }}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#7A1E39' }}>Program</h3>
                    <div className="space-y-1" style={{ color: '#333333' }}>
                      <p><strong>L, Mi:</strong> 14:00 - 20:00</p>
                      <p><strong>Ma, Joi, V:</strong> 8:00 - 14:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-6" style={{ color: '#7A1E39' }}>
                  Locația Noastră
                </h2>
                <div className="w-24 h-1 rounded" style={{ backgroundColor: '#E24B6C' }}></div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.535510350319!2d26.118512176046575!3d44.44268937107565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff331b4fd461%3A0xc0a16e4da72c98b4!2sStrada%20Iancu%20C%C4%83pitanu%2019%2C%20Bucure%C8%99ti%20030167!5e0!3m2!1sen!2sro!4v1762516619527!5m2!1sen!2sro"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locația Cabinetului Stomatologic Dr. Catalina-Ionela Iancu"
                ></iframe>
              </div>

              {/* Directions */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#7A1E39' }}>
                  Cum să ajungi la noi
                </h3>
                <div className="space-y-3" style={{ color: '#333333' }}>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#E24B6C' }}></div>
                    <span><strong>Cu metroul:</strong> Stația Piața Unirii sau Piața Victoriei, apoi autobuz sau tramvai până în zona Foisorul de Foc</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#E24B6C' }}></div>
                    <span><strong>Cu autobuzul/tramvaiul:</strong> Stații în apropierea Foisorului de Foc, apoi 2-3 minute de mers pe jos până la Str. Iancu Capitanu nr.19</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#E24B6C' }}></div>
                    <span><strong>Cu mașina:</strong> Cabinetul se află în zona Foisorului de Foc, pe Str. Iancu Capitanu nr.19, etaj 1, interfon 102</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#E24B6C' }}></div>
                    <span><strong>Cu taxi/Uber:</strong> Adresa exactă: Str. Iancu Capitanu nr.19, etaj 1, interfon 102, sector 2, București (în preajma Foisorului de Foc)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Emergency Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #7A1E39 0%, #E24B6C 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Urgență Stomatologică?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Pentru urgențe în afara programului, sună la numărul de urgență
          </p>
          <a 
            href="tel:0726822173" 
            className="inline-block px-8 py-4 bg-white text-2xl font-bold rounded-full transition-transform hover:scale-105 shadow-lg"
            style={{ color: '#7A1E39' }}
          >
            📞 0726822173
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
