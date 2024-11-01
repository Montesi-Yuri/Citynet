import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TraguardiChart } from "@/components/ui/TraguardiChart"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Zap, BarChart, Users, Target, CheckCircle, ArrowRight } from 'lucide-react'


const BackgroundPattern = () => (
  <svg className="absolute inset-0 w-full h-full z-0 opacity-5" xmlns="http://www.w3.org/2000/svg">
    <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M0 0L20 0L10 17.3L0 0Z" fill="currentColor" />
      <path d="M20 0L40 0L30 17.3L20 0Z" fill="currentColor" />
      <path d="M10 17.3L20 34.6L30 17.3L10 17.3Z" fill="currentColor" />
      <path d="M0 40L10 22.7L20 40L0 40Z" fill="currentColor" />
      <path d="M20 40L30 22.7L40 40L20 40Z" fill="currentColor" />
    </pattern>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)" />
  </svg>
)

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 relative overflow-hidden">
      <BackgroundPattern />
      
      {/* Navbar */}
      <nav className="bg-gray-800 bg-opacity-90 p-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <img src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Citynet Logo" className="h-8" />
          <div className="space-x-4">
            <a href="#servizi" className="hover:text-blue-400 transition-colors duration-200">Servizi</a>
            <a href="#traguardi" className="hover:text-blue-400 transition-colors duration-200">Traguardi</a>
            <a href="#chi-siamo" className="hover:text-blue-400 transition-colors duration-200">Chi Siamo</a>
            <a href="#contatti" className="hover:text-blue-400 transition-colors duration-200">Contatti</a>
            <a href="#portfolio" className="hover:text-blue-400 transition-colors duration-200">Portfolio</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20 px-4 text-center overflow-hidden">
        <div className="container mx-auto relative z-10">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">Citynet Marketing Industriale</h1>
          <p className="text-xl mb-8 animate-fade-in-up animation-delay-200">Soluzioni di marketing avanzate per l'industria</p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-200 transform hover:scale-105 animate-fade-in-up animation-delay-400">
            Scopri i nostri servizi
          </Button>
        </div>
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <img src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover" />
        </div>
      </header>

      {/* Servizi Principali */}
      <section id="servizi" className="py-20 bg-gray-900 relative">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">I Nostri Servizi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'SEO Industriale', icon: <Target className="w-8 h-8 mb-4 text-blue-400" /> },
              { title: 'Content Marketing B2B', icon: <BarChart className="w-8 h-8 mb-4 text-blue-400" /> },
              { title: 'Social Media per l\'Industria', icon: <Users className="w-8 h-8 mb-4 text-blue-400" /> }
            ].map((servizio, index) => (
              <Card key={index} className="bg-gray-800 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex flex-col items-center text-center">
                    {servizio.icon}
                    {servizio.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Descrizione dettagliata del servizio {servizio.title.toLowerCase()}. Spieghiamo come questo servizio può beneficiare i nostri clienti industriali.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sezione Traguardi */}
      <section id="traguardi" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">I Nostri Traguardi</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <TraguardiChart />
          </div>
        </div>
      </section>

      {/* Chi Siamo */}
      <section id="chi-siamo" className="py-20 bg-gray-900 relative">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">Chi Siamo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Zap className="w-6 h-6 mr-2 text-yellow-400" />
                La Nostra Storia
              </h3>
              <p className="mb-4">Citynet nasce nel cuore di Jesi con l'obiettivo di portare soluzioni di marketing innovative nel settore industriale. La nostra passione per la tecnologia e la profonda conoscenza del settore B2B ci hanno permesso di crescere e diventare un punto di riferimento per le aziende che cercano di migliorare la loro presenza digitale.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2 text-green-400" />
                I Nostri Valori
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-blue-400" /> Innovazione continua</li>
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-blue-400" /> Attenzione al cliente</li>
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-blue-400" /> Etica professionale</li>
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-blue-400" /> Risultati misurabili</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contatti */}
      <section id="contatti" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">Contattaci</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <form className="space-y-4">
                <Input type="text" placeholder="Nome" className="w-full bg-gray-700 border-gray-600 text-white" />
                <Input type="email" placeholder="Email" className="w-full bg-gray-700 border-gray-600 text-white" />
                <Textarea placeholder="Messaggio" className="w-full bg-gray-700 border-gray-600 text-white" />
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
                  Invia
                </Button>
              </form>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="space-y-4">
                <p className="flex items-center"><Mail className="w-5 h-5 mr-2 text-blue-400" /> info@citynet.it</p>
                <p className="flex items-center"><Phone className="w-5 h-5 mr-2 text-blue-400" /> +39 0731 123456</p>
                <p className="flex items-center"><MapPin className="w-5 h-5 mr-2 text-blue-400" /> Via Roma 1, 60035 Jesi (AN)</p>
              </div>
              <div className="mt-8 flex space-x-4">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-200"><Facebook className="w-6 h-6" /></a>
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-200"><Twitter className="w-6 h-6" /></a>
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-200"><Linkedin className="w-6 h-6" /></a>
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-200"><Instagram className="w-6 h-6" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio/Clienti */}
      <section id="portfolio" className="py-20 bg-gray-900 relative">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">I Nostri Clienti</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((client) => (
              <div key={client} className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-center transform hover:scale-105 transition-transform duration-200">
                <img src={`https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?text=Cliente ${client}`} alt={`Cliente ${client}`} className="max-h-16" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4  gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Citynet</h3>
              <p>Soluzioni di marketing avanzate per l'industria</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Link Rapidi</h3>
              <ul className="space-y-2">
                <li><a href="#servizi" className="hover:text-blue-400 transition-colors duration-200">Servizi</a></li>
                <li><a href="#chi-siamo" className="hover:text-blue-400 transition-colors duration-200">Chi Siamo</a></li>
                <li><a href="#contatti" className="hover:text-blue-400 transition-colors duration-200">Contatti</a></li>
                <li><a href="#portfolio" className="hover:text-blue-400 transition-colors duration-200">Portfolio</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contatti</h3>
              <p>Via Roma 1, 60035 Jesi (AN)</p>
              <p>info@citynet.it</p>
              <p>+39 0731 123456</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <form className="flex">
                <Input type="email" placeholder="La tua email" className="flex-grow bg-gray-700 border-gray-600 text-white" />
                <Button type="submit" className="ml-2 bg-blue-600 hover:bg-blue-700 transition-colors duration-200">Iscriviti</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2023 Citynet. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}