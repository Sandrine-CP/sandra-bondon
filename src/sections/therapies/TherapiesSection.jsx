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
	const therapiesList = [
		{
			id: 1,
			title: "Hypnose ericksonienne",
			description:
				"Forme d'hypnose douce et non directive. Elle repose sur la collaboration entre le conscient et l'inconscient pour accéder aux ressources internes du patient, permettant de surmonter des obstacles personnels.",
		},
		{
			id: 2,
			title: "PNL",
			description:
				"Programmation Neurolinguistique. Elle est mise en œuvre dans de nombreux secteurs d'activité pour améliorer la communication mais aussi dépasser les formes de blocages inconscients.",
		},
		{
			id: 3,
			title: "Thérapie de groupe",
			description:
				"Un espace collectif d'échange et de soutien pour explorer des problématiques communes.",
		},
		{
			id: 4,
			title: "Thérapie des états du Moi® (ESTI)",
			description:
				"Modèle innovant d’aide psychologique, reconnu comme l’un des plus efficient dans l’accompagnement des traumatismes et des troubles somatiques ou psychosomatiques.",
		},
		{
			id: 5,
			title: "Thérapie brève",
			description:
				"Une approche ciblée et orientée vers la résolution rapide des problèmes.",
		},
		{
			id: 6,
			title: "MOSAIC®",
			description:
				"(Mouvements Oculaires et Stimulations Alternées pour l’Intégration Cérébrale) est une méthode thérapeutique innovante qui utilise les propriétés neurophysiologiques des Stimulations Bilatérales Alternées (auditives, tactiles ou mouvements oculaires) dans une approche solutionniste expérientielle® pour accompagner La transformation profonde. Cette approche thérapeutique, basée sur des recherches scientifiques validées, a l’avantage de s’adresser à tous les profis psychologiques et donc à toutes les pathologies. Elle permet de vivre rapidement et de façon durable dans le corps la solution désirée par la personne..",
		},
		{
			id: 7,
			title: "Thérapie de couple",
			description: "Lorem ipsum doloris.",
		},
		{
			id: 8,
			title: "Therapie individuelle<br /> (adulte,ado,enfant",
			description: "Lorem ipsum doloris.",
		},
	];

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
					{/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center mt-10 mb-10">
					{therapiesList.map((therapy) => (
						<Card
							key={therapy.id}
							title={therapy.title}
							description={therapy.description}
						/>
					))}
				</div> */}
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
