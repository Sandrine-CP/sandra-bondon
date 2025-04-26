import { motion } from "framer-motion";

export default function ImageCard({
	title,
	description,
	imageSrc,
	imageAlt,
	background,
}) {
	return (
		<div>
			{/* Conteneur flottant */}
			<motion.div
				animate={{
					y: [0, -20, 0], // Flottement
				}}
				transition={{
					duration: 2,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
				className="flex flex-col items-center"
			>
				{/* Carte avec effet hover */}
				<motion.div
					className="relative w-[300px] h-[200px] bg-gradient-to-br from-[] to-[#e0e1dd] rounded-xl flex items-center justify-center overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-[-5deg] hover:scale-110 hover:shadow-xl group"
					whileHover={{
						rotate: -5,
						scale: 1.1,
						transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
					}}
				>
					{/* Image */}
					<motion.img
						className="w-[295px] h-[195px] rounded-xl object-cover transition-all duration-500 ease-[cubic-bezier(0.23,1,0,32,1)] group-hover:scale-0 group-hover:rotate-[45deg]"
						src={imageSrc}
						alt={imageAlt}
						background={background}
					/>

					{/* Contenu affiché au survol */}
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] w-full h-full p-5 bg-[#ffd7ba] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:rotate-0 group-hover:opacity-100">
						<p className="mt-2 text-sm text-gray-700 leading-relaxed">
							{description}
						</p>
					</div>
				</motion.div>
			</motion.div>

			{/* Titre sous la carte */}
			<p className="mt-4 text-secondary text-center text-lg text-gray-800">
				{title}
			</p>
		</div>
	);
}
