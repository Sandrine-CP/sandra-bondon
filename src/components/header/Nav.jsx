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
	enter: { height: "auto", transition },
	exit: { height: 0, transition },
};

export default function Nav({ onClose }) {
	return (
		<motion.div
			variants={height}
			initial="initial"
			animate="enter"
			exit="exit"
			className="fixed top-0 left-0 w-full bg-secondary z-40 flex flex-col items-center gap-10 p-6"
		>
			{/* Close + Burger */}
			<div className="absolute top-6 flex items-center gap-4 justify-center w-full">
				{/* Burger Icon */}
				<button
					type="button"
					onClick={onClose}
					className="relative w-6 h-6 flex items-center justify-center"
				>
					{/* Trait supérieur */}
					<span className="absolute w-full h-0.5 bg-black transform transition-transform duration-500 rotate-45" />
					{/* Trait inférieur */}
					<span className="absolute w-full h-0.5 bg-black transform transition-transform duration-500 -rotate-45" />
				</button>

				{/* Close Text */}
				<span className="text-black text-sm uppercase">Close</span>
			</div>

			{/* Links */}
			<div className="mt-20 flex flex-col items-center gap-6">
				<Body links={links} onClose={onClose} />
			</div>

			{/* Footer */}
			<div className="mt-auto">
				<Footer />
			</div>
		</motion.div>
	);
}
