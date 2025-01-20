import Image from "next/image";
import Office from "../../../public/images/professionals.jpg";
import Button from "@/components/Button";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Professionals() {
	const sectionRef = useRef(null); // Référence pour toute la section
	const leftBlockRef = useRef(null); // Référence pour le bloc gauche (texte)
	const rightBlockRef = useRef(null); // Référence pour le bloc droit (image)

	useEffect(() => {
		// Animation pour le bloc gauche (texte)
		gsap.fromTo(
			leftBlockRef.current,
			{ x: "-100%", opacity: 0 }, // Part de la gauche
			{
				x: 0,
				opacity: 1,
				duration: 1.5,
				ease: "power2.out",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 80%",
				},
			},
		);

		// Animation pour le bloc droit (image)
		gsap.fromTo(
			rightBlockRef.current,
			{ x: "100%", opacity: 0 }, // Part de la droite
			{
				x: 0,
				opacity: 1,
				duration: 1.5,
				ease: "power2.out",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 80%",
				},
			},
		);
	}, []);

	return (
		<section ref={sectionRef} className="bg-[#fafafc] py-16 px-4">
			<div>
				<h2 className="text-2xl font-bold mb-8 text-center">
					Solution pour vos collaborateurs
				</h2>
				<div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
					{/* Bloc gauche : Texte */}
					<div
						ref={leftBlockRef} // Référence ici
						className="flex flex-col justify-center items-center text-center lg:w-1/2"
					>
						<h3 className="text-l font-bold mb-4">Accompagner</h3>
						<p className="leading-relaxed">
							Nous identifions ensemble vos besoins. <br />
							Nous pouvons travailler sur la gestion du changement, la charge
							mentale, la prévention du burn-out, le développement de carrière
							ou tout autre sujet qui permettra à vos collaborateurs de vivre
							pleinement et sereinement leur carrière.
						</p>
					</div>

					{/* Bloc droit : Image */}
					<div
						ref={rightBlockRef} // Référence ici
						className="flex justify-center items-center lg:w-1/2"
					>
						<div className="w-full max-w-sm mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl">
							<Image
								src={Office}
								alt="Personnes travaillant dans un bureau"
								width={640} // Largeur explicite
								height={480} // Hauteur explicite pour ratio 4:3
								className="rounded-lg shadow-lg object-cover w-full"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="text-center mt-8">
				<Button
					text="Voir plus"
					textColor="#2C254D"
					bgColor="#FFA500"
					hoverTextColor="#2C254D"
					hoverBgColor="#FFA500"
					className="mt-6"
				/>
			</div>
		</section>
	);
}
