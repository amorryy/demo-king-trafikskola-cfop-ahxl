import Link from 'next/link';
import { ArrowRight, Star, Users, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-300 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex">
                <Star className="h-5 w-5 text-amber-400 fill-current" />
                <Star className="h-5 w-5 text-amber-400 fill-current" />
                <Star className="h-5 w-5 text-amber-400 fill-current" />
                <Star className="h-5 w-5 text-amber-400 fill-current" />
                <Star className="h-5 w-5 text-amber-400 fill-current" />
              </div>
              <span className="text-sm font-medium opacity-90">Förstaklassig trafikskola</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Få Ditt
              <span className="block text-amber-300">Körkort</span>
              Med Oss
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              King Trafikskola erbjuder professionell körkortsutbildning och handledarutbildning i Stockholm. Erfarna instruktörer och flexibla tider.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                href="/kontakt" 
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group"
              >
                Boka Lektion
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/tjanster" 
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                Våra Tjänster
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-amber-300 mr-2" />
                  <span className="text-2xl font-bold">1000+</span>
                </div>
                <p className="text-sm text-blue-100">Nöjda Elever</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-6 w-6 text-amber-300 mr-2" />
                  <span className="text-2xl font-bold">15+</span>
                </div>
                <p className="text-sm text-blue-100">År av Erfarenhet</p>
              </div>
            </div>
          </div>
          
          {/* Hero Image/Card */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <div className="text-3xl">🚗</div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Handledarutbildning
                  </h3>
                  
                  <div className="bg-amber-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-center mb-2">
                      <Clock className="h-5 w-5 text-amber-600 mr-2" />
                      <span className="font-semibold text-amber-800">Varje Fredag</span>
                    </div>
                    <p className="text-amber-700 font-medium">Kl 16:00</p>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    Obligatorisk utbildning för privat övningskörning sedan 2006
                  </p>
                  
                  <Link 
                    href="/kontakt" 
                    className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-block"
                  >
                    Anmäl Dig
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-amber-400 text-amber-900 px-4 py-2 rounded-full text-sm font-semibold transform rotate-12">
              Populärt!
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold transform -rotate-12">
              Hög Genomströmning
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}