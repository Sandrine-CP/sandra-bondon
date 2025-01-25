"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function AnimatedQuote() {
	useEffect(() => {
		const quote = document.querySelector("#quote");
		const words = quote.innerText.split(" "); // Diviser la phrase en mots
		quote.innerHTML = ""; // Vider l'élément pour insérer des spans

		// Créer un <span> pour chaque mot
		for (const word of words) {
			const span = document.createElement("span");
			span.innerText = `${word} `; // Ajouter un espace après chaque mot
			quote.appendChild(span);
		}

		const spans = document.querySelectorAll("#quote span");

		// Timeline GSAP pour l'animation
		const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
		spans.forEach((span, i) => {
			tl.fromTo(
				span,
				{ opacity: 0, y: 50, z: -200, rotationX: -90 },
				{
					opacity: 1,
					y: 0,
					z: 0,
					rotationX: 0,
					duration: 1,
					ease: "power2.out",
				},
				i * 0.2, // Délai entre les mots
			);
		});

		// Animation finale (explosion)
		tl.to(
			spans,
			{
				z: 200,
				opacity: 0,
				rotationX: 360,
				duration: 1,
				stagger: 0.1,
				ease: "power3.inOut",
			},
			"+=2", // Délai après la première animation
		);
	}, []);

	return (
		<div className="flex items-center justify-center h-screen">
			<div
				id="quote"
				className="text-center text-4xl font-bold leading-relaxed"
			>
				Deadlines are looming. You've got to deliver something that looks
				amazing, packed with lots of whiz-bang effects.
			</div>
		</div>
	);
}
