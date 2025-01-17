"use client";

export default function Card({ title, description }) {
	return (
		<div className="relative overflow-hidden w-80 h-40 rounded-xl cursor-pointer text-lg font-bold bg-primary text-secondary flex items-center justify-center transition-all duration-500">
			{/* Couche interactive */}
			<div className="z-10 absolute w-full h-full peer" />

			{/* Forme décorative en haut à gauche */}
			<div className="absolute peer-hover:-top-8 peer-hover:-left-8 peer-hover:w-40 peer-hover:h-40 -top-12 -left-12 w-20 h-20 rounded-full bg-secondary transition-all duration-500" />

			{/* Forme décorative en bas à droite */}
			<div className="absolute peer-hover:-bottom-8 peer-hover:-right-8 peer-hover:w-40 peer-hover:h-40 -bottom-12 -right-12 w-20 h-20 rounded-full bg-secondary transition-all duration-500" />

			{/* Verso */}
			<div className="absolute inset-0 flex items-center justify-center text-center px-6 bg-secondary text-primary transition-all duration-500 transform translate-x-full peer-hover:translate-x-0">
				<p className="text-sm">{description}</p>
			</div>

			{/* Recto */}
			<div className="absolute inset-0 flex items-center justify-center uppercase transition-all duration-500 peer-hover:translate-x-full">
				{title}
			</div>
		</div>
	);
}
