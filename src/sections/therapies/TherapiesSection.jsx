"use client";

import Card from "@/components/Card";

export default function TherapiesSection() {
	const therapiesList = [
		{
			id: 1,
			title: "Hypnose",
			description:
				"Un état modifié de conscience pour accéder à vos ressources profondes et favoriser le changement.",
		},
		{
			id: 2,
			title: "PNL",
			description:
				"Programmation Neuro-Linguistique : une méthode pour comprendre et modifier les schémas comportementaux.",
		},
		{
			id: 3,
			title: "Thérapie de groupe",
			description:
				"Un espace collectif d'échange et de soutien pour explorer des problématiques communes.",
		},
		{
			id: 4,
			title: "Psychodrame",
			description:
				"Une méthode basée sur la mise en scène pour explorer et résoudre des conflits internes.",
		},
		{
			id: 5,
			title: "Thérapie stratégique",
			description:
				"Une approche ciblée et orientée vers la résolution rapide des problèmes.",
		},
		{
			id: 6,
			title: "MOSAIC®",
			description:
				"Une approche innovante pour débloquer des schémas émotionnels grâce à des techniques expérimentales.",
		},
	];

	return (
		<>
			<section id="approach" className="py-10 px-4 text-center bg-white ">
				<h2 className="text-xl font-bold mb-6">
					Techniques thérapeutiques adaptées
				</h2>
				<p className="leading-relaxed max-w-4xl mx-auto text-gray-700">
					La thérapie brève est une approche centrée sur la recherche de
					solutions concrètes et rapides pour surmonter des difficultés
					spécifiques. Contrairement aux thérapies traditionnelles, elle se
					concentre sur le présent et le futur, en mobilisant vos ressources
					pour atteindre vos objectifs. La durée de ce type de thérapie varie
					généralement entre 5 et 15 séances, selon la nature de la
					problématique et les besoins individuels. Grâce à des techniques
					adaptées et ciblées, elle offre des résultats significatifs dans un
					temps réduit.
				</p>
			</section>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center mt-10 mb-10">
				{therapiesList.map((therapy) => (
					<Card
						key={therapy.id}
						title={therapy.title}
						description={therapy.description}
					/>
				))}
			</div>
		</>
	);
}
