// Organisation des imports
// Imports de base : React, hooks, libraries essentielles
import Image from "next/image";

// Bibliothèques tierces
import { motion } from "framer-motion";
// Composants parents
// Composants enfants
// Utilitaires et helpers

// Styles et assets
import Bagages from "@../../../public/images/bagages.webp";

export default function IntroSection() {
	return (
		<section className="py-6 px-4 text-center">
			<h1 className="text-2xl font-bold uppercase mb-6 p-5">Séances</h1>
			<div className="flex flex-col lg:flex-row m-2">
				{/* Bloc gauche : titre et texte */}
				<motion.div
					className="flex flex-col justify-start items-center text-center lg:w-1/2 w-full"
					initial={{ x: "-100vw", opacity: 0 }} // Position de départ
					animate={{ x: 0, opacity: 1 }} // Position finale
					transition={{ type: "tween", duration: 2, ease: "easeInOut" }} // Transition fluide
				>
					<h2 className="text-xl font-bold">Comment ça se passe ?</h2>
					<p className="pt-4">
						Chaque séance est un moment dédié à vous et à votre bien-être.{" "}
						<br />
						Lors de notre première rencontre, nous prenons le temps{" "}
						<strong className="text-primary font-bold">
							d’explorer vos besoins, vos attentes, et vos objectifs.
						</strong>{" "}
						<br />
						Cette étape est essentielle pour établir une relation de{" "}
						<strong className="text-primary font-bold">confiance </strong>
						et définir un plan d’accompagnement personnalisé. <br />
						Les séances se déroulent dans un cadre bienveillant et confidentiel.
						Elles sont conçues pour vous aider à surmonter vos blocages,
						retrouver un équilibre émotionnel, et avancer vers vos objectifs
						personnels ou professionnels. <br />
						La durée et la fréquence des séances varient en fonction de vos
						besoins spécifiques. <br />
						Généralement, une séance dure environ 50 minutes.
					</p>
				</motion.div>
				{/* Bloc droit : Image bagages */}
				<div className="flex justify-center items-center m-2 lg:w-1/2 w-full mt-4 lg:mt-0">
					<div style={{ width: 521, height: 366 }}>
						<Image
							src={Bagages}
							alt="Illustration de valises pour symboliser le voyage intérieur"
							className="rounded-lg shadow-lg object-cover"
							placeholder="blur"
							// priority
							// loading="eager"
						/>
					</div>
				</div>
			</div>{" "}
		</section>
	);
}
