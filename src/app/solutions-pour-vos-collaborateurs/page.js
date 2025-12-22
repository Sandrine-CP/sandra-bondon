import Image from "next/image";
import SEO from "@/components/SEO";

export default function SolutionsPourVosCollaborateurs() {
	return (
		<>
			<SEO
				title="Business coach & accompagnement professionnel | Sandra Bondon (approche solutionniste)"
				description="Business coach et psychopraticienne solutionniste : coaching de cadres dirigeants, synergie d’équipe, posture professionnelle, gestion du stress, burn-out, confiance en soi. Approche expérientielle (MOSAIC®/EMDR, PNL, hypnose)."
				keywords="business coach, coaching cadres dirigeants, coaching professionnel, synergie d’équipe, procrastination, posture professionnelle, stress, burn-out, confiance en soi, psychopraticienne solutionniste, MOSAIC, EMDR solutionniste, PNL, hypnose, TCA, traumatismes"
				author="Sandrine Cazenave"
			/>

			<main>
				<div className="max-w-5xl mx-auto px-4 py-10">
					<h1 className="text-2xl font-bold uppercase text-center mb-4">
						Accompagnement professionnel et coaching
					</h1>

					<p className="text-center text-sm uppercase tracking-widest text-gray-500 mb-8">
						Sandra Bondon | Psychopraticienne solutionniste & Business Coach
					</p>

					{/* Chapeau SEO (résumé page) */}
					<p className="text-center font-semibold mb-12">
						Il n’y a pas de hasard, tout est possible. Je vous accompagne, en individuel ou en
						collectif, pour vous reconnecter à vous-même, retrouver du sens et mobiliser vos
						ressources — grâce à une approche orientée solutions et expériences.
					</p>

					{/* Section 1 : Hero */}
					<section className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-10 md:justify-start">
						<div
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
								src="/images/collaborateurs1.jpg"
								alt="Accompagnement professionnel et coaching avec Sandra Bondon"
								fill
								priority
								className="object-cover"
							/>
						</div>

						<div className="w-full md:w-2/3 text-center md:text-left">
							<h2 className="font-bold text-xl text-center md:text-left">
								C’est vous qui décidez de votre changement
							</h2>

							<p className="mt-3 text-center md:text-left">
								Je vous accompagne dans votre évolution avec une approche{" "}
								<strong>solutionniste expérientielle</strong>. L’objectif : vivre dès
								aujourd’hui l’expérience que vous souhaitez pour demain, afin de libérer les
								tensions, apaiser le mental et retrouver vos ressources.
							</p>

							<ul className="mt-4 list-disc pl-5 space-y-1 text-left">
								<li>Oser s’affirmer</li>
								<li>Donner du sens à sa vie et à son engagement professionnel</li>
								<li>Trouver sa bonne posture</li>
							</ul>
						</div>
					</section>

					{/* Section 2 : Pro — Business Coach */}
					<section>
						<h3 className="mt-12 mb-4 text-xl font-semibold tracking-tight text-center lg:text-left lg:text-2xl">
							Pro : Business Coach (cadres dirigeants, managers, équipes)
						</h3>

						<div className="space-y-4 text-left leading-relaxed">
							<p className="font-semibold">
								Coaching professionnel orienté performance durable, posture et relations :
								retrouver de la clarté, gagner en efficacité et créer une dynamique d’équipe
								saine.
							</p>

							<ul className="list-disc pl-5 space-y-1">
								<li>Trouver vos ressources et renforcer votre posture</li>
								<li>Dompter la procrastination (organisation, priorisation, engagement)</li>
								<li>Créer la synergie d’équipe et fluidifier la communication</li>
								<li>Harmoniser les esprits pour gagner en efficacité</li>
								<li>Travailler la responsabilité individuelle</li>
								<li>Accompagner une reprise d’activité ou une transition</li>
								<li>Mettre en perspective savoir, compétences et comportements pour objectiver</li>
							</ul>
						</div>
					</section>

					{/* Section 3 : Particulier — Coaching */}
					<section>
						<h3 className="mt-12 mb-4 text-xl font-semibold tracking-tight text-center lg:text-left lg:text-2xl">
							Particulier : Coaching (confiance, estime, émotions)
						</h3>

						<div className="space-y-4 text-left leading-relaxed">
							<p>
								Un accompagnement pour reprendre confiance, sortir de schémas toxiques et
								retrouver de l’élan. L’objectif : apprendre à s’écouter, se respecter, et
								avancer à votre rythme.
							</p>

							<ul className="list-disc pl-5 space-y-1">
								<li>Re-gagner en confiance et consolider l’estime de soi</li>
								<li>Développer un état d’esprit plus optimiste et soutenant</li>
								<li>Se défaire de pensées toxiques et adopter des pensées harmonieuses</li>
								<li>Comprendre son fonctionnement pour mieux gérer ses émotions</li>
								<li>Trouver ses ressources intérieures et les activer</li>
								<li>Retrouver du dynamisme et de l’énergie</li>
								<li>Devenir conscient de son potentiel et l’améliorer</li>
							</ul>
						</div>
					</section>

					{/* Section 4 : Psychopraticienne — thématiques */}
					<section>
						<h3 className="mt-12 mb-4 text-xl font-semibold tracking-tight text-center lg:text-left lg:text-2xl">
							Psychopraticienne : accompagnement thérapeutique
						</h3>

						<div className="space-y-4 text-left leading-relaxed">
							<p>
								J’accompagne les personnes confrontées à des difficultés émotionnelles ou
								comportementales, notamment :
							</p>

							<ul className="list-disc pl-5 space-y-1">
								<li>Anxiété, phobie, burn-out, obsession</li>
								<li>Traumatismes</li>
								<li>Addictions et TCA (anorexie, boulimie, hyperphagie)</li>
								<li>Hypnose de régression (selon la situation)</li>
							</ul>
						</div>
					</section>

					{/* Section 5 : Approche solutionniste (MOSAIC/EMDR, PNL, hypnose) */}
					<section>
						<h3 className="mt-12 mb-4 text-xl font-semibold tracking-tight text-center lg:text-left lg:text-2xl">
							Une approche solutionniste expérientielle
						</h3>

						<div className="space-y-4 text-left leading-relaxed">
							<blockquote className="mt-2 px-6 py-4 border-l-4 border-orange-400 bg-gray-50 italic rounded-md text-left">
								<p>« C’est vous qui décidez de votre changement. »</p>
							</blockquote>

							<p>
								Mon approche vise à faire du bien au mental, soulager et libérer les tensions,
								et surtout <strong>trouver vos ressources</strong>. Nous avançons ensemble,
								dans un cadre bienveillant, concret et orienté résultat.
							</p>

							<p className="font-semibold">Je suis formée et certifiée en :</p>
							<ul className="list-disc pl-5 space-y-1">
								<li>MOSAIC® / EMDR solutionniste</li>
								<li>PNL</li>
								<li>Hypnose</li>
								<li>États du moi</li>
								<li>Relation d’aide</li>
							</ul>
						</div>
					</section>

					{/* Section 6 : CTA */}
					<section className="bg-gray-100 py-8 rounded-lg mt-12">
						<h3 className="mb-4 text-xl font-semibold tracking-tight text-center lg:text-left lg:text-2xl">
							Échanger autour de votre situation
						</h3>

						<div className="space-y-4 text-left leading-relaxed">
							<p>
								Chaque situation est unique. Je vous propose un premier échange pour clarifier
								vos besoins et définir ensemble l’accompagnement le plus adapté (pro ou
								particulier).
							</p>
						</div>
					</section>
				</div>
			</main>
		</>
	);
}