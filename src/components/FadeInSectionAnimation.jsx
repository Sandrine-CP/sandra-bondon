import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FadeInSectionAnimation({
	children,
	bgColor = "#fafafc",
	textColor = "#000",
	className = "",
}) {
	const sectionRef = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			sectionRef.current,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 1.5,
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 80%",
					end: "top 30%",
					scrub: true,
				},
			},
		);
	}, []);

	return (
		<section
			ref={sectionRef}
			style={{ backgroundColor: bgColor, color: textColor }}
			className={`py-6 px-4 text-center rounded-md shadow-md ${className}`}
		>
			{children}
		</section>
	);
}
