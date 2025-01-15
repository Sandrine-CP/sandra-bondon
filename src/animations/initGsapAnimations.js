import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initGsapAnimations() {
	// Cible les éléments après que le DOM est complètement chargé
	const section = document.querySelector("section");
	const listItems = document.querySelectorAll("ul li > span");

	if (section && listItems.length > 0) {
		// Setup initial des éléments
		gsap.set(listItems, { transformOrigin: "0 50%" });
		gsap.set(listItems, { opacity: 0.2, scale: 0.8 });

		// Timeline pour les animations
		const tl = gsap.timeline();
		tl.to(listItems, {
			opacity: 1,
			scale: 1,
			stagger: 0.5,
		}).to(listItems, { opacity: 0.2, scale: 0.8, stagger: 0.5 }, 0);

		// ScrollTrigger pour l'animation
		ScrollTrigger.create({
			trigger: "ul", // Cible directement la liste non ordonnée
			start: "top 80%", // Débute lorsque le haut de l'élément est à 80% de la hauteur de la fenêtre
			end: "bottom 20%", // Termine lorsque le bas de l'élément atteint 20% de la hauteur de la fenêtre
			animation: tl,
			scrub: true,
			markers: true, // À désactiver en production
		});
	}
}
