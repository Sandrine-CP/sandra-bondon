import Image from "next/image";

import ImageCard from "@/components/ImageCard";
import stress from "../../../public/images/stress.jpg";

export default function CardsAnimation() {
	return (
		<>
			<div className="h-screen bg-[#303030]  pt-10 mb-10 px-10 grid grid-cols-3">
				<div>
					<ImageCard
						title="Burn Out"
						description="Syndrome d'épuisement professionnel, correspond à un « épuisement physique, émotionnel et mental qui résulte d'un investissement prolongé dans des situations de travail exigeantes sur le plan émotionnel» Haute Autorité de Santé (HAS)"
					/>
				</div>
				<div>
					<ImageCard title="Anxiété" description="Lorem ipsum" />
				</div>
				<div>
					<ImageCard title="Addiction" description="Lorem ipsum" />
				</div>
				<div>
					<ImageCard title="Phobie" description="Lorem ipsum" />
				</div>
				<div className="flex flex-col justify-center items-center">
					<h1 className="text-white m-4">
						Mal être, difficultés relationnelles
					</h1>
					<Image
						src={stress}
						alt="Homme en souffrance"
						width={200}
						height={200}
						className="rounded-full"
					/>
				</div>
				<div>
					<ImageCard title="Obsession" description="Lorem ipsum" />
				</div>
				<div>
					<ImageCard title="Traumatisme" description="Lorem ipsum" />
				</div>
				<div />
				<div>
					<ImageCard title="Charge Mentale" description="Lorem ipsum" />
				</div>
			</div>
		</>
	);
}
