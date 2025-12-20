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
import ClientTypeSection from "@/sections/therapies/ClientTypeSection";
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
				title="Accueil - Sandra Bondon"
				description="Site vitrine de Sandra Bondon, psychopraticienne spécialisée en hypnose, PNL et méthode MOSAIC®."
				keywords="thérapie, hypnose, MOSAIC, burn out, anxiété, Sandra Bondon"
				author="Sandrine Cazenave"
			/>
			<main className="h-auto">
				<div style={{ background: "yellow", padding: 10 }}>
    				DEBUG solutions-pour-vous OK
  				</div>
				{/* Section intro */}
				<section className="py-6 px-4 text-center">
					<h1 className="text-2xl font-bold uppercase mb-4 p-5">
						Solutions Pour Vous
					</h1>
					<div className="pt-5">
						Ma pratique est dite{" "}
						<strong className="text-primary font-bold">brève</strong>, elle se
						nomme approche solutionniste expérientielle.
					</div>
<p className="pt-5">
  Venez déposer vos bagages.
  <br />
  Cela veut dire :
</p>

<blockquote className="my-12 max-w-3xl mx-auto text-center">
  <p className="relative pl-10 italic text-lg leading-relaxed text-gray-800">
    <span className="absolute left-20 top-[-15px] text-6xl text-orange-400 leading-none">
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
