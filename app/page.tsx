'use client'

import React, { useEffect, useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TraguardiChart } from '@/components/ui/TraguardiChart'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Zap, BarChart, Users, Target, CheckCircle, ArrowRight, Settings, Briefcase, ChevronRight, Menu, X } from 'lucide-react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Homepage() {
	const [activeSection, setActiveSection] = useState('hero')
	const sections = useRef<Array<HTMLElement | null>>([null, null, null, null, null, null])
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	useEffect(() => {
		let isScrolling = false;

		const updateActiveSection = () => {
			const scrollPosition = window.scrollY + window.innerHeight / 2;
			
			// Find the section that's currently most visible in the viewport
			const currentSection = sections.current.find((section, index) => {
				if (!section) return false;
				const rect = section.getBoundingClientRect();
				const sectionTop = window.scrollY + rect.top;
				const sectionBottom = sectionTop + rect.height;
				return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
			});

			if (currentSection) {
				setActiveSection(currentSection.id);
			}
		};

		const handleScroll = (e: WheelEvent) => {
			if (window.innerWidth < 768) {
				return;
			}

			if (isScrolling) {
				e.preventDefault();
				return;
			}
			
			e.preventDefault();
			isScrolling = true;
			
			const currentSection = sections.current.findIndex(section => {
				if (!section) return false;
				const rect = section.getBoundingClientRect();
				return Math.abs(rect.top) < window.innerHeight / 3;
			});
			
			const direction = e.deltaY > 0 ? 1 : -1;
			const nextIndex = Math.max(0, Math.min(currentSection + direction, sections.current.length - 1));
			
			if (sections.current[nextIndex]) {
				setActiveSection(sections.current[nextIndex]?.id || 'hero');
				sections.current[nextIndex]?.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
			
			setTimeout(() => {
				isScrolling = false;
			}, 500);
		};
		
		// Add scroll event listener for regular scrolling
		window.addEventListener('scroll', updateActiveSection);
		// Add wheel event listener for section-by-section scrolling
		window.addEventListener('wheel', handleScroll, { passive: false });
		
		// Initial check
		updateActiveSection();
		
		return () => {
			window.removeEventListener('wheel', handleScroll);
			window.removeEventListener('scroll', updateActiveSection);
		};
	}, []);

	const scrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId)
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' })
		}
	}

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

	return (
		<div className="bg-gray-900 text-gray-100 relative">
			<BackgroundPattern />

			{/* Navbar */}
			<nav className={`fixed top-0 w-full transition-all duration-300 z-50 ${activeSection === 'hero' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
				<div className="container mx-auto">
					<div className="backdrop-blur-md bg-gray-800/90 m-4 rounded-xl shadow-lg border border-gray-700">
						<div className="flex items-center justify-between p-4">
							<img 
								src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
								alt="Citynet Logo" 
								className="h-8" 
							/>
							
							{/* Desktop Menu */}
							<div className="hidden md:flex md:space-x-6">
								{[
									{ id: 'servizi', icon: <Settings className="w-4 h-4" />, label: 'Servizi' },
									{ id: 'chi-siamo', icon: <Users className="w-4 h-4" />, label: 'Chi Siamo' },
									{ id: 'contatti', icon: <Phone className="w-4 h-4" />, label: 'Contatti' },
									{ id: 'portfolio', icon: <Briefcase className="w-4 h-4" />, label: 'Portfolio' },
								].map(({ id, icon, label }) => (
									<button
										key={id}
										onClick={() => scrollToSection(id)}
										className={`
											group flex items-center space-x-2 px-4 py-2 rounded-lg
											transition-all duration-200
											${montserrat.className}
											${activeSection === id 
												? 'bg-blue-500/20 text-blue-400' 
												: 'hover:bg-gray-700/50 text-gray-300 hover:text-blue-400'}
											`}
									>
										<div className="flex items-center space-x-2">
											{icon}
											<span className="font-medium">{label}</span>
										</div>
										<ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
											activeSection === id ? 'rotate-90' : 'opacity-0 group-hover:opacity-100'
										}`} />
									</button>
								))}
							</div>

							{/* Mobile Menu Button */}
							<button 
								onClick={() => setIsMenuOpen(true)}
								className="md:hidden p-2 rounded-lg hover:bg-gray-700/50 text-gray-300"
							>
								<Menu className="w-6 h-6" />
							</button>
						</div>
					</div>
				</div>

				{/* Off-canvas Menu */}
				<div className={`
					fixed inset-y-0 right-0 w-64 bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out z-50
					${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
				`}>
					<div className="flex flex-col h-full">
						<div className="flex justify-between items-center p-4 border-b border-gray-700">
							<span className={`${montserrat.className} font-medium text-gray-200`}>Menu</span>
							<button 
								onClick={() => setIsMenuOpen(false)}
								className="p-2 rounded-lg hover:bg-gray-700/50 text-gray-300"
							>
								<X className="w-6 h-6" />
							</button>
						</div>
						<div className="flex flex-col p-4 space-y-2">
							{[
								{ id: 'servizi', icon: <Settings className="w-4 h-4" />, label: 'Servizi' },
								{ id: 'chi-siamo', icon: <Users className="w-4 h-4" />, label: 'Chi Siamo' },
								{ id: 'contatti', icon: <Phone className="w-4 h-4" />, label: 'Contatti' },
								{ id: 'portfolio', icon: <Briefcase className="w-4 h-4" />, label: 'Portfolio' },
							].map(({ id, icon, label }) => (
								<button
									key={id}
									onClick={() => {
										scrollToSection(id);
										setIsMenuOpen(false);
									}}
									className={`
										group flex items-center justify-between px-4 py-2 rounded-lg w-full
										transition-all duration-200
										${montserrat.className}
										${activeSection === id 
											? 'bg-blue-500/20 text-blue-400' 
											: 'hover:bg-gray-700/50 text-gray-300 hover:text-blue-400'}
									`}
								>
									<div className="flex items-center space-x-2">
										{icon}
										<span className="font-medium">{label}</span>
									</div>
									<ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
										activeSection === id ? 'rotate-90' : 'opacity-0 group-hover:opacity-100'
									}`} />
								</button>
							))}
						</div>
					</div>
				</div>

				{/* Backdrop */}
				{isMenuOpen && (
					<div 
						className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
						onClick={() => setIsMenuOpen(false)}
					/>
				)}
			</nav>

			{/* Hero Section */}
			<section id="hero" className="h-screen flex items-center justify-center relative bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20 px-4 text-center overflow-hidden" ref={el => { sections.current[0] = el }}>
				<div className="container mx-auto relative z-10">
					<h1 className="text-5xl font-bold mb-4 animate-fade-in-up">Citynet Marketing Industriale</h1>
					<p className="text-xl mb-8 animate-fade-in-up animation-delay-200">Soluzioni di marketing avanzate per l'industria</p>
					<Button
						onClick={() => scrollToSection('servizi')}
						className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-200 transform hover:scale-105 animate-fade-in-up animation-delay-400"
					>
						Scopri i nostri servizi
					</Button>
				</div>
				<div className="absolute inset-0 overflow-hidden opacity-20">
					<img src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover" />
				</div>
			</section>

			{/* Servizi Principali */}
			<section id="servizi" className="min-h-screen flex items-center bg-gray-900 relative py-20" ref={el => { sections.current[1] = el }}>
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

			{/* Traguardi Section */}
			<section id="traguardi" className="min-h-screen flex items-center bg-gray-900 relative py-20" ref={el => { sections.current[2] = el }}>
				<div className="container mx-auto px-4 relative z-10">
					<h2 className="text-3xl font-bold mb-12 text-center">I Nostri Traguardi</h2>
						<TraguardiChart />
				</div>
			</section>

			{/* Chi Siamo */}
			<section id="chi-siamo" className="min-h-screen flex items-center bg-gray-900 relative py-20" ref={el => { sections.current[3] = el }}>
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
			<section id="contatti" className="min-h-screen flex items-center bg-gradient-to-b from-gray-800 to-gray-900 relative py-20" ref={el => { sections.current[4] = el }}>
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
			<section id="portfolio" className="min-h-screen flex items-center bg-gray-900 relative py-20" ref={el => { sections.current[5] = el }}>
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
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						<div>
							<h3 className="text-xl font-bold mb-4">Citynet</h3>
							<p>Soluzioni di marketing avanzate per l'industria</p>
						</div>
						<div>
							<h3 className="text-xl font-bold mb-4">Link Rapidi</h3>
							<ul className="space-y-2">
								{['servizi', 'chi-siamo', 'contatti', 'portfolio'].map((section) => (
									<li key={section}>
										<button
											onClick={() => scrollToSection(section)}
											className="hover:text-blue-400 transition-colors duration-200"
										>
											{section.charAt(0).toUpperCase() + section.slice(1)}
										</button>
									</li>
								))}
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