"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TestGsapWithScroll() {
	useEffect(() => {
		const listItems = document.querySelectorAll("ul li");

		if (listItems.length > 0) {
			// Timeline avec ScrollTrigger
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: "ul", // Cible la liste
					start: "top center", // Déclenche quand le haut de la liste arrive au centre
					end: "bottom center", // Fin quand le bas de la liste quitte le centre
					scrub: true,
					markers: true, // Activer les marqueurs pour debug
				},
			});

			// Animation des items
			tl.fromTo(
				listItems,
				{ opacity: 0, y: 50 },
				{ opacity: 1, y: 0, stagger: 0.3, duration: 1 },
			);
		}
	}, []);

	return (
		<section className="py-6 px-4 text-center">
			<ul className="list-none">
				<li className="text-xl font-bold">Item 1</li>
				<li className="text-xl font-bold">Item 2</li>
				<li className="text-xl font-bold">Item 3</li>
			</ul>
		</section>
	);
}
