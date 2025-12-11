import { Award, Users, Clock, Heart, CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function OmOss() {
  return (
    <>
      {/* Hero Sektion */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Om King Trafikskola
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Din pålitliga partner för körkortsutbildning i Stockholm sedan många år
            </p>
          </div>
        </div>
      </section>

      {/* Vår Historia */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Vår Historia
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                King Trafikskola har varit en pålitlig partner för körkortsutbildning i Stockholm i många år. Vi har hjälpt tusentals elever att uppnå sina mål och få sitt körkort.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Sedan 2006 erbjuder vi även handledarutbildning, som blev obligatorisk för privat övningskörning. Våra kurser hålls varje fredag kl 16:00 och har hjälpt många familjer att säkert övningskör tillsammans.
              </p>
              <p className="text-lg text-gray-600">
                Vi är stolta över vår tradition av kvalitet, professionalism och personlig service som gör skillnaden i våra elevers utbildning.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-amber-100 rounded-3xl p-8">
                <Image
                  src="https://kingtrafikskola.se/wp-content/themes/kennedy/img/design/logo.png?v1"
                  alt="King Trafikskola Logotyp"
                  width={400}
                  height={200}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Våra Värderingar */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Våra Värderingar
            </h2>
            <p className="text-xl text-gray-600">
              Det som driver oss framåt och gör oss till den trafikskola vi är idag
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kvalitet</h3>
              <p className="text-gray-600">
                Vi strävar alltid efter högsta kvalitet i all vår utbildning och service.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Omtanke</h3>
              <p className="text-gray-600">
                Varje elev är viktig för oss och vi anpassar utbildningen efter individuella behov.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Gemenskap</h3>
              <p className="text-gray-600">
                Vi bygger förtroende och skapar en trygg miljö för lärande.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pålitlighet</h3>
              <p className="text-gray-600">
                Vi håller våra löften och levererar konsekvent hög kvalitet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vårt Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Varför Välja King Trafikskola?
            </h2>
            <p className="text-xl text-gray-600">
              Vi är mer än bara en trafikskola - vi är din partner på vägen till körkort
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Erfarna Instruktörer</h3>
                  <p className="text-gray-600">
                    Alla våra körleärare har många års erfarenhet och är pedagogiskt utbildade för att ge dig bästa möjliga undervisning.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Individuell Anpassning</h3>
                  <p className="text-gray-600">
                    Vi förstår att alla lär sig olika. Därför anpassar vi utbildningen efter dina specifika behov och lärstil.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexibla Tider</h3>
                  <p className="text-gray-600">
                    Vi erbjuder lektioner som passar ditt schema, oavsett om du arbetar, studerar eller har andra åtaganden.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Hög Genomströmning</h3>
                  <p className="text-gray-600">
                    Våra elever har statistiskt högre chanser att klara körprovet på första försöket tack vare vår grundliga utbildning.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-3xl p-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Vårt Löfte Till Dig
                  </h3>
                  <p className="text-gray-600">
                    Vi lovar att ge dig den bästa möjliga körkortsutbildningen med fokus på säkerhet, kvalitet och personlig service.
                  </p>
                </div>
                
                <div className="flex justify-center mb-6">
                  <Star className="h-8 w-8 text-amber-500" />
                  <Star className="h-8 w-8 text-amber-500" />
                  <Star className="h-8 w-8 text-amber-500" />
                  <Star className="h-8 w-8 text-amber-500" />
                  <Star className="h-8 w-8 text-amber-500" />
                </div>
                
                <div className="text-center">
                  <p className="text-gray-700 italic mb-4">
                    "King Trafikskola gav mig självförtroendet att bli en säker förare. Bästa investeringen jag gjort!"
                  </p>
                  <p className="text-sm text-gray-500">- Anna, nöjd elev</p>
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
            Redo att Börja Din Resa?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Bli en del av King Trafikskola-familjen och ta steget mot ditt körkort idag
          </p>
          <Link href="/kontakt" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block">
            Kontakta Oss Nu
          </Link>
        </div>
      </section>
    </>
  )
}