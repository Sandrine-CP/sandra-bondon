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
	const addresses = ["32 Bis rue de Montbuisson, Louveciennes, Yvelines"];

	return (
		<>
			<Head>
				<SEO
					title="Séances de Thérapie | Bien-être émotionnel et accompagnement personnalisé"
					description="Découvrez nos séances de thérapie brève : individuelles, de couple ou en groupe. Accompagnement personnalisé pour retrouver équilibre et bien-être à Louveciennes, Yvelines."
					keywords="thérapie brève, séances individuelles, thérapie de couple, bien-être émotionnel, cabinet psychopraticien Louveciennes, Yvelines"
					author="Sandra Bondon"
				/>

				{/* <!-- Canonical link (éviter le contenu dupliqué si la page est accessible via plusieurs URLs) --> */}
				<link rel="canonical" href="https://www.sandrabondon.com/seances" />

				{/* <!-- Open Graph (pour partager sur les réseaux sociaux) --> */}
				<meta
					property="og:title"
					content="Séances de Thérapie | Bien-être émotionnel et accompagnement personnalisé"
				/>
				<meta
					property="og:description"
					content="Explorez nos séances de thérapie brève pour retrouver confiance et bien-être. Rendez-vous disponibles en ligne ou en cabinet à [ville]."
				/>
				<meta
					property="og:url"
					content="https://www.sandrabondon.com/seances"
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content="https://www.sandrabondon.com/images/illustration-seances.jpg"
				/>

				{/* <!-- Twitter Card --> */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Séances de Thérapie | Bien-être émotionnel et accompagnement personnalisé"
				/>
				<meta
					name="twitter:description"
					content="Thérapie brève et personnalisée : séances individuelles, de couple ou en groupe. Accompagnement professionnel à [ville]."
				/>
				<meta
					name="twitter:image"
					content="https://www.sandrabondon.com/images/illustration-seances.jpg"
				/>
				<link
					rel="preload"
					href="/images/bagages.webp"
					as="image"
					type="image/webp"
				/>
			</Head>
			<main className="min-h-screen bg-white">
				{/* Section présentation */}
				<IntroSection />

				{/* Section horaires et tarifs */}
				<FadeInSectionAnimation
					bgColor="#fafafc"
					textColor="#000"
					className="m-6"
				>
					<h2 className="text-xl font-bold mb-4">Horaires et Tarifs</h2>
					<h3 className="text-l font-bold">Horaires</h3>
					<p className="pt-5">
						Je vous accueille sur rendez-vous, du lundi au vendredi de 9h à 20h
						et le samedi matin de 9h à 12h.
					</p>
					<h3 className="text-l font-bold mb-4">Tarifs</h3>
					<ul>
						<li>Séance individuelle : 80 à 110 €</li>
						<li>Séance de couple : 160 €</li>
						<li>Séance de groupe (minimum 3 personnes) : me contacter</li>
					</ul>
					<p className="pt-5">
						Les séances peuvent se faire en cabinet ou en visioconférence
						(WhatsApp), selon vos préférences.
						<br />
						Pour plus d’informations ou pour prendre rendez-vous, n’hésitez pas
						à me contacter via le formulaire en ligne ou par téléphone au
						[numéro en cours d&apos;attribution].
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
				<CabinetSection addresses={addresses} />

				{/* Section Avis Google */}
				<ReviewsSection />

				<ScrollToTopButton />
			</main>
		</>
	);
}
