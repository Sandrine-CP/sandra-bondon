import Image from "next/image";
import Office from "../../../public/images/professionals.jpg";
import Button from "@/components/Button";

export default function Professionals() {
	return (
		<section className="bg-secondary py-16 px-4">
			<div>
				<h2 className="text-2xl font-bold mb-8 text-center">
					Solution pour vos collaborateurs
				</h2>
				<div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
					{/* Bloc gauche : H3 et paragraphe */}
					<div className="flex flex-col justify-center items-center text-center lg:w-1/2">
						<h3 className="font-semibold mb-4">Accompagner</h3>
						<p className="leading-relaxed">
							Nous identifions ensemble vos besoins. <br />
							Nous pouvons travailler sur la gestion du changement, la charge
							mentale, la prévention du burn-out, le développement de carrière
							ou tout autre sujet qui permettra à vos collaborateurs de vivre
							pleinement et sereinement leur carrière.
						</p>
					</div>

					{/* Bloc droit : Image */}
					<div className="flex justify-center items-center lg:w-1/2">
						<Image
							src={Office}
							alt="Personnes travaillant dans un bureau"
							width={400}
							height={300}
							className="rounded-lg shadow-lg"
						/>
					</div>
				</div>
			</div>
			<div className="text-center mt-8">
				<Button
					text="Voir plus"
					textColor="#2C254D"
					bgColor="#FFA500"
					hoverTextColor="#2C254D"
					hoverBgColor="#FFA500"
					className="mt-6"
				/>
			</div>
		</section>
	);
}
