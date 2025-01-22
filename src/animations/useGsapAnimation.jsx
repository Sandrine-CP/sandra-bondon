// Organisation des imports
// Imports de base : React, hooks, libraries essentielles
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Bibliothèques tierces
// Composants parents
// Composants enfants
// Utilitaires et helpers
// Styles et assets

gsap.registerPlugin(ScrollTrigger);

export function useGsapAnimation(ref, animationOptions) {
	useEffect(() => {
		gsap.fromTo(ref.current, animationOptions.from, {
			...animationOptions.to,
			scrollTrigger: { trigger: ref.current, ...animationOptions.trigger },
		});
	}, [ref, animationOptions]);
}
