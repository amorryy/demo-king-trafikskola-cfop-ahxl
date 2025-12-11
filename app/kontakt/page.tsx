import ContactForm from '@/components/ContactForm'
import { Phone, Mail, MapPin, Clock, Info } from 'lucide-react'

export default function Kontakt() {
  return (
    <>
      {/* Hero Sektion */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Kontakta Oss
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Vi hjälper dig gärna med frågor om körkortsutbildning och handledarutbildning
            </p>
          </div>
        </div>
      </section>

      {/* Kontaktinformation och Formulär */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Kontaktinformation */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Kontaktinformation
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                    <p className="text-gray-600">08-603 85 85</p>
                    <p className="text-sm text-gray-500">Ring oss för snabb service</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">E-post</h3>
                    <p className="text-gray-600">info@kingtrafikskola.se</p>
                    <p className="text-sm text-gray-500">Vi svarar inom 24 timmar</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adress</h3>
                    <p className="text-gray-600">Bredängstorget 5</p>
                    <p className="text-gray-600">127 34 Skärholmen</p>
                    <p className="text-sm text-gray-500">Stockholm, Sverige</p>
                  </div>
                </div>
              </div>
              
              {/* Öppettider */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Clock className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Handledarutbildning</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fredagar:</span>
                    <span className="font-medium">16:00</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    Introduktionsutbildning för privat övningskörning. Obligatorisk sedan 2006.
                  </p>
                </div>
              </div>
              
              {/* Avbokningsinfo */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-8">
                <div className="flex items-start">
                  <Info className="h-6 w-6 text-red-600 mt-0.5 mr-3" />
                  <div>
                    <h3 className="font-semibold text-red-800 mb-2">Viktigt - Avbokningsregler</h3>
                    <p className="text-red-700">
                      Avbokningar skall ske senast en arbetsdag innan kl 12:00. Vid senare avbokning debiteras full kostnad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Kontaktformulär */}
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Skicka Meddelande
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vanliga Frågor */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Vanliga Frågor
            </h2>
            <p className="text-xl text-gray-600">
              Här är svar på de vanligaste frågorna vi får
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Vad kostar körkortsutbildningen?
              </h3>
              <p className="text-gray-600">
                Priserna varierar beroende på vilken typ av utbildning du väljer. Kontakta oss för en personlig offert som passar dina behov och budget.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Hur lång tid tar det att få körkort?
              </h3>
              <p className="text-gray-600">
                Det beror på hur ofta du tar lektioner och hur snabbt du lär dig. I genomsnitt tar det 3-6 månader från start till färdigt körkort.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Vad ingår i handledarutbildningen?
              </h3>
              <p className="text-gray-600">
                Handledarutbildningen är en obligatorisk introduktionskurs som krävs för privat övningskörning. Kursen hålls varje fredag kl 16:00 och tar några timmar.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Kan jag boka lektioner på kvällar och helger?
              </h3>
              <p className="text-gray-600">
                Ja, vi erbjuder flexibla tider för att passa ditt schema. Kontakta oss för att diskutera vilka tider som fungerar bäst för dig.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}