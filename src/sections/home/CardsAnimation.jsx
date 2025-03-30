import Image from "next/image";
import ImageCard from "@/components/ImageCard";
import stress from "../../../public/images/2-addiction.webp";

export default function CardsAnimation() {
	return (
		<>
			{/* Conteneur flex centré */}
			<div className="h-screen bg-[#22223b] flex justify-center">
				{/* Grid avec centrage */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6 md:px-10 md:pt-10place-items-center">
					{" "}
					<div>
						<ImageCard
							imageSrc="/images/4-burnout.webp"
							imageAlt="Main qui coule dans l'océan"
							title="Burn Out"
							description="Epuisement physique, émotionnel et mental qui résulte d'un investissement prolongé dans des situations de travail exigeantes sur le plan émotionnel-Haute Autorité de Santé (HAS)"
						/>
					</div>
					<div>
						<ImageCard
							imageSrc="/images/1-phobie.webp"
							imageAlt="Toile d'araignée"
							title="Phobie"
							description="Troubles anxieux qui se manifestent par une crainte intense, persistante, et gênante, focalisée sur un objet précis ou sur un type de situation bien défini."
						/>
					</div>
					<div>
						<ImageCard
							imageSrc="/images/2-addiction.webp"
							imageAlt="Personne en souffrance"
							title="Dépendance / Addiction"
							description="Une addiction est une dépendance à une substance ou à une activité, avec des conséquences néfastes sur la santé de la personne affectée. Elle peut être favorisée par des facteurs environnementaux ou liés à l'individu."
						/>
					</div>
					<div>
						<ImageCard
							imageSrc="/images/3-trauma.webp"
							imageAlt="Personne repliée sur elle-même"
							title="Traumatisme"
							description="Le psychotraumatisme est l'ensemble des mécanismes de sauvegarde d'ordre psychologique, neurobiologique et physiologique qui peuvent se mettre en place à la suite d'un ou de plusieurs évènements générant une charge émotionnelle non contrôlée"
						/>
					</div>
					{/* Conteneur central ajusté */}
					<div className="flex flex-col justify-center items-center w-[280px] h-[180px] rounded-lg shadow-lg">
						<h1 className="text-secondary text-center text-2xl font-semibold">
							Mal être
							<br />
							Difficultés relationnelles
						</h1>
						{/* <Image
							src={stress}
							alt="Homme en souffrance"
							width={250}
							height={250}
							className="rounded-[10px]"
						/> */}
						<p className="text-secondary text-lg text-center mt-2">
							Une solution existe pour vous
						</p>
					</div>
					<div>
						<ImageCard
							imageSrc="/images/5-obsession.webp"
							imageAlt="Tête de profil avec pensées noires"
							title="Obsession"
							description="Pensées dérangeantes, répétitives et incontrôlables causant une forte anxiété."
						/>
					</div>
					<div />
					<div>
						<ImageCard
							imageSrc="/images/7-anxiete.webp"
							imageAlt="Femme anxieuse"
							title="Anxiété"
							description="Trouble émotionnel se traduisant par un sentiment indéfinissable d'insécurité."
						/>
					</div>
					{/* <div>
						<ImageCard title="Charge Mentale" description="Lorem ipsum" />
					</div> */}
				</div>
			</div>
		</>
	);
}
