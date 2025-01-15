"use client";
import styles from "../home/styles/gallery.module.scss";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
	floating1,
	floating2,
	floating3,
	floating4,
	floating5,
	floating6,
	floating7,
	floating8,
} from "../../data";

export default function Gallery() {
	const plane1 = useRef(null);
	const plane2 = useRef(null);
	const plane3 = useRef(null);
	let requestAnimationFrameId = null;
	let xForce = 0;
	let yForce = 0;
	const easing = 0.08;
	const speed = 0.01;

	const manageMouseMove = (e) => {
		const { movementX, movementY } = e;
		xForce += movementX * speed;
		yForce += movementY * speed;

		if (requestAnimationFrameId == null) {
			requestAnimationFrameId = requestAnimationFrame(animate);
		}
	};

	const lerp = (start, target, amount) =>
		start * (1 - amount) + target * amount;

	const animate = () => {
		xForce = lerp(xForce, 0, easing);
		yForce = lerp(yForce, 0, easing);
		gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
		gsap.set(plane2.current, {
			x: `+=${xForce * 0.5}`,
			y: `+=${yForce * 0.5}`,
		});
		gsap.set(plane3.current, {
			x: `+=${xForce * 0.25}`,
			y: `+=${yForce * 0.25}`,
		});

		if (Math.abs(xForce) < 0.01) xForce = 0;
		if (Math.abs(yForce) < 0.01) yForce = 0;

		if (xForce !== 0 || yForce !== 0) {
			requestAnimationFrame(animate);
		} else {
			cancelAnimationFrame(requestAnimationFrameId);
			requestAnimationFrameId = null;
		}
	};

	return (
		<main
			onMouseMove={(e) => {
				manageMouseMove(e);
			}}
			className={styles.main}
		>
			<div ref={plane1} className={styles.plane}>
				<Image src={floating1} alt="image" width={300} />
				<Image src={floating2} alt="image" width={300} />
				<Image src={floating7} alt="image" width={225} priority />
			</div>
			<div ref={plane2} className={styles.plane}>
				<Image src={floating4} alt="image" width={250} priority />
				<Image src={floating6} alt="image" width={200} />
				<Image src={floating8} alt="image" width={225} />
			</div>
			<div ref={plane3} className={styles.plane}>
				<Image src={floating3} alt="image" width={150} />
				<Image src={floating5} alt="image" width={200} />
			</div>
			<div className={styles.title}>
				<h1>
					Mal être
					<br />
					Difficultés relationnelles
				</h1>
				<p>Il existe une solution pour vous</p>
				<div className="mt-10 animate-bounce flex justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="white"
						viewBox="0 0 16 16"
						aria-labelledby="scroll-arrow" // Lien avec le title pour l'accessibilité
						role="img" // Définit que c'est une image
					>
						<title id="scroll-arrow">Flèche vers le bas pour scroller</title>
						<path d="M8 12L2 6h12L8 12z" />
					</svg>
				</div>
			</div>
		</main>
	);
}
