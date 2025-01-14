"use client";
import { motion } from "framer-motion";
import Body from "./Body";
import Footer from "./Footer";

const links = [
	{ title: "Accueil", href: "/" },
	{ title: "Solutions pour vous", href: "/solutions-pour-vous" },
	{ title: "Séances", href: "/seances" },
	{ title: "A propos", href: "/a-propos" },
	{
		title: "Solutions pour vos collaborateurs",
		href: "/solutions-pour-vos-collaborateurs",
	},
	{ title: "Contact", href: "/contact" },
];

const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

export const height = {
	initial: { height: 0 },
	enter: { height: "100vh", transition },
	exit: { height: 0, transition },
};

export default function Nav({ onClose }) {
	return (
		<motion.div
			variants={height}
			initial="initial"
			animate="enter"
			exit="exit"
			className="fixed top-0 left-0 w-full h-full bg-secondary z-40 flex flex-col items-center justify-center gap-10"
		>
			{/* Close + Burger */}
			<div className="absolute top-6 flex items-center gap-4">
				{/* Burger Icon */}
				<button
					type="button"
					onClick={onClose}
					className="flex flex-col justify-around w-6 h-6 bg-transparent border-none cursor-pointer p-0"
				>
					<span className="block w-6 h-0.5 bg-black rotate-45" />
					<span className="block w-6 h-0.5 bg-black -rotate-45" />
				</button>

				{/* Close Text */}
				<button
					type="button"
					onClick={onClose}
					className="text-black uppercase text-sm"
				>
					Close
				</button>
			</div>

			{/* Links */}
			<Body links={links} />

			{/* Footer */}
			<Footer />
		</motion.div>
	);
}
