import ImageCard from "@/components/ImageCard";
import HomeSolutionCard from "@/components/HomeSolutionCard";

export default function HomeCardsAnimation() {
	return (
		<div className="bg-[#22223b] flex justify-center">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 md:px-10 place-items-center max-w-[1300px] mx-auto">
				<div>
					<ImageCard
						title="Phobie"
						imageSrc="/images/home/phobie-peur-gestion-emotions.webp"
						imageAlt="Illustration de la phobie et de la gestion des peurs et émotions"
						description="Peur intense, irrationnelle et persistante d’un objet, d’une situation ou d’un contexte. Les phobies peuvent paralyser la vie quotidienne si elles ne sont pas prises en charge."
					/>
				</div>
				<div>
					<ImageCard
						title="Burn Out"
						imageSrc="/images/home/burnout-epuisement-mental.webp"
						imageAlt="Illustration du burn out et de l'épuisement mental lié au stress"
						description="Épuisement émotionnel, mental et physique dû à une surcharge prolongée. Il affecte souvent les professionnels investis, jusqu’à remettre en question leur sens au travail."
					/>
				</div>
				<div>
					<ImageCard
						title="Addiction"
						imageSrc="/images/home/addiction-liberation-apaisement.webp"
						imageAlt="Illustration de l'addiction et du chemin vers l'apaisement et la libération"
						description="Perte de contrôle face à une substance ou un comportement. L’addiction agit comme une réponse à une souffrance émotionnelle, souvent enfouie ou non exprimée."
					/>
				</div>
				<div className="lg:row-start-2 lg:col-start-1">
					<ImageCard
						title="Traumatisme"
						imageSrc="/images/home/traumatisme-therapie-liberation.webp"
						imageAlt="Illustration du traumatisme psychique et du processus de libération émotionnelle"
						description="Marque psychique profonde laissée par un événement vécu comme violent, injuste ou dangereux. Le traumatisme peut ressurgir longtemps après, sous forme d’angoisses, d’images ou de blocages."
					/>
				</div>
				{/* <div
					className="flex flex-col justify-center items-center w-[280px] h-[180px] rounded-lg shadow-lg
					sm:col-span-2 sm:col-start-1 sm:row-start-3
					lg:col-span-1 lg:col-start-2 lg:row-start-2 mx-auto"
				>
					<p className="text-secondary text-center text-2xl font-semibold">
						Dans ma Vie personnelle<br/>dans ma vie de famille<br/>dans ma vie professionnelle
					</p>
					<p className="text-secondary text-lg text-center mt-2">
						Une solution existe pour vous
					</p>
				</div>{" "} */}
							
				{/* Card centrale avec CTA solutions-pour-vous au hover */}
				<div
				className="
				sm:col-span-2 sm:col-start-1 sm:row-start-3
				lg:col-span-1 lg:col-start-2 lg:row-start-2
				mx-auto
				"
				>
					<HomeSolutionCard />
				</div>
				<div className="lg:row-start-2 lg:col-start-3">
					<ImageCard
						title="Charge Mentale"
						imageSrc="/images/home/charge-mentale-surcharge-esprit.webp"
						imageAlt="Illustration de la charge mentale et de la surcharge de l'esprit"
						description="Saturation invisible liée à la gestion simultanée de tâches, pensées, responsabilités. Irritabilité souvent présente, elle épuise sans qu’on s’en rende compte et impacte fortement la clarté d’esprit et la disponibilité émotionnelle."
					/>
				</div>
				<div className="lg:row-start-3 lg:col-start-1">
					<ImageCard
						title="Obsession"
						imageSrc="/images/home/obsession-pensees-intrusives.webp"
						imageAlt="Illustration des pensées obsessionnelles et intrusives"
						description="Pensées intrusives, récurrentes, souvent anxiogènes. Elles s’imposent sans contrôle, et peuvent provoquer un mal-être profond, voire altérer la qualité de vie."
					/>
				</div>
				<div className="lg:row-start-3 lg:col-start-3">
					<ImageCard
						title="Anxiété"
						imageSrc="/images/home/anxiete-stress-apaisement.webp"
						imageAlt="Illustration de l'anxiété et du stress avec recherche d'apaisement"
						description="Inquiétude diffuse ou constante, parfois sans objet clair. L’anxiété agit comme une alarme permanente qui empêche la détente, la concentration, et le bien-être global."
					/>
				</div>
				<div className="lg:row-start-3 lg:col-start-2">
					<ImageCard
						title="Troubles du comportement alimentaire"
						imageSrc="/images/home/troubles-comportement-alimentaire.webp"
						imageAlt="Illustration des troubles du comportement alimentaire"
						imageClassName="object-contain p-2 bg-[#F8F5F2]"
						description="Relation difficile à l’alimentation, au poids et à l’image corporelle : restriction, compulsions, boulimie, hyperphagie, dysmorphophobie."
					/>
				</div>			
				</div>
		</div>
	);
}
