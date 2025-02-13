import Image from "next/image";
import ImageCard from "@/components/ImageCard";
import stress from "../../../public/images/2-addiction.webp";

export default function CardsAnimation() {
	return (
		<>
			{/* Conteneur flex centré */}
			<div className="h-screen bg-black flex justify-center">
				{/* Grid avec centrage */}
				<div className="grid grid-cols-3 gap-10 pt-10 px-10 place-items-center">
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
							imageSrc="/images/3-trauma.webp"
							imageAlt="Personne repliée sur elle-même"
							title="Traumatisme"
							description="Lorem ipsum"
						/>
					</div>
					<div>
						<ImageCard
							imageSrc="/images/6-addiction2.webp"
							imageAlt="Personne qui fume"
							title="Addiction"
							description="Lorem ipsum"
						/>
					</div>
					<div>
						<ImageCard
							imageSrc="/images/1-phobie.webp"
							imageAlt="Toile d'araignée"
							title="Phobie"
							description="Lorem ipsum"
						/>
					</div>

					{/* Conteneur central ajusté */}
					<div className="flex flex-col justify-center items-center w-[280px] h-[180px] rounded-lg shadow-lg">
						<h1 className="text-secondary text-center text-lg font-semibold">
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
						<p className="text-secondary text-sm text-center mt-2">
							Une solution existe pour vous
						</p>
					</div>

					<div>
						<ImageCard
							imageSrc="/images/5-obsession.webp"
							imageAlt="Tête de profil avec pensées noires"
							title="Obsession"
							description="Lorem ipsum"
						/>
					</div>
					<div />
					<div>
						<ImageCard
							imageSrc="/images/7-anxiete.webp"
							imageAlt="Femme anxieuse"
							title="Anxiété"
							description="Lorem ipsum"
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
