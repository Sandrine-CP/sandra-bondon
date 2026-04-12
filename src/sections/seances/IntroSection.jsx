// Organisation des imports
// Imports de base : React, hooks, libraries essentielles
import Image from "next/image";
// Bibliothèques tierces
import { motion } from "framer-motion";
// Composants parents
// Composants enfants
// Utilitaires et helpers
// Styles et assets

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
					transition={{ type: "tween", duration: 0.8, ease: "easeInOut" }} // Transition fluide
				>
					<h2 className="text-xl font-bold">Déroulement d’une séance de thérapie</h2>
					<p className="pt-4">
						Chaque séance de thérapie est un moment dédié à votre bien-être et à votre équilibre émotionnel.{" "}
						<br />
						Lors de notre première rencontre, nous prenons le temps{" "}
						<strong className="text-primary font-bold">
							d’explorer vos besoins.
						</strong>{" "}
						<br />
						Cette étape est essentielle pour établir une relation de{" "}
						<strong className="text-primary font-bold">confiance </strong>
						et définir un plan d’
						<strong className="text-primary font-bold">
							accompagnement personnalisé
						</strong>
						. <br />
						Les séances se déroulent dans un cadre bienveillant et confidentiel.
						<br />
						Elles sont conçues pour vous aider à surmonter vos blocages,
						retrouver un équilibre émotionnel, et avancer vers vos objectifs
						personnels ou professionnels. <br />
						La durée et la fréquence des séances varient en fonction de vos
						besoins spécifiques. <br />
						Généralement, une séance dure environ 50 minutes.
					</p>
				</motion.div>
				{/* Bloc droit : Image */}
				<div className="flex justify-center items-center m-2 lg:max-w-[700px] w-full mt-4 lg:mt-0">
				<motion.div
					className="flex justify-center items-center m-2 lg:w-1/2 w-full mt-4 lg:mt-0"
					initial={{ x: "100vw", opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ type: "tween", duration: 0.8, ease: "easeInOut" }}
				>
				<div className="w-full max-w-[420px] md:max-w-[520px] lg:max-w-[700px] mx-auto">
				<Image
					src="/images/seances/ressources-interieures-message.webp"
					alt="Illustration du voyage intérieur et du processus thérapeutique en psychothérapie"
					width={1080}
					height={971}
					priority
					className="w-full h-auto rounded-lg shadow-lg"
				/>
				</div>
				</motion.div>				
				</div>
			</div>{" "}
		</section>
	);
}
