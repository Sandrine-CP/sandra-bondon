"use client";
// Organisation des imports
// React, hooks, librairies
import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// Bibliothèques tierces
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Composants parents
import SEO from "@/components/SEO";
// Composants enfants
import Button from "@/components/Button";
import GoogleReviews from "@/components/GoogleReviews";
import Consultations from "@/sections/home/Consultations";
import Professionals from "@/sections/home/Professionals";
import FloatingList from "@/components/FloatingList";
import ScrollToTopButton from "../components/ScrollToTopButton";
import HomeCardsAnimation from "@/sections/home/HomeCardsAnimation";
// Utilitaires et helpers
// Styles et assets

gsap.registerPlugin(ScrollTrigger);

const specialties = [
	{
		id: 1,
		text: "Addiction",
		color: "bg-secondary",
		size: "w-28 h-28",
		textColor: "text-primary",
	},
	{
		id: 2,
		text: "Burn Out",
		color: "bg-primary",
		size: "w-20 h-20",
		textColor: "text-white",
	},
	{
		id: 3,
		text: "Trauma",
		color: "bg-secondary",
		size: "w-32 h-32",
		textColor: "text-primary",
	},
	{
		id: 4,
		text: "Anxiété",
		color: "bg-primary",
		size: "w-28 h-28",
		textColor: "text-white",
	},
	{
		id: 5,
		text: "Charge Mentale",
		color: "bg-secondary",
		size: "w-28 h-28",
		textColor: "text-primary",
	},
	{
		id: 6,
		text: "Obsession",
		color: "bg-primary",
		size: "w-32 h-32",
		textColor: "text-white",
	},
	{
		id: 7,
		text: "Phobie",
		color: "bg-secondary",
		size: "w-24 h-24",
		textColor: "text-primary",
	},
];

export default function Home() {
	const lumiereRef = useRef(null);
	const textRef = useRef(null); // Référence pour le texte

	useEffect(() => {
		gsap.fromTo(
			lumiereRef.current,
			{ x: "-100%", opacity: 0 }, // Commence en dehors de l'écran à gauche
			{
				x: 0,
				opacity: 1,
				duration: 1.5,
				ease: "power2.out",
				scrollTrigger: {
					trigger: lumiereRef.current, // Déclencheur de l'animation
					start: "top 80%", // Début de l'animation (80% depuis le haut de la fenêtre)
				},
			},
		);
		gsap.fromTo(
			textRef.current,
			{ opacity: 0 }, // Départ avec opacité 0 (invisible)
			{
				opacity: 1, // Arrivée avec opacité 1 (visible)
				duration: 2,
				ease: "power2.out",
				scrollTrigger: {
					trigger: textRef.current, // Le texte déclenche l'animation
					start: "top 90%", // Déclenche lorsque le texte arrive à 90% du viewport
				},
			},
		);
	}, []);

	return (
		<>
			<SEO
				title="Accueil - Sandra Bondon"
				description="Site vitrine de Sandra Bondon, psychopraticienne spécialisée en hypnose, PNL et méthode MOSAIC®."
				keywords="thérapie, hypnose, MOSAIC, burn out, anxiété, Sandra Bondon"
				author="Sandrine Cazenave"
			/>
			<main className="m-0 pt-20 bg-[#22223b]">
				{/* Section Gallerie d'images */}
				<section className="pt-20 mb-20">
					<HomeCardsAnimation />
				</section>
				{/* Section image lumière */}
				<section
					ref={lumiereRef}
					className="h-[300px] bg-cover bg-center sm:h-[250px] md:h-[800px]"
					style={{
						backgroundImage: "url(/images/home/lumiere-therapie-chemin-apaisement.webp)",
					}}
				/>
				{/* Section Ressources */}
				<section className="flex flex-col items-center justify-center my-0 bg-[#22223b] text-white py-10 md:py-20">
					<p
						ref={textRef}
						className="text-[8vw] sm:text-[6vw] md:max-w-[60vw] text-center leading-tight"
					>
						Toutes les ressources sont en vous
					</p>
					<Link href="/solutions-pour-vous">
						<Button
							text="Voir plus"
							textColor="#FFFFFF"
							bgColor="#4961E1"
							hoverTextColor="#FFFFFF"
							hoverBgColor="#4961E1"
							className="mt-6 mb-6"
						/>
					</Link>
				</section>{" "}
				{/* Section Sandra Bondon */}
				<section
					className="h-[75vh] bg-cover bg-center relative"
					style={{ backgroundImage: "url(/images/home/fondHomeAbout.webp)" }}
				>
					<div className="absolute bottom-4 left-4">
						<Image
							src="/images/home/sandra-bondon-home.jpeg"
							alt="Sandra Bondon, psychopraticienne"
							width={150} // Taille par défaut pour mobile
							height={150} // Taille par défaut pour mobile
							className="rounded-e-full md:w-60 md:h-55" // Taille ajustée pour tablette et plus
						/>
					</div>{" "}
					<div className="relative z-10 h-full p-4 md:p-10">
					<div className="h-full flex flex-col justify-between text-blue-500 mix-blend-difference pb-24">
						<p className="text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[1.9vw] uppercase self-end">
							Sandra Bondon : Psychopraticienne - Business Coach -
							Hypnothérapeute
						</p>
						<p className="text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[5vw] uppercase text-right">
							S | B
						</p>
					</div>

					<div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-center">
						<Link className="text-center" href="/a-propos">
							<Button
								text="Voir mon parcours"
								textColor="#FFFFFF"
								bgColor="#4961E1"
								hoverTextColor="#FFFFFF"
								hoverBgColor="#4961E1"
								className="mt-6 mb-6"
							/>
						</Link>	
					</div>
					</div>

				</section>
				{/* Section Spécialités */}
				<section className="bg-white">
					<FloatingList
						items={specialties}
						title="Spécialités"
						description="Difficultés relationnelles : Lorsque la communication est difficile avec l'Autre. 
						Que ce soit au travail ou en famille. 
						Que les mots vous manquent, car les émotions sont trop présentes voire que vous ne savez pas comment exprimer ce qu'il se passe pour vous. Mal Etre : un état général sans savoir vraiment quoi, pourquoi, comment mais avec l'envie de vous sentir plus en adéquation avec vous-même. Comme trouver du sens à ce que vous faites."
					/>
					<Link
						href="/contact"
						className=" flex flex-row justify-center text-center"
					>
						<Button
							text="Me contacter"
							textColor="#2C254D"
							bgColor="#FFA500"
							hoverTextColor="#2C254D"
							hoverBgColor="#FFA500"
							className="mt-6 mb-6"
						/>
					</Link>
				</section>
				<section className="px-4 sm:px-6 lg:px-0 bg-white relative">
					<Professionals />
				</section>
				<section className="px-4 sm:px-6 lg:px-10 py-10 md:py-20 bg-white">
					<Consultations />
					<Link
						href="/seances"
						className=" flex flex-row justify-center text-center"
					>
						<Button
							text="Voir plus"
							textColor="#2C254D"
							bgColor="#FFA500"
							hoverTextColor="#2C254D"
							hoverBgColor="#FFA500"
							className="mt-6 mb-6"
						/>
					</Link>
				</section>
				{/* Section Avis Google */}
				<section className="py-6 px-4 text-center bg-white">
					<h2 className="text-xl font-bold">Ce que disent mes clients</h2>
					<p className="pt-5">
						La satisfaction de mes clients est au cœur de ma pratique. <br />
						Découvrez leurs témoignages ci-dessous :
					</p>
				</section>
				<section>
					<GoogleReviews />
				</section>
			</main>
			<ScrollToTopButton />
		</>
	);
}
