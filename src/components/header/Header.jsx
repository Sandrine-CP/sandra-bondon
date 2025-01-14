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
			<Link
				href="/"
				className="text-black uppercase font-bold text-sm sm:text-lg"
			>
				S | B
			</Link>

			{/* Burger/Menu centré */}
			<div className="flex-1 flex justify-center items-center space-x-2 gap-2">
				<button
					type="button"
					onClick={() => setIsActive(!isActive)}
					className="flex flex-col justify-around w-6 h-6 bg-transparent border-none cursor-pointer p-0"
				>
					<span className="block w-6 h-0.5 bg-black" />
					<span className="block w-6 h-0.5 bg-black" />
				</button>
				<motion.p
					animate={!isActive ? "open" : "closed"}
					initial="initial"
					className="text-black text-sm uppercase"
				>
					{isActive ? "Close" : "Menu"}
				</motion.p>
			</div>

			{/* Navigation */}
			<AnimatePresence>
				{isActive && <Nav onClose={() => setIsActive(false)} />}
			</AnimatePresence>
		</header>
	);
}
