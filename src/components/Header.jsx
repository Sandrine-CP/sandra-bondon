"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

// Animation pour l'opacité
export const opacity = {
	initial: { opacity: 0 },
	open: { opacity: 1, transition: { duration: 0.35 } },
	closed: { opacity: 0, transition: { duration: 0.35 } },
};

export default function Header() {
	const [isActive, setIsActive] = useState(false);

	return (
		<header className="bg-secondary fixed top-0 w-full p-2 sm:p-5 z-50">
			<div className="flex justify-center text-[12px] sm:text-[15px] uppercase font-light relative">
				{/* Titre / Logo */}
				<Link href="/" className="absolute left-0 text-black no-underline">
					S | B
				</Link>

				{/* Burger Button avec texte */}
				<button
					type="button"
					className="flex items-center gap-4 cursor-pointer"
					onClick={() => setIsActive(!isActive)}
					onKeyDown={(e) => {
						if (e.key === "Enter" || e.key === " ") {
							setIsActive(!isActive);
						}
					}}
				>
					{/* Burger */}
					<div
						className={`relative w-[22.5px] h-[20px] before:content-[''] before:w-full before:h-[2px] before:bg-black before:block before:absolute before:top-0
                        before:transition-transform before:duration-[0.5s] after:content-[''] after:w-full after:h-[2px] after:bg-black after:block after:absolute after:bottom-0
                        after:transition-transform after:duration-[0.5s]
                        ${isActive ? "before:rotate-45 before:top-[50%] after:-rotate-45 after:top-[50%]" : ""}`}
					/>

					{/* Texte avec animation */}
					<div className="relative flex items-center h-[20px]">
						<motion.p
							variants={opacity}
							animate={!isActive ? "open" : "closed"}
							initial="initial"
							className="absolute top-[50%] left-0 -translate-y-1/2 text-black"
						>
							Menu
						</motion.p>
						<motion.p
							variants={opacity}
							animate={isActive ? "open" : "closed"}
							initial="initial"
							className="absolute top-[50%] left-0 -translate-y-1/2 text-black"
						>
							Fermer
						</motion.p>
					</div>
				</button>
			</div>
		</header>
	);
}
