"use client";
import AnimationGsap from "@/sections/therapies/AnimationGsap";
import Approach from "@/sections/therapies/Approach";
import Therapies from "@/sections/therapies/Therapies";
import Button from "@/components/Button";
import { gsap } from "gsap";
import Link from "next/link";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function SolutionsPourVous() {
	const timeline = gsap.timeline();

	return (
		<>
			<main className="min-h-screen bg-white">
				<section className="py-6 px-4 text-center">
					<h1 className="text-2xl font-bold uppercase mb-4 p-5">
						Solutions Pour Vous
					</h1>
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
				<section className="py-10 px-4 text-center bg-[#fafafc] rounded-md m-6 ">
					<Approach />
					<Link
						href="/contact"
						className="flex flex-grow justify-center items-center text-center m-4"
					>
						<Button
							text="Me contacter"
							textColor="#2C254D"
							bgColor="#FFA500"
							hoverTextColor="#2C254D"
							hoverBgColor="#FFA500"
							className="mt-6"
						/>
					</Link>
				</section>
				<Therapies />
				<ScrollToTopButton />
			</main>
		</>
	);
}
