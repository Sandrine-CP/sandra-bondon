import Image from "next/image";
import Office from "../../../public/images/professionals.jpg";

export default function Professionals() {
	return (
		<section className="bg-slate-300">
			<div>
				<h2 className="text-2xl font-bold mb-4 text-center p-4">
					Solution pour vos collaborateurs
				</h2>
				<div>
					<h3 className="font-semibold text-center">Accompagner</h3>
					<div className="flex items-center">
						<p className="max-w-2xl mx-auto mb-8">
							Nous identifions ensemble vos besoins. <br />
							Nous pouvons travailler sur la gestion du changement, la charge
							mentale, la prévention du burn-out, le développement de carrière
							ou tout autre sujet qui permettra à vos collaborateurs de vivre
							pleinement et sereinement leur carrière.
						</p>
						<div>
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
			</div>
		</section>
	);
}
