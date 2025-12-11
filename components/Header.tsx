"use client";
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Hem', href: '/' },
    { name: 'Tjänster', href: '/tjanster' },
    { name: 'Om oss', href: '/om-oss' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://kingtrafikskola.se/wp-content/themes/kennedy/img/design/logo.png?v1"
              alt="King Trafikskola"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-lg font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:08-603-85-85"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-medium">08-603 85 85</span>
            </a>
            <Link
              href="/kontakt"
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Kontakta Oss
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            aria-expanded="false"
          >
            <span className="sr-only">Öppna huvudmeny</span>
            {isMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-lg font-medium rounded-md transition-colors ${
                  isActive(item.href)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-gray-200">
              <a
                href="tel:08-603-85-85"
                className="flex items-center px-3 py-2 text-lg font-medium text-gray-700 hover:text-blue-600 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="h-5 w-5 mr-3" />
                08-603 85 85
              </a>
              <Link
                href="/kontakt"
                className="block mx-3 mt-2 bg-blue-600 text-white px-4 py-2 rounded-full text-center font-semibold hover:bg-blue-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakta Oss
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}