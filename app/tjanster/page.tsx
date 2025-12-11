import ServiceCard from '@/components/ServiceCard'
import { Car, Users, Clock, BookOpen, Shield, Award, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function Tjanster() {
  return (
    <>
      {/* Hero Sektion */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Våra Tjänster
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              King Trafikskola erbjuder komplett körkortsutbildning och handledarutbildning i Stockholm
            </p>
          </div>
        </div>
      </section>

      {/* Huvudtjänster */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-3xl p-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <Car className="h-16 w-16 text-blue-600 mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Körkortsutbildning
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Komplett utbildning för att ta körkort klass B. Vi guidar dig genom hela processen från teori till praktisk körning.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Teoriutbildning och förberedelse för teoriprov</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Praktiska körlektioner med erfarna instruktörer</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Förberedelse inför körprovet</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Flexibla tider som passar dig</span>
                  </div>
                </div>
                
                <Link href="/kontakt" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-block">
                  Boka Lektion
                </Link>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <Users className="h-16 w-16 text-amber-600 mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Handledarutbildning
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Obligatorisk introduktionsutbildning för privat övningskörning. Kurser hålls varje fredag kl 16:00.
                </p>
                
                <div className="bg-amber-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 text-amber-600 mr-2" />
                    <span className="font-semibold">Kursdagar:</span>
                  </div>
                  <p className="text-gray-700">Varje fredag kl 16:00</p>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Obligatorisk sedan 2006</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Krävs för privat övningskörning</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Introduktionskurs för handledare</span>
                  </div>
                </div>
                
                <Link href="/kontakt" className="bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors inline-block">
                  Anmäl Dig
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ytterligare Tjänster */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ytterligare Tjänster
            </h2>
            <p className="text-xl text-gray-600">
              Vi erbjuder även specialiserade kurser och utbildningar
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<BookOpen className="h-12 w-12 text-blue-600" />}
              title="Teorikurser"
              description="Intensiva teorikurser för att förbereda dig optimalt för teoriprovet."
              features={["Gruppkurser", "Individuell hjälp", "Provförberedelse"]}
            />
            
            <ServiceCard
              icon={<Shield className="h-12 w-12 text-green-600" />}
              title="Eco-Driving"
              description="Lär dig miljövänliga körtekniker för att spara bränsle och minska utsläppen."
              features={["Bränslebesparingar", "Miljötänk", "Ekonomisk körning"]}
            />
            
            <ServiceCard
              icon={<Award className="h-12 w-12 text-purple-600" />}
              title="Påfyllnadslektioner"
              description="Extra lektioner för dig som behöver mer övning innan körprovet."
              features={["Skräddarsydd träning", "Problemområden", "Trygghet"]}
            />
          </div>
        </div>
      </section>

      {/* Priser och Villkor */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Viktigt att Veta
            </h2>
          </div>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <div className="flex items-start">
              <Clock className="h-6 w-6 text-red-600 mt-1 mr-3" />
              <div>
                <h3 className="font-semibold text-red-800 mb-2">Avbokningsregler</h3>
                <p className="text-red-700">
                  Avbokningar skall ske senast en arbetsdag innan kl 12:00. Vid senare avbokning debiteras full kostnad.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-800 mb-4">Kontakta oss för priser</h3>
            <p className="text-blue-700 mb-4">
              Vi erbjuder konkurrenskraftiga priser och olika paketlösningar. Kontakta oss för en personlig offert som passar dina behov.
            </p>
            <Link href="/kontakt" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-block">
              Begär Offert
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}