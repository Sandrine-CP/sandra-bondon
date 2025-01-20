"use client";
import React, { useEffect } from "react";

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
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
				<ul className="list-none space-y-4">
					<li className="text-l font-bold bg-primary text-secondary shadow-md rounded-lg p-2">
						Individuel
					</li>
					<li className="text-l font-bold bg-primary text-secondary shadow-md rounded-lg p-2">
						Adultes
					</li>
				</ul>
				<ul className="list-none space-y-4">
					<li className="text-l font-bold bg-primary text-secondary shadow-md rounded-lg p-2">
						Couple
					</li>
					<li className="text-l font-bold bg-primary text-secondary shadow-md rounded-lg p-2">
						Adolescents
					</li>
				</ul>
				<ul className="list-none space-y-4">
					<li className="text-l font-bold bg-primary text-secondary shadow-md rounded-lg p-2">
						Enfants
					</li>
					<li className="text-l font-bold bg-primary text-secondary shadow-md rounded-lg p-2">
						Famille
					</li>
				</ul>
				<ul className="list-none space-y-4">
					<li className="text-l font-bold bg-primary text-secondary shadow-md rounded-lg p-2">
						Groupe
					</li>
					<li className="text-l font-bold bg-primary text-secondary shadow-md rounded-lg p-2">
						Professionnel
					</li>
				</ul>
			</div>
		</section>
	);
}
