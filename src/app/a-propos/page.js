import Link from "next/link";
import Image from "next/image";
import SEO from "@/components/SEO";
import Button from "@/components/Button";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function APropos() {
	return (
		<>
			<SEO
				title="Psychopraticienne solutionniste à Saint-Germain-en-Laye | Sandra Bondon"
				description="Découvrez le parcours de Sandra Bondon, psychopraticienne solutionniste à Saint-Germain-en-Laye, et son approche thérapeutique centrée sur le corps, l’écoute et les ressources intérieures."
				keywords="psychopraticienne, thérapie brève, solutionniste, MOSAIC, hypnose, PNL, Saint-Germain-en-Laye, Sandra Bondon"
				author="Sandrine Cazenave"
			/>

			<main className="px-4 py-10">
				{/* Container */}
				<div className="max-w-5xl mx-auto">
					<h1 className="text-2xl font-bold uppercase text-center mb-10">
  					Psychopraticienne solutionniste à Saint-Germain-en-Laye
					</h1>
					<p className="text-center text-sm uppercase tracking-widest text-gray-500 mb-12">
  					À propos de moi
					</p>

					{/* Hero (mobile-first) */}
					<section className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-10 md:justify-start">						<div
  							className="
   							relative
   							w-[200px] h-[240px]
    						md:w-[260px] md:h-[320px]
    						lg:w-[300px] lg:h-[360px]
    						overflow-hidden
    						rounded-xl
    						md:rounded-s-full
    						shrink-0
  							"
	                    >
  							<Image
    						src="/images/sandra-bondon2.jpeg"
    						alt="Sandra Bondon, psychopraticienne"
    						fill
    						priority
							sizes="(min-width: 1024px) 300px, (min-width: 768px) 260px, 200px"
    						className="object-cover"
  							/>
						</div>

						<div className="w-full md:w-2/3 text-center md:text-left">
							<h2 className="font-bold text-xl text-center md:text-left">
								Sandra Bondon
							</h2>

							<p className="mt-3 text-center md:text-left">
								Psychopraticienne solutionniste à Saint-Germain-en-Laye.<br/>{" "}
								<strong>À vos côtés pour révéler vos ressources intérieures.</strong>
							</p>

							<blockquote className="mt-6 px-6 py-4 border-l-4 border-orange-400 bg-gray-50 italic rounded-md text-left">								<p>
									« Vous accompagner vers un équilibre émotionnel grâce à une approche
									bienveillante et profondément humaine. »
								</p>
							</blockquote>
						</div>
					</section>

					{/* Sections text */}
					<section className="mt-12 space-y-10">
						<section>
							<h3 className="mt-12 mb-4 text-xl font-semibold tracking-tight text-center lg:text-left lg:text-2xl">
								Introduction
							</h3>
							<p className="font-semibold mb-6">
  							Cette page présente mon parcours personnel et professionnel, ainsi que la
  							vision thérapeutique qui guide aujourd’hui mon accompagnement.
							</p>
							<div className="space-y-4 text-left leading-relaxed">
								<p>
									Depuis toujours, je suis animée par la conviction que{" "}
									<strong>les solutions se trouvent déjà en nous.</strong>
								</p>
								<p>
									Dès l’âge de 12 ans, je me passionne pour le développement
									personnel. Je lis les livres de la bibliothèque de ma mère,
									j’écris dans mon journal intime, et je découvre que{" "}
									<strong>les mots peuvent apaiser les maux.</strong>
								</p>
								<p>
									J’aime dire ce que je ressens… mais je me sens souvent incomprise.
									On me donne des conseils, alors que je voulais simplement{" "}
									<strong>être entendue et vue</strong>. Je ne le savais pas encore,
									mais tout cela allait façonner ma vocation.
								</p>
							</div>
						</section>

						<section>
							<h3 className="mt-12 mb-4 text-xl font-semibold tracking-tight text-center lg:text-left lg:text-2xl">
								Mon parcours vers la psychopraticienne solutionniste
							</h3>
							<div className="space-y-4 text-left leading-relaxed">
								<p>
									À 17 ans, naturellement tournée vers l’humain, je débute des
									études de psychologie après mon bac. Pourtant, je ressens le besoin
									d’entrer rapidement dans la vie active.
								</p>
								<p>
									Je travaille quelques mois, puis je me réoriente vers une école de
									communication : un cursus mêlant théorie et pratique qui me permet
									d’explorer différentes dimensions de la relation humaine.
								</p>
								<p>
									À la suite de mes études, la vie me conduit vers le domaine des{" "}
									<strong>ressources humaines</strong>. Je progresse, j’apprends,
									j’observe… jusqu’à devenir responsable RH dans une startup.
								</p>
								<p>
									Cette aventure renforce mon envie profonde :{" "}
									<strong>accompagner l’autre</strong>. Pendant plusieurs années, je
									poursuis dans le conseil RH, mais peu à peu, l’appel de
									l’accompagnement thérapeutique se fait plus fort.
								</p>
								<p>
									Puis survient un moment déterminant. Après un avortement, j’entame
									une psychothérapie qui durera 13 ans. Un espace précieux, neutre,
									où je peux me raconter, comprendre qui je suis et transformer ce
									qui demande à l’être. Cette thérapie me révèle, comme une{" "}
									<strong>chenille qui devient papillon.</strong>
								</p>
								<p>
									En 2020, je suis prête. Je bascule vers un nouveau monde :{" "}
									<strong>l’aide à la personne</strong>. Je me forme intensivement
									pour offrir un accompagnement complet et ajusté :
								</p>

								<ul className="list-disc pl-5 mx-auto w-fit text-left">
									<li>Relation d&apos;aide</li>
									<li>Coaching</li>
									<li>PNL</li>
									<li>Hypnose</li>
									<li>Psychopathologie</li>
									<li>MOSAIC® / EMDR solutionniste</li>
									<li>États du moi</li>
									<li>Psychopraticienne solutionniste</li>
								</ul>

								<p>
									Ce parcours, long et passionnant, est aujourd’hui au service d’un
									accompagnement sur mesure.
								</p>
							</div>
						</section>

						<section>
							<h3 className="mt-12 mb-4 text-xl font-semibold tracking-tight text-center lg:text-left lg:text-2xl">
								Ma méthode en quelques mots
							</h3>
							<p className="font-semibold mb-6">
  							Ma méthode repose sur une approche solutionniste expérientielle, centrée sur
  							le corps, les ressentis et les ressources déjà présentes en chaque personne.
							</p>
							<div className="space-y-4 text-left leading-relaxed">
								<p>
									Je suis psychopraticienne <strong>solutionniste</strong> : j’aide
									chaque personne à <strong>mettre en lumière</strong> la solution
									déjà présente en elle, en l’aidant à ressentir ce qui se passe dans
									son corps.
								</p>
								<p>
									Tout part du <strong>corps</strong>, avant même que le cerveau ne
									mette des mots sur ce qui est vécu. C’est en modifiant les
									sensations corporelles que l’on transforme durablement les anciens
									schémas.
								</p>

								<blockquote className="px-6 py-4 border-l-4 border-orange-400 bg-gray-50 italic text-left rounded-md">
									<p>
										« Ce que vous souhaitez vivre demain, vous allez commencer à le
										vivre aujourd’hui. »
									</p>
								</blockquote>

								<p>
									La thérapie solutionniste expérientielle est une approche profonde,
									efficiente, et brève : les premiers changements apparaissent souvent
									dans les 6 premiers mois. La durée d’un accompagnement varie selon
									chacun, entre 8 mois et 2 ans.
								</p>
							</div>
						</section>

						<section>
							<h3 className="mt-12 mb-4 text-xl font-semibold tracking-tight text-center lg:text-left lg:text-2xl">
								Pourquoi je fais ce métier
							</h3>
							<p className="font-semibold mb-6">
  							Être psychopraticienne est pour moi un engagement profondément humain, fondé
  							sur l’écoute, la présence et la confiance dans la capacité de chacun à évoluer.
							</p>
							<div className="space-y-4 text-left leading-relaxed">
								<p>
									Parce que je sais ce que c’est que de chercher un espace où l’on
									peut être vraiment entendu, sans jugement, sans conseils imposés.
								</p>
								<p>
									Parce que je crois profondément en la capacité de chacun à se
									transformer. Et parce que chaque personne que j’accompagne
									m’émerveille par ses prises de conscience, ses avancées, sa
									résilience.
								</p>
								<p>
									Aujourd’hui, j’accompagne des personnes de tous âges et de tous
									horizons, en tant que psychopraticienne solutionniste à Saint-Germain-en-Laye, et je les vois évoluer, se libérer, se reconstruire…
									parfois même se révéler totalement.
								</p>
							</div>
						</section>

						<section className="bg-gray-100 py-8 rounded-lg">							
							<h3 className="mt-12 mb-4 text-xl font-semibold tracking-tight text-center lg:text-left lg:text-2xl">
								Un message pour vous
							</h3>
							<div className="space-y-4 text-left leading-relaxed">
								<p>
									Vous possédez déjà en vous les ressources nécessaires pour avancer.
									Mon rôle est de vous aider à les reconnaître, à les ressentir et à
									les faire grandir — avec bienveillance, écoute et présence.
								</p>
								<p>
									Si vous ressentez qu’il est temps d’entamer un chemin vers vous-même,
									je serai heureuse de vous accompagner.
								</p>
								<p className="italic font-semibold">
									Tarif des séances : à partir de 80 €.
								</p>
							</div>

							<div className="mt-6 flex justify-center lg:justify-start">
								<Link href="/contact">
									<Button
										text="Me contacter"
										textColor="#2C254D"
										bgColor="#FFA500"
										hoverTextColor="#2C254D"
										hoverBgColor="#FFA500"
										className="mt-2"
									/>
								</Link>
							</div>
						</section>
					</section>
				</div>
			</main>
						<ScrollToTopButton />
			
		</>
	);
}