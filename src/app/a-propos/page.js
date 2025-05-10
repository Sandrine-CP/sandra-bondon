// Organisation des imports
// React, hooks, librairies
import Link from "next/link";
import Image from "next/image";
// Bibliothèques tierces
// Composants parents
import SEO from "@/components/SEO";
import Button from "@/components/Button";
// Composants enfants
// Utilitaires et helpers
// Styles et assets
import Sandra from "@../../../public/images/sandra-bondon2.jpeg";

export default function APropos() {
	return (
		<>
			<SEO
				title="Accueil - Sandra Bondon"
				description="Site vitrine de Sandra Bondon, psychopraticienne spécialisée en hypnose, PNL et méthode MOSAIC®."
				keywords="thérapie, hypnose, MOSAIC, burn out, anxiété, Sandra Bondon"
				author="Sandrine Cazenave"
			/>
			<main>
				<h1 className="text-2xl font-bold uppercase text-center m-6 p-5">
					A Propos
				</h1>

				<section className="flex flex-row justify-center items-center mb-24">
					<div>
						<h2 className="text-xl font-bold text-center">
							Page en cours de construction
						</h2>
					</div>
				</section>
				<section className="flex flex-row justify-center lg:flex-row m-2 gap-6">
					<div className="flex flex-row lg:flex-row m-2">
						<Image
							src={Sandra}
							alt="Sandra Bondon, psychopraticienne"
							width={190}
							height={200}
							className="rounded-s-full"
						/>
					</div>
					<div className="flex flex-col justify-center items-center">
						<h3 className="font-bold text-center m-4">Sandra Bondon</h3>
						<p className="text-center mb-4">Présentation brève.</p>
					</div>
				</section>
				<section>
					<h3 className="font-bold text-center m-4">Introduction</h3>
					<p className="text-center mb-4">
						phrase engageante sur ta mission : “Vous accompagner vers un
						équilibre émotionnel grâce à une approche bienveillante et adaptée.”
					</p>
				</section>

				<section>
					<h3 className="font-bold text-center m-4">Mon parcours</h3>
					<p className="text-center mb-4">
						résumé professionnel et académique, enrichi d’un récit personnel
					</p>
					<h3 className="font-bold text-center m-4">
						Ma méthode en quelques mots
					</h3>
					<p className="text-center mb-4">
						Une explication brève pour compléter, mais ne pas répéter, la page
						Thérapies/Solution pour vous.
					</p>
					<h3 className="font-bold text-center m-4">
						Pourquoi je fais ce métier
					</h3>
					<p className="text-center mb-4">
						Une anecdote ou un témoignage authentique.
					</p>
					<h3 className="font-bold text-center m-4">Un message pour vous</h3>
					<p className="text-center mb-4">
						Une note chaleureuse et inspirante pour les visiteurs.
					</p>
				</section>
				<Link
					href="/contact"
					className="flex flex-grow justify-center items-center text-center m-4"
				>
					<Button
						text="Me contacter"
						textColor="#2C254D"
						bgColor="#FFA500"
						hoverTextColor="#2C254D"
						hoverBgColor="#FFA500"
						className="mt-6"
					/>
				</Link>
			</main>
		</>
	);
}
