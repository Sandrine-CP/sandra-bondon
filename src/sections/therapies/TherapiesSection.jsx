"use client";
// Organisation des imports
// React, hooks, librairies
import Link from "next/link";
// Bibliothèques tierces
// Composants parents
// Composants enfants
import Button from "@/components/Button";
import TherapiesCardsAnimation from "./TherapiesCardsAnimation";
// Utilitaires et helpers
// Styles et assets

export default function TherapiesSection() {

	return (
		<>
			{/* Section intro */}
			<section id="approach" className="py-10 px-4 mb-0 text-center bg-white">
				<h2 className="text-xl font-bold mb-6">
					Techniques thérapeutiques adaptées
				</h2>
				<p className="leading-relaxed max-w-4xl mx-auto text-gray-700">
					La thérapie brève est une approche centrée sur la recherche de{" "}
					<strong className="text-primary font-bold">
						solutions concrètes et rapides
					</strong>{" "}
					pour surmonter des difficultés spécifiques.
					<br /> Contrairement aux thérapies traditionnelles, elle se concentre
					sur le présent et le futur, en mobilisant vos ressources pour
					atteindre vos objectifs.
					<br /> La durée de ce type de thérapie varie généralement entre 6 mois et
					3 ans, selon la nature de la problématique et les besoins
					individuels.
					<br /> Grâce à des techniques adaptées et ciblées, elle offre des{" "}
					<strong className="text-primary font-bold">
						résultats significatifs
					</strong>{" "}
					dans un temps réduit.
				</p>
			</section>
			{/* Section cards animation */}
			<div className="bg-primary mt-O">
				<section>
					<div>
						<TherapiesCardsAnimation />
					</div>
				</section>

				{/* Section avec CTA séances */}
				<section className="bg-primary">
					<p className="text-center text-white">
						Vous souhaitez savoir comment une séance se déroule ?
					</p>
					<Link
						href="/seances"
						className=" flex flex-row justify-center text-center"
					>
						<Button
							text="Voir plus"
							textColor="#FFFFFF"
							bgColor="#D110D5"
							hoverTextColor="#FFFFFF"
							hoverBgColor="#D110D5"
							className="mt-6 mb-6"
						/>
					</Link>
				</section>
			</div>
		</>
	);
}
