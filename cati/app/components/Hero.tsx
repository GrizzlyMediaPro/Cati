import Image from "next/image";

export default function Hero() {
  return (
    <section id="acasa" className="min-h-[85vh] flex flex-col pt-12 md:pt-0 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #7A1E39 0%, #E24B6C 50%, #A3C7E2 100%)' }}>
      <div className="max-w-7xl mx-auto flex-1 flex flex-col">
        <div className="flex-1 flex items-center pt-20 pb-0">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            <div className="order-1">
              <h2 className="text-5xl font-bold mb-6 text-white font-heading">
                Zâmbetul tău, 
                <br />
                <span className="text-yellow-300">prioritatea noastră</span>
              </h2>
              <p className="text-xl mb-8 text-white opacity-90">
                Cabinet stomatologic modern cu echipament de ultimă generație și tratamente personalizate pentru fiecare pacient.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/contact" 
                  className="inline-block px-8 py-4 rounded-full font-semibold text-white transition-transform hover:scale-105 shadow-lg"
                  style={{ backgroundColor: '#E24B6C' }}
                >
                  Programează-te acum
                </a>
                <a
                  href="/servicii" 
                  className="inline-block px-8 py-4 rounded-full font-semibold text-white border-2 border-white hover:bg-white hover:text-gray-800 transition-all shadow-lg"
                >
                  Vezi Prețuri
                </a>
              </div>
            </div>
            <div className="order-2 flex justify-center md:justify-end md:items-end">
              <div className="relative w-[350px] h-[350px] md:w-[600px] md:h-[600px]">
                <div className="absolute inset-0 rounded-full opacity-20" style={{ backgroundColor: '#E24B6C' }}></div>
                <Image
                  src="/final.png"
                  alt="Cabinet Stomatologic"
                  fill
                  sizes="(max-width: 768px) 350px, 600px"
                  className="object-contain drop-shadow-2xl relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
