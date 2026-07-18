"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeSolutionCard() {
	const [isFlipped, setIsFlipped] = useState(false);

	return (
		<motion.div
			animate={{
				y: [0, -20, 0],
			}}
			transition={{
				duration: 2,
				repeat: Number.POSITIVE_INFINITY,
				ease: "easeInOut",
			}}
			className="flex flex-col items-center"
		>
			{/* Perspective nécessaire pour le retournement 3D */}
			<div className="w-[300px] h-[220px] [perspective:1000px]">
				<motion.div
					animate={{
						rotateY: isFlipped ? 180 : 0,
					}}
					transition={{
						duration: 0.7,
						ease: [0.23, 1, 0.32, 1],
					}}
					className="relative w-full h-full [transform-style:preserve-3d]"
				>
					{/* Recto */}
                <button
	                type="button"
	                onClick={() => setIsFlipped(true)}
	                aria-label="Découvrir la solution proposée"
	                className="
		            absolute inset-0
		            flex flex-col items-center justify-center
		            w-full h-full
		            rounded-xl shadow-lg
		            bg-[#22223b]
		            border border-secondary/40
		            px-6 py-5
		            cursor-pointer
		            overflow-hidden
		            [backface-visibility:hidden]
	                "
                >
                    <p className="max-w-[250px] text-secondary text-center text-xl font-semibold leading-snug">
	                Dans ma vie personnelle
	                <br />
	                Dans ma vie familiale
	                <br />
	               Dans ma vie professionnelle
                    </p>	                
                <motion.div
                     animate={{ y: [0, 5, 0] }}
                    transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    }}
                    className="mt-4 flex flex-col items-center text-white/70"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                    <polyline points="6 9 12 15 18 9" />
                    </svg>

                    <span className="text-xs mt-1 tracking-wide">
                    Découvrir
                    </span>
                </motion.div>                    </button>
					{/* Verso */}
					<div
						className="
							absolute inset-0
							flex flex-col items-center justify-center
							w-full h-full
							rounded-xl shadow-lg
							bg-[#ffd7ba]
							px-5
							text-center
							[backface-visibility:hidden]
							[transform:rotateY(180deg)]
						"
					>
						<p className="text-primary text-2xl font-semibold leading-tight">
							Une solution
	                        <br />
	                        existe pour vous
						</p>

						<Link
							href="/solutions-pour-vous"
							className="
								mt-5 inline-flex items-center justify-center
								rounded-full bg-primary
								px-5 py-2
								text-sm font-semibold text-white
								transition-transform duration-300
								hover:scale-105
								focus-visible:outline
								focus-visible:outline-2
								focus-visible:outline-offset-2
								focus-visible:outline-primary
							"
						>
							Découvrir les solutions
						</Link>

						<button
							type="button"
							onClick={() => setIsFlipped(false)}
							className="mt-3 text-xs text-gray-700 underline"
						>
							Retour
						</button>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
}