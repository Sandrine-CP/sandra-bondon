"use client";
import AnimationGsap from "@/sections/therapies/AnimationGsap";
import Approach from "@/sections/therapies/Approach";
import Therapies from "@/sections/therapies/Therapies";
import { gsap } from "gsap";

export default function SolutionsPourVous() {
	const timeline = gsap.timeline();

	return (
		<>
			<main className="min-h-screen bg-white">
				<section className="py-6 px-4 text-center">
					<h1 className="text-2xl font-bold mb-4 p-5">Solutions Pour Vous</h1>
					<p className="pt-5">
						Ma pratique est dite{" "}
						<strong className="text-primary font-bold">brève</strong>, elle se
						nomme approche solutionniste expérientielle.
					</p>
					<p className="pt-5">
						Venez déposer vos bagages.
						<br />
						Cela veut dire : <br />
						<strong className="text-primary font-bold">
							&quot;Ce que vous voulez vivre demain, vous le vivrez
							aujourd&apos;hui&quot;
						</strong>
						.
					</p>
					<p className="pt-5">
						A travers votre travail, nous allons{" "}
						<strong className="text-primary font-bold">ensemble</strong> trouver
						vos ressources et les mettre en lumière.
						<br />
						Vous permettre de Re-prendre confiance en vous, retrouver un juste
						positionnement et la posture qui est en adéquation avec qui vous
						êtes.
					</p>
				</section>
				<AnimationGsap timeline={timeline} />
				<Approach />
				<Therapies />
			</main>
		</>
	);
}
