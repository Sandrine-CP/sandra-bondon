"use client";
import { motion } from "framer-motion";
import { opacity } from "./Header";

const variants = {
	initial: { opacity: 0, y: 20 },
	enter: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Body({ links, selectedLink, setSelectedLink }) {
	return (
		<ul>
			{links.map((link, index) => (
				<motion.li
					key={link.title}
					variants={variants}
					animate="enter"
					className="text-xl uppercase cursor-pointer"
					onClick={() => setSelectedLink({ isActive: true, index })}
				>
					{link.title.split("").map((char, i) => (
						<motion.span
							key={`${link.title}-${i}`}
							className="inline-block"
							initial={{ opacity: 0, y: 10 }}
							animate={{
								opacity: 1,
								y: Object,
								transition: { delay: i * 0.03 },
							}}
						>
							{char}
						</motion.span>
					))}
				</motion.li>
			))}
		</ul>
	);
}
