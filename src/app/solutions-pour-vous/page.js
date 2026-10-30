"use client";
// Organisation des imports
// Imports de base : React, hooks, libraries essentielles
import Link from "next/link";
// Bibliothèques tierces

// Composants parents
import SEO from "@/components/SEO";
// Composants enfants
import ApproachSection from "@/sections/therapies/ApproachSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import TherapiesSection from "@/sections/therapies/TherapiesSection";
import FloatingList from "@/components/FloatingList";
import Button from "@/components/Button";

// Utilitaires et helpers
// Styles et assets

const clients = [
	{
		id: 1,
		text: "Enfant",
		color: "bg-primary",
		size: "w-24 h-24",
		textColor: "text-white",
	},
	{
		id: 2,
		text: "Adolescent",
		color: "bg-secondary",
		size: "w-28 h-28",
		textColor: "text-primary",
	},
	{
		id: 3,
		text: "Adulte",
		color: "bg-primary",
		size: "w-32 h-32",
		textColor: "text-white",
	},
	{
		id: 4,
		text: "Perso",
		color: "bg-secondary",
		size: "w-28 h-28",
		textColor: "text-primary",
	},
	// {
	// 	id: 5,
	// 	text: "Groupe",
	// 	color: "bg-primary",
	// 	size: "w-20 h-20",
	// 	textColor: "text-white",
	// },
	{
		id: 6,
		text: "Pro",
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
						Ma pratique est {" "}
						<strong className="text-primary font-bold">brève</strong> elle se nomme la Thérapie Solutionniste Expérientielle - TSE.
						<br/>Cette thérapie a pour finalité de trouver votre solution à votre mal-être.
						<br/>Ainsi à travers notre travail vous prenez conscience de vos ressources et de vos solutions.
					</div>
				</section>
				{/* Section profils clients */}
				<section className="py-10 px-4 text-center ">
					<h2 className="text-xl font-bold mb-4">Que vous soyez</h2>
					<FloatingList items={clients} />
				</section>
				{/* Section thérapies */}
				<section>
					<TherapiesSection />
				</section>
				{/* Section approche thérapeutique */}
				<section className="py-10 px-4 text-center">
					<ApproachSection />
				</section>
			
				<ScrollToTopButton />
			</main>
		</>
	);
}
