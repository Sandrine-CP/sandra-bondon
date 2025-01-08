"use client";
import { keyframes } from "framer-motion";
import React from "react";

const specialties = [
	{ id: 1, text: "Addiction", color: "bg-orange", size: "w-28 h-28" },
	{ id: 2, text: "Burn Out", color: "bg-orange", size: "w-20 h-20" },
];

export default function () {
	return (
		<section className="py-16 px-4 text-center">
			<h2 className="text-2xl font-bold mb-4">Spécialités</h2>
			<p className="max-w-2xl mx-auto mb-8">
				Lorem ipsum dolor sit amet consectetur. Facilisis donec faucibus sit
				volutpat netus quis sagittis diam sem.
			</p>
			<div className="flex flex-wrap justify-center gap-6">
				{specialties.map((item) => (
					<div
						key={item.id}
						className={`flex items-center justify-center rounded-full text-white font-semibold ${item.color} ${item.size}`}
					>
						{item.text}
					</div>
				))}
			</div>
		</section>
	);
}
