"use client";
import { keyframes } from "framer-motion";
import React from "react";

const specialties = [
	{ id: 1, text: "Addiction", color: "bg-orange", size: "w-28 h-28" },
	{ id: 2, text: "Burn Out", color: "bg-blue", size: "w-20 h-20" },
	{ id: 3, text: "Trauma", color: "bg-orange", size: "w-32 h-32" },
	{ id: 4, text: "Anxiété", color: "bg-blue", size: "w-28 h-28" },
	{ id: 5, text: "Charge Mentale", color: "bg-orange", size: "w-28 h-28" },
	{ id: 6, text: "Obsession", color: "bg-blue", size: "w-32 h-32" },
	{ id: 7, text: "Phobie", color: "bg-orange", size: "w-24 h-24" },
];

export default function () {
	return (
		<section className="py-16 px-4 text-center">
			<h2 className="text-2xl font-bold mb-4">Spécialités</h2>
			<p className="max-w-2xl mx-auto mb-8">
				Lorem ipsum dolor sit amet consectetur. Facilisis donec faucibus sit
				volutpat netus quis sagittis diam sem.
			</p>
			<div className="relative flex flex-wrap justify-center gap-6">
				{specialties.map((item) => (
					<div
						key={item.id}
						className={`flex items-center justify-center rounded-full text-white font-semibold ${item.color} ${item.size}`}
					>
						{item.text}
					</div>
				))}
			</div>
			<div className="mt-20">
				<button
					type="button"
					class="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-secondary backdrop-blur-md lg:font-semibold isolation-auto border-secondary before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary hover:text-secondary before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
				>
					Me contacter
					{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
					<svg
						className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-secondary text-secondary ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
						viewBox="0 0 16 19"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
							className="fill-gray-800 group-hover:fill-gray-800"
						/>
					</svg>
				</button>
			</div>
		</section>
	);
}
