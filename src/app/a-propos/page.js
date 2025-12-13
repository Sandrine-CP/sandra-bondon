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
					À Propos
				</h1>
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
					<div className="flex flex-col justify-top text-center">
						<h2 className="font-bold text-xl m-4">Sandra Bondon</h2>
						<p className=" mb-4">Psychopraticienne solutionniste. <br/> <strong>À vos côtés pour révéler vos ressources intérieures.</strong></p>
						<blockquote className="my-8 px-6 py-4 border-l-4 border-orange-400 bg-gray-50 italic text-left max-w-3xl mx-auto">
  							<p>
    						« Vous accompagner vers un équilibre émotionnel grâce à une approche bienveillante et profondément humaine.  »
  							</p>
						</blockquote>
					</div>
				</section>
					<h3 className="font-bold text-xl text-center m-4">Introduction</h3>
					<p className="text-center mb-4">
						Depuis toujours, je suis animée par la conviction que <strong>les solutions se trouvent déjà en nous.</strong><br/>
						Dès l’âge de 12 ans, je me passionne pour le développement personnel. <br/>
						Je lis les livres de la bibliothèque de ma mère, j’écris dans mon journal intime, et je découvre que <strong>les mots peuvent apaiser les maux.</strong><br/>
						J’aime dire ce que je ressens… mais je me sens souvent incomprise. On me donne des conseils, alors que je voulais simplement <strong>être entendue et vue</strong>.<br/>
						Je ne le savais pas encore, mais tout cela allait façonner ma vocation.
					</p>
				<section>
				</section>

				<section>
					<h3 className="font-bold text-xl text-center m-4">Mon parcours</h3>
					<p className="text-center mb-4">
						À 17 ans, naturellement tournée vers l’humain, je débute des études de psychologie après mon bac. <br/>
						Pourtant, je ressens le besoin d’entrer rapidement dans la vie active.<br/>
						Je travaille quelques mois, puis je me réoriente vers une école de communication : un cursus mêlant théorie et pratique qui me permet d’explorer différentes dimensions de la relation humaine.
					</p>
					<p className="text-center mb-4">
						À la suite de mes études, la vie me conduit vers le domaine des <strong>ressources humaines.</strong><br/>
						Je progresse, j’apprends, j’observe… jusqu’à devenir responsable RH dans une startup.<br/>
						C’est un tournant : je découvre la richesse de l’entreprise, mais surtout la complexité et la beauté de l’humain.
					</p>
					<p className="text-center mb-4">
						Cette aventure renforce mon envie profonde : <strong>accompagner l’autre.</strong><br/>
						Pendant plusieurs années, je poursuis dans le conseil RH, mais peu à peu, l’appel de l’accompagnement thérapeutique se fait plus fort.
					</p>
					<p className="text-center mb-4">
						Puis survient un moment déterminant.<br/>
						Après un avortement, j’entame une psychothérapie qui durera 13 ans.<br/>
						Un espace précieux, neutre, où je peux me raconter, comprendre qui je suis et transformer ce qui demande à l’être.<br/>
						Cette thérapie me révèle, comme une <strong>chenille qui devient papillon.</strong>
					</p>
					<p className="text-center mb-4">
						En 2020, je suis prête.<br/>
						Je bascule vers un nouveau monde : <strong>l’aide à la personne.</strong><br/>
						Je me forme intensivement pour offrir un accompagnement complet et ajusté :<br/>
					</p>
						<ul className="list-disc pl-5 mb-4 mx-auto w-fit text-left">
							<li>Relation d&apos;aide</li>
							<li>Coaching</li>
							<li>PNL</li>
							<li>Hypnose</li>
							<li>Psychopathologie</li>
							<li>MOSAIC® / EMDR solutionniste</li>
							<li>États du moi</li>
							<li>Psychopraticienne solutionniste</li>
						</ul>
					<p className="text-center mb-4">
						Ce parcours, long et passionnant, est aujourd’hui au service d’un accompagnement sur mesure.
					</p>
					<h3 className="font-bold text-xl text-center m-4">
						Ma méthode en quelques mots
					</h3>
					<p className="text-center mb-4">
						Je suis psychopraticienne <strong>solutionniste</strong> :<br/>
						j’aide chaque personne à <strong>mettre en lumière</strong> la solution déjà présente en elle, en l’aidant à ressentir ce qui se passe dans son corps.
					</p>
					<p className="text-center mb-4">
						Tout part du <strong>corps</strong>, avant même que le cerveau ne mette des mots sur ce qui est vécu.<br/>
						C’est en modifiant les sensations corporelles que l’on transforme durablement les anciens schémas.
					</p>
					<blockquote className="my-8 px-6 py-4 border-l-4 border-orange-400 bg-gray-50 italic text-left max-w-3xl mx-auto">
  						<p>
    						« Ce que vous souhaitez vivre demain, vous allez commencer à le vivre aujourd’hui. »
  						</p>
					</blockquote>
					<p className="text-center mb-4">
						La thérapie solutionniste expérientielle est une approche profonde, efficient, et brève :<br/>
						les premiers changements apparaissent souvent dans les 6 premiers mois.
						La durée d’un accompagnement varie selon chacun, entre 8 mois et 2 ans.
					</p>
					<h3 className="font-bold text-xl text-center m-4">
						Pourquoi je fais ce métier
					</h3>
					<p className="text-center mb-4">
						Parce que je sais ce que c’est que de chercher un espace où l’on peut être vraiment entendu, sans jugement, sans conseils imposés.<br/>
						Parce que je crois profondément en la capacité de chacun à se transformer.<br/>
						Et parce que chaque personne que j’accompagne m’émerveille par ses prises de conscience, ses avancées, sa résilience.
					</p>
					<p className="text-center mb-4">
						Aujourd’hui, j’accompagne des personnes de tous âges et de tous horizons, et je les vois évoluer, se libérer, se reconstruire… parfois même se révéler totalement.<br/>
						Être psychopraticienne est pour moi une vocation, un engagement à offrir le meilleur de moi-même pour aider l’autre à révéler ses ressources intérieures.
					</p>
				</section>
				<section className="bg-gray-100 p-6 m-4 rounded-lg">
					<h3 className="font-bold text-xl text-center m-4">Un message pour vous</h3>
					<p className="text-center mb-4">
						Vous possédez déjà en vous les ressources nécessaires pour avancer.<br/>
						Mon rôle est de vous aider à les reconnaître, à les ressentir et à les faire grandir — avec bienveillance, écoute et présence.
					</p>
					<p className="text-center mb-4">
						Si vous ressentez qu’il est temps d’entamer un chemin vers vous-même, je serai heureuse de vous accompagner.
					</p>
					<p className="text-center italic font-semibold">
						Tarif des séances : à partir de 80 €.
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
