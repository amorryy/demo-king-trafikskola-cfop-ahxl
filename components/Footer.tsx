import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Företagsinformation */}
          <div>
            <div className="mb-6">
              <Image
                src="https://kingtrafikskola.se/wp-content/themes/kennedy/img/design/logo.png?v1"
                alt="King Trafikskola"
                width={180}
                height={60}
                className="h-12 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4">
              King Trafikskola erbjuder professionell körkortsutbildning och handledarutbildning i Stockholm. Vi hjälper dig att nå ditt mål på ett säkert och effektivt sätt.
            </p>
            <p className="text-sm text-gray-400">
              Din pålitliga partner för körkortsutbildning
            </p>
          </div>
          
          {/* Snabblänkar */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Snabblänkar</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Hem
                </Link>
              </li>
              <li>
                <Link href="/tjanster" className="text-gray-300 hover:text-white transition-colors">
                  Tjänster
                </Link>
              </li>
              <li>
                <Link href="/om-oss" className="text-gray-300 hover:text-white transition-colors">
                  Om oss
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-300 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-3">Handledarutbildning</h4>
              <p className="text-gray-300 text-sm">
                Varje fredag kl 16:00
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Obligatorisk sedan 2006
              </p>
            </div>
          </div>
          
          {/* Kontaktinformation */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontakta Oss</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5 mr-3" />
                <div>
                  <a href="tel:08-603-85-85" className="text-gray-300 hover:text-white transition-colors">
                    08-603 85 85
                  </a>
                  <p className="text-xs text-gray-400">Ring för bokning</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-green-400 mt-0.5 mr-3" />
                <div>
                  <a href="mailto:info@kingtrafikskola.se" className="text-gray-300 hover:text-white transition-colors">
                    info@kingtrafikskola.se
                  </a>
                  <p className="text-xs text-gray-400">Vi svarar inom 24h</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-purple-400 mt-0.5 mr-3" />
                <div>
                  <p className="text-gray-300">
                    Bredängstorget 5<br />
                    127 34 Skärholmen
                  </p>
                  <p className="text-xs text-gray-400">Stockholm, Sverige</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-red-900/30 border border-red-800 rounded-lg">
              <p className="text-sm text-red-200">
                <strong>Avbokningsregler:</strong><br />
                Senast en arbetsdag innan kl 12:00
              </p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} King Trafikskola. Alla rättigheter förbehållna.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Skapad av <span className="text-blue-400 font-medium">Noory Solution</span>
          </p>
        </div>
      </div>
    </footer>
  );
}