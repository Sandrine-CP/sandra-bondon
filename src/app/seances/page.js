"use client";
// Organisation des imports
// Imports de base : React, hooks, libraries essentielles
import React from "react";
import Head from "next/head";
import Link from "next/link";
// Bibliothèques tierces
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Composants parents
// Composants enfants
import IntroSection from "@/sections/seances/IntroSection";
import FadeInSectionAnimation from "@/components/FadeInSectionAnimation";
import Button from "@/components/Button";
import CabinetSection from "@/sections/seances/CabinetSection";
import ReviewsSection from "@/sections/seances/ReviewsSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SEO from "@/components/SEO";
// Utilitaires et helpers
// Styles et assets

gsap.registerPlugin(ScrollTrigger);

export default function Seances() {
	const addresses = ["6 Rue au Pain, 78100 Saint-Germain-en-Laye, France"];

	return (
		<>
			<SEO
				title="Séances de thérapie à Saint-Germain-en-Laye | Sandra Bondon"
				description="Découvrez les séances de thérapie brève proposées par Sandra Bondon : accompagnement individuel, couple, famille ou groupe, en cabinet à Saint-Germain-en-Laye ou en visio."
				keywords="séances de thérapie, thérapie brève, thérapie individuelle, thérapie de couple, thérapie de groupe, psychopraticienne Saint-Germain-en-Laye, visio, cabinet"
				author="Sandra Bondon"
				canonical="https://www.sandra-bondon.com/seances"
				ogUrl="https://www.sandra-bondon.com/seances"
				ogImage="https://www.sandra-bondon.com/images/seances/ressources-interieures-message.webp"
			/>
			<main className="min-h-screen bg-white">
				{/* Section présentation */}
				<IntroSection />

				{/* Section horaires et tarifs */}
				<FadeInSectionAnimation
					bgColor="#fafafc"
					textColor="#000"
					className="my-16 px-6"
				>
					<h2 className="text-xl font-bold mb-4">Horaires et Tarifs</h2>
					<h3 className="text-l font-bold">Horaires</h3>
					<p className="pt-5">
						Je vous accueille sur rendez-vous, lundi, mercredi et samedi de 11h à 17h.<br />
						Vendredi de 11h à 17h.
					</p>
					<h3 className="text-l font-bold mb-4">Tarifs</h3>
					<ul>
						<li>Séance individuelle : 85 à 110 €</li>
						<li>Séance de couple : 160 €</li>
						<li>Séance de groupe (minimum 3 personnes) : me contacter</li>
						<li>Séance famille : 180 €</li>
					</ul>
					<p className="pt-5">
						Les séances peuvent se faire en cabinet ou en visioconférence
						(WhatsApp), selon vos préférences.
						<br />
						Pour plus d’informations ou pour prendre rendez-vous, n’hésitez pas
						à me contacter via le formulaire en ligne ou par téléphone au
						06 24 18 23 02.
					</p>
					<Link href="/contact">
						<Button
							text="Me contacter"
							textColor="#2C254D"
							bgColor="#FFA500"
							hoverTextColor="#2C254D"
							hoverBgColor="#FFA500"
							className="mt-6"
						/>
					</Link>
				</FadeInSectionAnimation>

				{/* Section Cabinet et Google Maps */}
				<CabinetSection addresses={addresses} className="mb-12 lg:mb-20" />

				{/* Section Avis Google */}
				<ReviewsSection />

				<ScrollToTopButton />
			</main>
		</>
	);
}
