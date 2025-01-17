"use client";
import Button from "@/components/Button";
import GoogleMap from "@/components/GoogleMap";
import Link from "next/link";
import React from "react";
import Head from "next/head";

export default function Seances() {
	return (
		<>
			<Head>
				{/* <!-- Titre optimisé pour le SEO --> */}
				<title>
					Séances de Thérapie | Bien-être émotionnel et accompagnement
					personnalisé
				</title>

				{/* <!-- Meta description --> */}
				<meta
					name="description"
					content="Découvrez nos séances de thérapie brève : individuelles, de couple ou en groupe. Accompagnement personnalisé pour retrouver équilibre et bien-être à Louveciennes, Yvelines."
				/>

				{/* <!-- Mots-clés --> */}
				<meta
					name="keywords"
					content="thérapie brève, séances individuelles, thérapie de couple, bien-être émotionnel, cabinet psychopraticien Louveciennes, Yvelines"
				/>

				{/* <!-- Auteur --> */}
				<meta name="author" content="Sandra Bondon" />

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
			</Head>
			<main className="min-h-screen bg-white">
				<section className="py-6 px-4 text-center">
					<h1 className="text-2xl font-bold uppercase mb-4 p-5">Séances</h1>
					<h2 className="text-xl font-bold p-5">Comment ça se passe ?</h2>
					<p className="pt-5">
						Chaque séance est un moment dédié à vous et à votre bien-être.{" "}
						<br />
						Lors de notre première rencontre, nous prenons le temps d’explorer
						vos besoins, vos attentes, et vos objectifs. <br />
						Cette étape est essentielle pour établir une relation de confiance
						et définir un plan d’accompagnement personnalisé. <br />
						Les séances se déroulent dans un cadre bienveillant et confidentiel.
						Elles sont conçues pour vous aider à surmonter vos blocages,
						retrouver un équilibre émotionnel, et avancer vers vos objectifs
						personnels ou professionnels. <br />
						La durée et la fréquence des séances varient en fonction de vos
						besoins spécifiques. <br />
						Généralement, une séance dure environ 50 minutes.
					</p>
				</section>
				<section className="py-6 px-4 text-center bg-secondary">
					<h2 className="text-xl font-bold mb-4">Horaires et Tarifs</h2>
					<h3 className="text-l font-bold">Horaires</h3>
					<p className="pt-5">
						Je vous accueille sur rendez-vous, du lundi au vendredi de 9h à 18h
						et le samedi matin de 9h à 12h.
					</p>
					<h3 className="text-l font-bold mb-4">Tarifs</h3>
					<ul>
						<li>Séance individuelle : XX €</li>
						<li>Séance de couple : XX €</li>
						<li>Séance de groupe (minimum X personnes) : XX €</li>
					</ul>

					<p className="pt-5">
						Les séances peuvent se faire en cabinet ou en visioconférence, selon
						vos préférences.
						<br />
						Pour plus d’informations ou pour prendre rendez-vous, n’hésitez pas
						à me contacter via le formulaire en ligne ou par téléphone au [
						numéro].
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
				</section>
				<section className="py-6 px-4 text-center">
					<h2 className="text-xl font-bold mb-4 p-5">
						Trouvez facilement mon cabinet
					</h2>
					<p className="pt-5">
						Le cabinet est situé au cœur de [ville ou quartier], dans un espace
						calme et facilement accessible. <br />
						Vous pouvez consulter la carte ci-dessous pour trouver l’itinéraire
						le plus pratique depuis votre emplacement. <br />
						Un parking gratuit est disponible à proximité.
					</p>
				</section>
				<section className="py-6 px-4 text-center">
					<h2 className="text-xl font-bold mb-4 p-5">
						Ce que disent mes clients
					</h2>
					<p className="pt-5">
						La satisfaction de mes clients est au cœur de ma pratique. <br />
						Découvrez leurs témoignages ci-dessous :
					</p>
				</section>
			</main>
		</>
	);
}
