"use client";
// Organisation des imports
// Imports de base : React, hooks, libraries essentielles
import Link from "next/link";

// Bibliothèques tierces
// Composants parents

// Composants enfants
import FadeInSectionAnimation from "@/components/FadeInSectionAnimation";
import Button from "@/components/Button";

// Utilitaires et helpers
// Styles et assets

export default function ApproachSection() {
	return (
		<section id="approach">
			<FadeInSectionAnimation
				bgColor="#fafafc"
				textColor="#000"
				className="m-6"
			>
				<h2 className="text-xl font-bold mb-6">
					Je propose une approche personnalisée
				</h2>
				<p className="leading-relaxed max-w-4xl mx-auto text-gray-700">
					En tant que psychopraticienne, je m'engage à écouter attentivement
					votre besoin. Ensemble, nous explorons vos difficultés et vos
					objectifs pour établir une relation de confiance solide. Cette phase
					d'exploration est essentielle pour comprendre vos attentes et
					concevoir une approche thérapeutique entièrement personnalisée. Grâce
					à une combinaison de techniques thérapeutiques adaptées, je vous
					accompagne pour surmonter vos blocages, retrouver confiance en vous et
					avancer vers un équilibre personnel et professionnel.
				</p>
				<Link href="/contact">
					<Button
						text="Me contacter"
						textColor="#2C254D"
						bgColor="#FFA500"
						hoverTextColor="#2C254D"
						hoverBgColor="#FFA500"
						className="mt-6"
					/>
				</Link>
			</FadeInSectionAnimation>
		</section>
	);
}
