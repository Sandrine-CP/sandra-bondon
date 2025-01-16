import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedLine() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true); // S'assure que le composant est monté côté client
	}, []);

	useEffect(() => {
		if (isClient) {
			const svgPath = document.querySelector("svg path");

			if (svgPath) {
				gsap.fromTo(
					svgPath,
					{ strokeDashoffset: 1000 },
					{
						strokeDashoffset: 0,
						scrollTrigger: {
							trigger: svgPath,
							start: "top bottom",
							end: "bottom top",
							scrub: true,
						},
					},
				);
			}
		}
	}, [isClient]);

	return (
		<div className="relative h-64">
			<svg
				className="absolute top-0 left-1/2 transform -translate-x-1/2"
				width="200"
				height="500"
				viewBox="0 0 200 500"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title>Animated Line</title>
				<path
					d="M100 0 C100 100, 150 200, 100 300 S50 400, 100 500"
					stroke="#2C254D"
					strokeWidth="2"
					fill="none"
					strokeDasharray="1000"
					strokeDashoffset="1000"
				/>
			</svg>
		</div>
	);
}
