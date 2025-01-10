"use client";
import Button from "@/components/Button";
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
		<section className="min-h-screen py-16 px-4 text-center">
			<h2 className="text-2xl font-bold mb-4">Spécialités</h2>
			<p className="max-w-2xl mx-auto mb-8">
				Lorem ipsum dolor sit amet consectetur. Facilisis donec faucibus sit
				volutpat netus quis sagittis diam sem.
			</p>
			<div className="relative flex flex-wrap justify-center gap-6">
				{specialties.map((item) => (
					<div
						key={item.id}
						className={`flex items-center justify-center rounded-full text-white font-semibold ${item.color} ${item.size} sm:{item.size}`}
					>
						{item.text}
					</div>
				))}
			</div>
			<Button
				text="Me contacter"
				textColor="#2C254D"
				bgColor="#F2E9E4"
				hoverTextColor="#2C254D"
				hoverBgColor="#F2E9E4"
				className="mt-6 mb-6"
			/>
		</section>
	);
}
