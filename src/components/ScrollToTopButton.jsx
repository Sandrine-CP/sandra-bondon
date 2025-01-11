"use client";
import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
	const [isVisible, setIsVisible] = useState(false);

	// Vérifie la position de scroll
	useEffect(() => {
		const handleScroll = () => {
			setIsVisible(window.scrollY > 300); // Affiche le bouton après 300px de scroll
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth", // Animation de retour en haut
		});
	};

	return (
		<button
			type="button"
			onClick={scrollToTop}
			className={`fixed bottom-4 right-4 bg-white border-2 border-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-opacity duration-300 ${
				isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
			}`}
			aria-label="Revenir en haut"
		>
			{/* Icône flèche */}
			<span className="text-black text-2xl font-bold">↑</span>
		</button>
	);
}
