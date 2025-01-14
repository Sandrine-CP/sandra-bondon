"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const variants = {
	initial: { opacity: 0, y: 20 },
	enter: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }, // Disparaît rapidement
};

export default function Body({ links, onClose }) {
	return (
		<ul className="flex flex-col gap-6 text-center">
			{links.map((link, index) => (
				<motion.li
					key={link.href}
					variants={variants}
					initial="initial"
					animate="enter"
					exit="exit" // Définit l'animation de sortie
					className="text-lg uppercase font-bold"
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
