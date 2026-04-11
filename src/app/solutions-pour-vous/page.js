"use client";
// Organisation des imports
// Imports de base : React, hooks, libraries essentielles
// Bibliothèques tierces

// Composants parents
import SEO from "@/components/SEO";
// Composants enfants
import ApproachSection from "@/sections/therapies/ApproachSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import TherapiesSection from "@/sections/therapies/TherapiesSection";
import FloatingList from "@/components/FloatingList";
// Utilitaires et helpers
// Styles et assets

const clients = [
	{
		id: 1,
		text: "Enfants",
		color: "bg-primary",
		size: "w-24 h-24",
		textColor: "text-white",
	},
	{
		id: 2,
		text: "Adultes",
		color: "bg-secondary",
		size: "w-28 h-28",
		textColor: "text-primary",
	},
	{
		id: 3,
		text: "Adolescents",
		color: "bg-primary",
		size: "w-32 h-32",
		textColor: "text-white",
	},
	{
		id: 4,
		text: "Individuels",
		color: "bg-secondary",
		size: "w-28 h-28",
		textColor: "text-primary",
	},
	{
		id: 5,
		text: "Groupe",
		color: "bg-primary",
		size: "w-20 h-20",
		textColor: "text-white",
	},
	{
		id: 6,
		text: "Famille",
		color: "bg-secondary",
		size: "w-24 h-24",
		textColor: "text-primary",
	},
	{
		id: 7,
		text: "Couple",
		color: "bg-primary",
		size: "w-28 h-28",
		textColor: "text-white",
	},
];

export default function SolutionsPourVous() {

	return (
		<>
			<SEO
				title="Thérapies et accompagnement personnalisé | Sandra Bondon"
				description="Sandra Bondon, psychopraticienne à Saint-Germain-en-Laye, propose un accompagnement personnalisé en thérapie brève, hypnose ericksonienne, PNL, MOSAIC® et thérapie de couple, individuelle ou de groupe."
				keywords="thérapie brève, hypnose ericksonienne, PNL, MOSAIC®, thérapie de couple, thérapie individuelle, psychopraticienne Saint-Germain-en-Laye"
				author="Sandra Bondon"
			/>
			<main className="h-auto">
				{/* Section intro */}
				<section className="py-6 px-4 text-center">
					<h1 className="text-2xl font-bold uppercase mb-4 p-5">
						Solutions Pour Vous
					</h1>
					<div className="pt-5">
						Ma pratique est dite{" "}
						<strong className="text-primary font-bold">brève</strong>, elle se
						nomme approche solutionniste expérientielle.<br/>Elle est centrée sur des solutions concrètes, adaptées à votre situation et à votre rythme.
					</div>
					<p className="pt-5">
  						Venez déposer vos bagages.<br />Cela veut dire :
					</p>

					<blockquote className="my-12 max-w-3xl mx-auto px-4 text-center">
  					<p className="relative inline-block italic text-lg leading-relaxed text-gray-800 sm:text-xl">
    				<span className="absolute -left-3 -top-5 text-5xl text-orange-400 leading-none sm:-left-6 sm:-top-6 sm:text-6xl">
     				 “
    				</span>
    				Ce que vous voulez vivre demain, vous le vivrez aujourd&apos;hui.
  					</p>
					</blockquote>
					<div className="pt-5">
						A travers votre travail, nous allons{" "}
						<strong className="text-primary font-bold">ensemble</strong> trouver
						vos ressources et les mettre en lumière.
						<br />
						Vous permettre de Re-prendre confiance en vous, retrouver un juste
						positionnement et la posture qui est en adéquation avec qui vous
						êtes.
					</div>
				</section>
				{/* Section profils clients */}
				<section className="py-10 px-4 text-center ">
					<h2 className="text-xl font-bold mb-4">Que vous soyez</h2>
					<FloatingList items={clients} />
				</section>
				{/* Section approche thérapeutique */}
				<section className="py-10 px-4 text-center">
					<ApproachSection />
				</section>
				{/* Section thérapies */}
				<section>
					<TherapiesSection />
				</section>
				<ScrollToTopButton />
			</main>
		</>
	);
}
