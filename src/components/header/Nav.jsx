"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Body from "./Body";

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

export default function Nav() {
	const [selectedLink, setSelectedLink] = useState({
		isActive: false,
		index: 0,
	});

	return (
		<motion.div
			variants={height}
			initial="initial"
			animate="enter"
			exit="exit"
			className="overflow-hidden"
		>
			<div>
				<Body
					links={links}
					selectedLink={selectedLink}
					setSelectedLink={setSelectedLink}
				/>
			</div>
		</motion.div>
	);
}
