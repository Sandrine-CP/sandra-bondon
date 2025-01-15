"use client";
import React, { useEffect } from "react";
import { initGsapAnimations } from "@/animations/initGsapAnimations";

export default function Approach() {
	useEffect(() => {
		initGsapAnimations(); // Exécute l'animation après le montage
	}, []);

	return (
		<section className="py-6 px-4 text-center">
			{/* Spacer */}
			<div className="h-screen flex items-center justify-center bg-[#eaf3fa] mb-20 text-4xl text-[#2d2d3f]">
				<h2 className="text-xl font-bold mb-4 p-5">Selon votre profil</h2>
			</div>

			{/* Columns */}
			<div className="pl-5 flex items-start">
				<h3 className="text-2xl uppercase font-bold tracking-wider">
					Vous êtes
				</h3>
				<ul className="list-none pl-0 text-center font-extrabold uppercase tracking-wider text-[clamp(30px,8vw,60px)] leading-none">
					<li className="snap-center pl-1">
						<span>Individuel</span>
					</li>
					<li className="snap-center pl-1">
						<span>Adulte</span>
					</li>
					<li className="snap-center pl-1">
						<span>Couple</span>
					</li>
					<li className="snap-center pl-1">
						<span>Adolescent</span>
					</li>
					<li className="snap-center pl-1">
						<span>Enfant</span>
					</li>
					<li className="snap-center pl-1">
						<span>Famille</span>
					</li>
					<li className="snap-center pl-1">
						<span>Groupe</span>
					</li>
					<li className="snap-center pl-1">
						<span>Professionnel</span>
					</li>
				</ul>
			</div>

			{/* Spacer */}
			<div className="h-screen flex items-center justify-center bg-[#eaf3fa] mt-20 mb-0">
				<p>Nous explorons votre besoin</p>
			</div>
		</section>
	);
}
