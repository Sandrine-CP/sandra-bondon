import { motion } from "framer-motion";
import "./ImageCard.css";

export default function ImageCard({ title, description }) {
	return (
		// class card
		// <div className="relative rounded-lg w-[300px] h-[200px] flex justify-center items-center overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ease-[cubic-bezier(0.95,0.05,0.795,0.035)] hover:rotate-6 scale-1.1 hover:shadow-lg">
		<motion.div
			className="card"
			animate={{
				y: [0, -10, 0],
			}}
			transition={{
				duration: 2,
				repeat: Number.POSITIVE_INFINITY,
				ease: "easeInOut",
			}}
		>
			<p className="title">{title}</p>
			{/* class card__content */}
			<div className="card__content">
				{/* class card__title */}
				{/* <p className="card__subtitle ">Burn Out</p> */}
				{/* class description */}
				<p className="card__description">{description}</p>
			</div>
		</motion.div>
	);
}
