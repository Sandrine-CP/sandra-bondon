"use client";
import Link from "next/link";
import Card from "@/components/Card";
import Button from "@/components/Button";

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
					La thérapie brève est une approche centrée sur la recherche de{" "}
					<strong className="text-primary font-bold">
						solutions concrètes et rapides
					</strong>{" "}
					pour surmonter des difficultés spécifiques.
					<br /> Contrairement aux thérapies traditionnelles, elle se concentre
					sur le présent et le futur, en mobilisant vos ressources pour
					atteindre vos objectifs.
					<br /> La durée de ce type de thérapie varie généralement entre XX et
					XX séances, selon la nature de la problématique et les besoins
					individuels.
					<br /> Grâce à des techniques adaptées et ciblées, elle offre des{" "}
					<strong className="text-primary font-bold">
						résultats significatifs
					</strong>{" "}
					dans un temps réduit.
				</p>
			</section>
			<section>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center mt-10 mb-10">
					{therapiesList.map((therapy) => (
						<Card
							key={therapy.id}
							title={therapy.title}
							description={therapy.description}
						/>
					))}
				</div>
			</section>
			<section>
				<p className="text-center">
					Vous souhaitez savoir comment une séance se déroule ?
				</p>
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
		</>
	);
}
