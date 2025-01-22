// Organisation des imports
// Imports de base : React, hooks, libraries essentielles
import { useRef, useEffect } from "react";
import Image from "next/image";

// Bibliothèques tierces
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsapAnimation } from "@/animations/useGsapAnimation";

// Composants parents

// Composants enfants
import GoogleMap from "@/components/GoogleMap";
import Cabinet from "@../../../public/images/cabinet.jpg";

// Utilitaires et helpers
// Styles et assets

gsap.registerPlugin(ScrollTrigger);

export default function CabinetSection({ addresses }) {
	const leftBlockRef = useRef(null); // Bloc gauche image cabinet
	const rightBlockRef = useRef(null); // Bloc droit texte cabinet
	const sectionRef = useRef(null); // Section Google cabinet et Google map

	useGsapAnimation(leftBlockRef, {
		from: { x: -100, opacity: 0 },
		to: { x: 0, opacity: 1, duration: 1.5 },
		trigger: { start: "top 80%", end: "top 30%", scrub: true },
	});

	useGsapAnimation(rightBlockRef, {
		from: { x: 100, opacity: 0 },
		to: { x: 0, opacity: 1, duration: 1.5 },
		trigger: { start: "top 80%", end: "top 30%", scrub: true },
	});

	return (
		<>
			{/* Section Google cabinet et Google map */}
			<section ref={sectionRef} className="py-6 px-4 text-center">
				<div className="flex flex-col lg:flex-row m-2">
					{/* Bloc gauche : Image cabinet */}
					<div
						ref={leftBlockRef}
						className="flex justify-center items-center m-2 lg:w-1/2 w-full mt-4 lg:mt-0"
					>
						<Image
							src={Cabinet}
							alt="Photo du cabinet à Louveciennes de Sandra Bondon"
							width="auto" // Largeur explicite
							height="auto" // Hauteur explicite
							className="rounded-lg shadow-lg object-cover"
							priority
						/>{" "}
					</div>
					{/* Bloc droit : titre et texte cabinet */}
					<div
						ref={rightBlockRef}
						className="flex flex-col justify-center items-center text-center lg:w-1/2 w-full"
					>
						<h2 className="text-xl font-bold p-5">
							Trouvez facilement mon cabinet
						</h2>
						<p>
							Le cabinet est situé au cœur de [ville ou quartier], dans un
							espace calme et facilement accessible. <br />
							Vous pouvez consulter la carte ci-dessous pour trouver
							l’itinéraire le plus pratique depuis votre emplacement. <br />
							Un parking gratuit est disponible à proximité.
						</p>
					</div>
				</div>{" "}
				<div className="m-8">
					<GoogleMap addresses={addresses} />
				</div>
			</section>
		</>
	);
}
