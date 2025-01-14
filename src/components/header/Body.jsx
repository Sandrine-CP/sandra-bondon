"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const variants = {
	initial: { opacity: 0, y: 20 },
	enter: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
					className="text-lg uppercase font-bold"
				>
					{/* Lien cliquable */}
					<Link
						href={link.href}
						className="hover:text-primary transition-colors duration-300"
						onClick={onClose} // Appel de onClose au clic
					>
						{link.title}
					</Link>
				</motion.li>
			))}
		</ul>
	);
}
