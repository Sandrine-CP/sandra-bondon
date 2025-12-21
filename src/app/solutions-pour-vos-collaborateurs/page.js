// Organisation des imports
// React, hooks, librairies
import Image from "next/image";
// Bibliothèques tierces
// Composants parents
import SEO from "@/components/SEO";
// Composants enfants
// Utilitaires et helpers
// Styles et assets

export default function SolutionsPourVosCollaborateurs() {
	return (
		<>
			<SEO
				title="Accompagnement professionnel & coaching | Psychopraticienne solutionniste – Sandra Bondon"
				description="Accompagnement professionnel, coaching de cadres et soutien thérapeutique face au stress, burn-out, confiance en soi et TCA. Approche solutionniste et humaine."
				keywords="accompagnement professionnel, coaching de cadres, soutien thérapeutique, stress au travail, burn-out, confiance en soi, troubles du comportement alimentaire, approche solutionniste, psychopraticienne, gestion du changement"
				author="Sandrine Cazenave"
			/>
			<main>
				{/* Container */}
				<div className="max-w-5xl mx-auto px-4 py-10">
						<h1 className="text-2xl font-bold uppercase text-center m-6 p-5">
							Accompagnement professionnel et coaching
						</h1>
						<p className="text-center text-sm uppercase tracking-widest text-gray-500 mb-12">
  							Sandra Bondon | Psychopraticienne solutionniste 
						</p>
					{/* Section 1 : Hero : Intro et positionnement (mobile-first) */}
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
							src="/images/collaborateurs1.jpg"
							alt="Sandra Bondon, psychopraticienne"
							fill
							priority
							className="object-cover"
							/>
						</div>

						<div className="w-full md:w-2/3 text-center md:text-left">
							<h2 className="font-bold text-xl text-center md:text-left">
								Un accompagnement humain au service du monde professionnel
							</h2>

							<p className="mt-3 text-center md:text-left">
								En tant que praticienne en psychothérapie, j’accompagne les professionnels confrontés à des situations de stress, de surcharge émotionnelle ou de perte de repères dans leur environnement de travail.<br/>
								Ma pratique s’adresse aux cadres, managers, dirigeants, équipes et indépendants qui souhaitent retrouver un équilibre, renforcer leur posture professionnelle et traverser les périodes de changement avec plus de sérénité.
							</p>
						</div>
					</section>


				{/* Section 2: Accompagnement thérapeutique en contexte professionnel */}
				<section>
					<h3 className="mt-12 mb-4 text-xl font-semibold tracking-tight text-center lg:text-left lg:text-2xl">
						Accompagnement thérapeutique en contexte professionnel
					</h3>
					<div className="space-y-4 text-left leading-relaxed">
						<p>	
							Le monde professionnel peut être source de fortes tensions émotionnelles. Lorsqu’elles ne sont pas prises en compte, ces tensions peuvent conduire à :
						</p>
						<ul className="list-disc pl-5 space-y-1">
							<li>Stress chronique</li>
							<li>Burn-out</li>
							<li>Perte de confiance en soi</li>
							<li>Difficultés relationnelles</li>
							<li>Troubles du comportement alimentaire</li>
						</ul>
						<p>
						J’accompagne notamment les personnes confrontées à :
						</p>
						<ul className="list-disc pl-5 space-y-1">
							<li>Des situations de stress intense ou de surcharge émotionnelle</li>
							<li>Des périodes de transition professionnelle (changement de poste, réorganisation, etc.)</li>
							<li>Des difficultés relationnelles au sein de l’équipe ou avec la hiérarchie</li>
							<li>Un manque de confiance en soi ou une estime de soi fragilisée</li>
						</ul>
					</div>
				</section>
				{/* Section 3: Coaching & accompagnement des cadres et équipess */}
				<section>
					<h3 className="mt-12 mb-4 text-xl font-semibold tracking-tight text-center lg:text-left lg:text-2xl">
						Coaching & accompagnement des cadres et équipes
					</h3>
					<div className="space-y-4 text-left leading-relaxed">
						<p>
							Au-delà de la thérapie individuelle, je propose également un accompagnement orienté coaching, adapté aux enjeux professionnels.
						</p>
						<h4 className="text-lg font-semibold m-4 p-4">
							Coaching individuel
						</h4>
							<ul className="list-disc pl-5 space-y-1">
								<li>Coaching de vie</li>
								<li>Coaching en développement de carrière</li>
								<li>Gestion du changement</li>
								<li>Prise de parole en public</li>
								<li>Renforcement de la posture professionnelle</li>
							</ul>
						<h4 className="text-lg font-semibold m-4 p-4">
							Coaching de cadres et accompagnement collectif
						</h4>
							<ul className="list-disc pl-5 space-y-1">
								<li>Coaching de cadres</li>
								<li>Consolidation d’équipe</li>
								<li>Accompagnement des dynamiques relationnelles</li>
								<li>Soutien lors de périodes de transition ou de transformation</li>
							</ul>
						<p>
							Ces accompagnements visent à favoriser une meilleure compréhension de soi, une communication plus fluide et un positionnement professionnel plus aligné.
						</p>
					</div>
				</section>
				{/* Section 4: Approche solutionniste */}
				<section>
					<h3 className="mt-12 mb-4 text-xl font-semibold tracking-tight text-center lg:text-left lg:text-2xl">
						Une approche thérapeutique solutionniste
					</h3>
					<div className="space-y-4 text-left leading-relaxed">
					<p>
						Ma pratique thérapeutique repose sur une approche solutionniste, dans laquelle :
					</p>
					<blockquote className="mt-6 px-6 py-4 border-l-4 border-orange-400 bg-gray-50 italic rounded-md text-left">
						<p>
							« C’est vous qui décidez de votre changement. »
						</p>
					</blockquote >
					<p>
						Je vous accompagne pour mobiliser vos ressources, dépasser les blocages et avancer à votre rythme, dans une relation basée sur l’écoute, la confiance et la coopération.
					</p>
					<p>
						Je suis formée et certifiée aux approches suivantes :
					</p>
					<ul className="list-disc pl-5 space-y-1">
						<li>États du moi</li>
						<li>MOSAIC® / EMDR solutionniste</li>
						<li>PNL</li>
						<li>Relation d’aide</li>
					</ul>
					</div>
				</section>
				{/* Section 5: Thématiques accompagnées */}
				<section>
					<h3 className="mt-12 mb-4 text-xl font-semibold tracking-tight text-center lg:text-left lg:text-2xl">
						Objectifs de l’accompagnement
					</h3>
					<div className="space-y-4 text-left leading-relaxed">
						<p>
							L’accompagnement vise notamment à :
						</p>
						<ul className="list-disc pl-5 space-y-1">
							<li>Apaiser la charge émotionnelle liée au travail</li>
							<li>Retrouver confiance et stabilité</li>
							<li>Mieux gérer le stress et les transitions</li>
							<li>Renforcer les ressources personnelles et professionnelles</li>
							<li>Soutenir des changements durables et choisis</li>
						</ul>
					</div>
				</section>	
				{/* Section 6: Appel à l’action */}
				<section className="bg-gray-100 py-8 rounded-lg">
					<h3 className="mt-12 mb-4 text-xl font-semibold tracking-tight text-center lg:text-left lg:text-2xl">
						Échanger autour de votre situation professionnelle
					</h3>
					<div className="space-y-4 text-left leading-relaxed">
					<p>
						Chaque situation est unique.<br/>
						Je vous propose un premier échange afin de comprendre vos besoins et de définir ensemble l’accompagnement le plus adapté.					</p>
					</div>
				</section>	
				</div>
			</main>
		</>
	);
}
