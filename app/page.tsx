import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import { Car, Users, Clock, Shield, CheckCircle, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Tjänster Sektion */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Våra Tjänster
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              King Trafikskola erbjuder professionell körkortsutbildning och handledarutbildning i Stockholm
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Car className="h-12 w-12 text-blue-600" />}
              title="Körkortsutbildning"
              description="Komplett utbildning för att ta körkort. Erfarna instruktörer guidar dig genom hela processen."
              features={["Teori och praktik", "Flexibla tider", "Erfarna lärare"]}
            />
            
            <ServiceCard
              icon={<Users className="h-12 w-12 text-blue-600" />}
              title="Handledarutbildning"
              description="Obligatorisk utbildning för privat övningskörning. Kurser varje fredag kl 16:00."
              features={["Varje fredag 16:00", "Sedan 2006 obligatorisk", "Introduktionskurs"]}
            />
            
            <ServiceCard
              icon={<Shield className="h-12 w-12 text-blue-600" />}
              title="Säker Körning"
              description="Lär dig säkra körtekniker och trafikregler för att bli en trygg förare."
              features={["Defensive tekniker", "Trafiksäkerhet", "Praktiska tips"]}
            />
          </div>
        </div>
      </section>

      {/* Fördelar Sektion */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Varför Välja King Trafikskola?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Vi har hjälpt tusentals elever att ta körkort sedan vi startade. Vår professionella approach och erfarna instruktörer gör skillnaden.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Erfarna Instruktörer</h3>
                    <p className="text-gray-600">Alla våra lärare har många års erfarenhet och pedagogisk utbildning</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Flexibla Tider</h3>
                    <p className="text-gray-600">Vi anpassar våra lektioner efter dina behov och schema</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Hög Genomströmning</h3>
                    <p className="text-gray-600">Våra elever klarar körprovet med högre framgång än genomsnittet</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-amber-100 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <Star className="h-8 w-8 text-amber-500" />
                      <Star className="h-8 w-8 text-amber-500" />
                      <Star className="h-8 w-8 text-amber-500" />
                      <Star className="h-8 w-8 text-amber-500" />
                      <Star className="h-8 w-8 text-amber-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">5/5 Stjärnor</h3>
                    <p className="text-gray-600">"Fantastisk trafikskola! Klarade körprovet på första försöket tack vare deras professionella utbildning."</p>
                    <p className="text-sm text-gray-500 mt-4">- Maria, Stockholm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Sektion */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Redo att Börja Din Körkortsresa?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Kontakta oss idag för att boka din första lektion eller anmäl dig till handledarutbildning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Kontakta Oss
            </Link>
            <Link href="/tjanster" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Se Våra Tjänster
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}