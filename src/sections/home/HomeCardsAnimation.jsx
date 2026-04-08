import ImageCard from "@/components/ImageCard";

export default function HomeCardsAnimation() {
	return (
		<div className="bg-[#22223b] flex justify-center">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 md:px-10 place-items-center max-w-[1300px] mx-auto">
				<div>
					<ImageCard
						title="Phobie"
						imageSrc="/images/phobie_flou.webp"
						imageAlt="XX"
						description="Peur intense, irrationnelle et persistante d’un objet, d’une situation ou d’un contexte. Les phobies peuvent paralyser la vie quotidienne si elles ne sont pas prises en charge."
					/>
				</div>
				<div>
					<ImageCard
						title="Burn Out"
						imageSrc="/images/burnout_card.webp"
						imageAlt="XX"
						description="Épuisement émotionnel, mental et physique dû à une surcharge prolongée. Il affecte souvent les professionnels investis, jusqu’à remettre en question leur sens au travail."
					/>
				</div>
				<div>
					<ImageCard
						title="Addiction"
						imageSrc="/images/sortie_addiction.webp"
						imageAlt="XX"
						description="Perte de contrôle face à une substance ou un comportement. L’addiction agit comme une réponse à une souffrance émotionnelle, souvent enfouie ou non exprimée."
					/>
				</div>
				<div className="lg:row-start-2 lg:col-start-1">
					<ImageCard
						title="Traumatisme"
						imageSrc="/images/trauma2.webp"
						imageAlt="XX"
						description="Marque psychique profonde laissée par un événement vécu comme violent, injuste ou dangereux. Le traumatisme peut ressurgir longtemps après, sous forme d’angoisses, d’images ou de blocages."
					/>
				</div>
				<div
					className="flex flex-col justify-center items-center w-[280px] h-[180px] rounded-lg shadow-lg
					sm:col-span-2 sm:col-start-1 sm:row-start-3
					lg:col-span-1 lg:col-start-2 lg:row-start-2 mx-auto"
				>
					<h1 className="text-secondary text-center text-2xl font-semibold">
						Mal être
						<br />
						Difficultés relationnelles
					</h1>
					<p className="text-secondary text-lg text-center mt-2">
						Une solution existe pour vous
					</p>
				</div>{" "}
				<div className="lg:row-start-2 lg:col-start-3">
					<ImageCard
						title="Charge Mentale"
						imageSrc="/images/ChargeMentale2.webp"
						imageAlt="XX"
						description="Saturation invisible liée à la gestion simultanée de tâches, pensées, responsabilités. Elle épuise sans qu’on s’en rende compte et impacte fortement la clarté d’esprit et la disponibilité émotionnelle."
					/>
				</div>
				<div className="lg:row-start-3 lg:col-start-1">
					<ImageCard
						title="Obsession"
						imageSrc="/images/obsession_card.webp"
						description="Pensées intrusives, récurrentes, souvent anxiogènes. Elles s’imposent sans contrôle, et peuvent provoquer un mal-être profond, voire altérer la qualité de vie."
					/>
				</div>
				<div className="lg:row-start-3 lg:col-start-3">
					<ImageCard
						title="Anxiété"
						imageSrc="/images/anxiete2.webp"
						imageAlt="XX"
						description="Inquiétude diffuse ou constante, parfois sans objet clair. L’anxiété agit comme une alarme permanente qui empêche la détente, la concentration, et le bien-être global."
					/>
				</div>
				<div className="lg:row-start-3 lg:col-start-2">
					<ImageCard
						imageSrc="/images/accompagner_collaborateurs.webp"
						imageAlt="XX"
						title="Accompagner ses collaborateurs"
						description="Soutenir la santé mentale en milieu professionnel : accompagner les équipes face au stress, au burnout, aux conflits relationnels ou à la perte de sens. Une intervention bienveillante pour restaurer l’équilibre individuel et collectif dans l’entreprise."
					/>
				</div>
			</div>
		</div>
	);
}
