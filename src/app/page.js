"use client";
import Button from "@/components/Button";
import GoogleReviews from "@/components/GoogleReviews";
import Consultations from "@/sections/home/Consultations";
import Gallery from "@/sections/home/Gallery";
import Professionals from "@/sections/home/Professionals";
import Specialities from "@/sections/home/Specialities";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Link from "next/link";
import Image from "next/image";
import Ressources from "../../public/images/lumiere.jpg";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
	const ressourcesRef = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			ressourcesRef.current,
			{ x: "-100%", opacity: 0 }, // Commence en dehors de l'écran à gauche
			{
				x: 0,
				opacity: 1,
				duration: 1.5,
				ease: "power2.out",
				scrollTrigger: {
					trigger: ressourcesRef.current, // Déclencheur de l'animation
					start: "top 80%", // Début de l'animation (80% depuis le haut de la fenêtre)
				},
			},
		);
	}, []);

	return (
		<>
			<main className="m-0 p-0 bg-black">
				{/* Section Gallerie d'images */}
				<section className="h-screen mt-0 pt-0 mb-10">
					<Gallery />
				</section>
				{/* Section image lumière */}
				<section
					className="h-[300px] bg-cover bg-center sm:h-[250px] md:h-[400px]"
					style={{
						backgroundImage: "url(/images/lumiere.jpg)",
					}}
				/>
				{/* Section Ressources */}
				<section
					ref={ressourcesRef}
					className="flex flex-col items-center justify-center my-0 bg-black text-white py-10 md:py-20"
				>
					<p className="text-[8vw] sm:text-[6vw] md:max-w-[60vw] text-center leading-tight">
						Toutes les ressources sont en vous
					</p>
					<Link href="/solutions-pour-vous">
						<Button
							text="Voir plus"
							textColor="#FFFFFF"
							bgColor="#4961E1"
							hoverTextColor="#FFFFFF"
							hoverBgColor="#4961E1"
							className="mt-6 mb-6"
						/>
					</Link>
				</section>{" "}
				{/* Section Sandra Bondon */}
				<section
					className="h-[75vh] bg-cover bg-center"
					style={{ backgroundImage: "url(/images/divan2.png)" }}
				>
					<div className="relative z-10 text-white flex flex-col justify-between h-full p-4 md:p-10 mix-blend-difference">
						<p className="text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[1.9vw] uppercase self-end">
							Sandra Bondon : Psychopraticienne - Business Coach -
							Hypnothérapeute
						</p>
						<p className="text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[5vw] uppercase text-right">
							S | B
						</p>
					</div>
				</section>
				<section className="h-screen bg-white relative">
					<Specialities />
				</section>
				<section className="px-4 sm:px-6 lg:px-0 bg-white relative">
					<Professionals />
				</section>
				<section className="px-4 sm:px-6 lg:px-10 py-10 md:py-20 bg-white">
					<Consultations />
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
				<section>
					<GoogleReviews />
				</section>
			</main>
			<ScrollToTopButton />
		</>
	);
}
