"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const variants = {
	initial: { opacity: 0, y: 20 },
	enter: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

export default function Body({ links, onClose }) {
	// État pour le lien survolé
	const [hoveredIndex, setHoveredIndex] = useState(null);

	return (
		<ul className="flex flex-col gap-6 text-center">
			{links.map((link, index) => (
				<motion.li
					key={link.href}
					variants={variants}
					initial="initial"
					animate="enter"
					exit="exit"
					// Gestion des classes dynamiques
					className={`text-lg uppercase font-bold transition-all duration-300 ${
						hoveredIndex !== null && hoveredIndex !== index
							? "opacity-50 blur-[1px]" // Flou très léger (1px)
							: "opacity-100 blur-0"
					}`}
					// Met à jour l'état au survol
					onMouseEnter={() => setHoveredIndex(index)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					{/* Lien cliquable */}
					<Link
						href={link.href}
						className="hover:text-primary transition-colors duration-300"
						onClick={onClose} // Appel de onClose pour fermer la Nav
					>
						{link.title}
					</Link>
				</motion.li>
			))}
		</ul>
	);
}
