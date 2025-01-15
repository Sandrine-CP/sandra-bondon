"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import TestGsapWithScroll from "./TestGsapWithScroll";

export default function TestGsap() {
	useEffect(() => {
		const listItems = document.querySelectorAll("ul li");

		if (listItems.length > 0) {
			gsap.fromTo(
				listItems,
				{ opacity: 0, y: 50 },
				{ opacity: 1, y: 0, stagger: 0.3, duration: 1 },
			);
		}
	}, []);

	return (
		<>
			<section className="py-6 px-4 text-center">
				<ul className="list-none">
					<li className="text-xl font-bold">Item 1</li>
					<li className="text-xl font-bold">Item 2</li>
					<li className="text-xl font-bold">Item 3</li>
				</ul>
			</section>
		</>
	);
}
