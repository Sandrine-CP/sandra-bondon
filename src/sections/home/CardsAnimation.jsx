import ImageCard from "@/components/ImageCard";

export default function CardsAnimation() {
	return (
		<div className="bg-[#22223b] flex justify-center">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6 md:px-10 place-items-center">
				{/* Ligne 1 */}
				<div>
					<ImageCard
						title="Burn Out"
						imageSrc="/images/burnOut_chargeMentale_depression.jpg"
						imageAlt="Main qui coule dans l'océan"
						description="Épuisement émotionnel, mental et physique dû à une surcharge prolongée. Il affecte souvent les professionnels investis, jusqu’à remettre en question leur sens au travail."
					/>
				</div>
				<div>
					<ImageCard
						title="Phobie"
						imageSrc="/images/phobie.jpg"
						imageAlt="Toile d'araignée"
						description="Peur intense, irrationnelle et persistante d’un objet, d’une situation ou d’un contexte. Les phobies peuvent paralyser la vie quotidienne si elles ne sont pas prises en charge."
					/>
				</div>
				<div>
					<ImageCard
						title="Addiction"
						imageSrc="/images/ChargeMentale.png"
						imageAlt="Personne en souffrance"
						description="Perte de contrôle face à une substance ou un comportement. L’addiction agit comme une réponse à une souffrance émotionnelle, souvent enfouie ou non exprimée."
					/>
				</div>
				{/* Ligne 2 */}
				<div className="md:row-start-2 md:col-start-1">
					<ImageCard
						title="Traumatisme"
						imageSrc="/images/trauma.jpg"
						imageAlt="Personne repliée sur elle-même"
						description="Marque psychique profonde laissée par un événement vécu comme violent, injuste ou dangereux. Le traumatisme peut ressurgir longtemps après, sous forme d’angoisses, d’images ou de blocages."
					/>
				</div>
				<div
					className="flex flex-col justify-center items-center w-[280px] h-[180px] rounded-lg shadow-lg
    				sm:col-span-2 sm:col-start-1 sm:row-start-3
    				md:col-span-1 md:col-start-2 md:row-start-2"
				>
					<h1 className="text-white text-center text-2xl font-semibold">
						Mal être
						<br />
						Difficultés relationnelles
					</h1>
					<p className="text-white text-lg text-center mt-2">
						Une solution existe pour vous
					</p>
				</div>{" "}
				<div className="md:row-start-2 md:col-start-3">
					<ImageCard
						title="Charge Mentale"
						imageSrc="/images/bagages.webp"
						imageAlt="Esprit encombré"
						description="Saturation invisible liée à la gestion simultanée de tâches, pensées, responsabilités. Elle épuise sans qu’on s’en rende compte et impacte fortement la clarté d’esprit et la disponibilité émotionnelle."
					/>
				</div>
				{/* Ligne 3 */}
				<div className="md:row-start-3 md:col-start-1">
					<ImageCard
						title="Obsession"
						imageSrc="/images/obsession.jpg"
						imageAlt="Tête avec pensées"
						description="Pensées intrusives, récurrentes, souvent anxiogènes. Elles s’imposent sans contrôle, et peuvent provoquer un mal-être profond, voire altérer la qualité de vie."
					/>
				</div>
				<div className="md:row-start-3 md:col-start-3">
					<ImageCard
						title="Anxiété"
						imageSrc="/images/anxiete.jpg"
						imageAlt="Femme anxieuse"
						description="Inquiétude diffuse ou constante, parfois sans objet clair. L’anxiété agit comme une alarme permanente qui empêche la détente, la concentration, et le bien-être global."
					/>
				</div>
				<div className="md:row-start-3 md:col-start-2">
					<ImageCard
						imageSrc="/images/collaborateurs1.jpg"
						imageAlt="Personne échangeant dans un cadre professionnel"
						title="Accompagner ses collaborateurs"
						description="Soutenir la santé mentale en milieu professionnel : accompagner les équipes face au stress, au burnout, aux conflits relationnels ou à la perte de sens. Une intervention bienveillante pour restaurer l’équilibre individuel et collectif dans l’entreprise."
					/>
				</div>
			</div>
		</div>
	);
}
