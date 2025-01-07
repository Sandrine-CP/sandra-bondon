"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Intro from "@/sections/home/parallax/components/Intro";
import Description from "@/sections/home/parallax/components/Description";
import Section from "@/sections/home/parallax/components/Section";

export default function ParallaxSection() {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);

	return (
		<main className="bg-black">
			<Intro />
			<Description />
			<Section />
			<div className="h-screen" />
		</main>
	);
}
