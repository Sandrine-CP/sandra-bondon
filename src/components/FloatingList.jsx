"use client";
import { motion } from "framer-motion";

export default function FloatingList({ items, title, description, className }) {
	return (
		<section className={` py-8 px-4 text-center ${className}`}>
			{title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
			{description && <p className="max-w-2xl mx-auto mb-8">{description}</p>}
			<div className="relative flex flex-wrap justify-center gap-6">
				{items.map((item, index) => (
					<motion.div
						key={item.id || index}
						animate={{
							y: [0, -10, 0], // Mouvement de flottement
						}}
						transition={{
							duration: 2,
							repeat: Number.POSITIVE_INFINITY,
							ease: "easeInOut",
						}}
						className={`flex items-center justify-center rounded-full font-semibold ${item.color} ${item.size} ${item.textColor}`}
					>
						{item.text}
					</motion.div>
				))}
			</div>
		</section>
	);
}
