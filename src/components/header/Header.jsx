"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "./Nav";

// Animation pour l'opacité
export const opacity = {
	initial: { opacity: 0 },
	open: { opacity: 1, transition: { duration: 0.35 } },
	closed: { opacity: 0, transition: { duration: 0.35 } },
};

export default function Header() {
	const [isActive, setIsActive] = useState(false);

	return (
		<header className="bg-secondary fixed top-0 w-full p-4 sm:p-6 z-50 flex justify-between items-center">
			{/* Logo aligné à gauche */}
			<div className="flex items-center space-x-2">
				<Link
					href="/"
					className="text-black uppercase font-bold text-base sm:text-lg"
				>
					S | B
				</Link>
				<p className="text-xs sm:text-base text-center">
					Psychopraticienne - Coach - Hypnothérapeute
				</p>
			</div>

			{/* Burger/Menu à droite */}
			<div className="flex justify-end items-center space-x-2">
				<button
					type="button"
					onClick={() => setIsActive(!isActive)}
					className="flex flex-col justify-around w-6 h-6 bg-transparent border-none cursor-pointer p-0"
					aria-label={isActive ? "Fermer le menu" : "Ouvrir le menu"}
				>
					{/* Traits du burger */}
					<span
						className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
							isActive ? "rotate-45 translate-y-1.5" : ""
						}`}
					/>
					<span
						className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${
							isActive ? "opacity-0" : ""
						}`}
					/>
					<span
						className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
							isActive ? "-rotate-45 -translate-y-1.5" : ""
						}`}
					/>
				</button>
				{/* Texte Menu/Close */}
				<motion.p
					animate={!isActive ? "open" : "closed"}
					initial="initial"
					className="text-black text-xs sm:text-sm uppercase hidden sm:block"
				>
					{isActive ? "Close" : "Menu"}
				</motion.p>{" "}
			</div>

			{/* Navigation */}
			<AnimatePresence>
				{isActive && <Nav onClose={() => setIsActive(false)} />}
			</AnimatePresence>
		</header>
	);
}
