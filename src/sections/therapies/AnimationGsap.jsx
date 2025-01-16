"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function AnimationGsap({ timeline }) {
	useEffect(() => {
		const listItems = document.querySelectorAll("ul li");

		if (listItems.length > 0) {
			timeline.fromTo(
				listItems,
				{ opacity: 0, y: 50 },
				{ opacity: 1, y: 0, stagger: 0.3, duration: 1 },
			);
		}
	}, [timeline]);

	return (
		<section className="py-6 px-4 mb-10 bg-gray-50 text-center">
			<h2 className="text-xl font-bold mb-8">Vous êtes</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
				<ul className="list-none space-y-4">
					<li className="text-xl font-bold bg-white shadow-md rounded-lg p-4">
						Individuel
					</li>
					<li className="text-xl font-bold bg-white shadow-md rounded-lg p-4">
						Adultes
					</li>
				</ul>
				<ul className="list-none space-y-4">
					<li className="text-xl font-bold bg-white shadow-md rounded-lg p-4">
						Couple
					</li>
					<li className="text-xl font-bold bg-white shadow-md rounded-lg p-4">
						Adolescents
					</li>
				</ul>
				<ul className="list-none space-y-4">
					<li className="text-xl font-bold bg-white shadow-md rounded-lg p-4">
						Enfants
					</li>
					<li className="text-xl font-bold bg-white shadow-md rounded-lg p-4">
						Famille
					</li>
				</ul>
				<ul className="list-none space-y-4">
					<li className="text-xl font-bold bg-white shadow-md rounded-lg p-4">
						Groupe
					</li>
					<li className="text-xl font-bold bg-white shadow-md rounded-lg p-4">
						Professionnel
					</li>
				</ul>
			</div>
		</section>
	);
}
