// Organisation des imports
// React, hooks, librairies
// Bibliothèques tierces
// Composants parents
// Composants enfants
import ImageCard from "@/components/ImageCard";
// Utilitaires et helpers
// Styles et assets

export default function TherapiesCardsAnimation() {
	return (
		<div className="bg-[#22223b] flex justify-center mt-4 pt-20 mb-8">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 md:px-10 place-items-center max-w-[1300px] mx-auto">
				{/* card 1 */}
				<div>
					<ImageCard
						imageSrc="/images/therapies/pnl-programmation-neurolinguistique.webp"
						imageAlt="Illustration de la programmation neurolinguistique (PNL) pour améliorer la communication et dépasser les blocages"
						title="PNL"
						description="Approche centrée sur la communication et les mécanismes inconscients pour dépasser blocages et schémas limitants."
					/>
				</div>
				{/* card 2 */}
				<div>
					<ImageCard
						imageSrc="/images/therapies/hypnose-ericksonienne-etat-modifie-conscience.webp"
						imageAlt="Illustration de l'hypnose ericksonienne et de l'état modifié de conscience"
						title="Hypnose ericksonienne"
						description="Hypnose douce et non directive permettant d’accéder à vos ressources internes pour dépasser vos blocages."
					/>
				</div>
				{/* card 3 */}
				<div>
					<ImageCard
						imageSrc="/images/therapies/therapie-mosaic.webp"
						imageAlt="Illustration de la méthode MOSAIC® et du processus de transformation émotionnelle"
						title="MOSAIC®"
						description="Méthode innovante utilisant des stimulations bilatérales pour favoriser une transformation profonde, durable et centrée sur la solution."
					/>
				</div>
				{/* card 3 */}
				<div>
					<ImageCard
						imageSrc="/images/therapies/therapie-breve-parcours-solution.webp"
						imageAlt="Illustration de la thérapie brève orientée vers la résolution de problèmes"
						title="Thérapie brève"
						description="Approche ciblée et orientée solution, pour avancer rapidement face à une difficulté précise."
					/>
				</div>
				{/* card 4-Title */}
				<div
					className="flex flex-col justify-center items-center w-[280px] h-[180px] rounded-lg shadow-lg
					sm:col-span-2 sm:col-start-1 sm:row-start-3
					lg:col-span-1 lg:col-start-2 lg:row-start-2 mx-auto"
				>
					<h3 className="text-secondary text-center text-2xl font-semibold">
						Pour un accompagnement
						<br />
						personnalisé
					</h3>
				</div>{" "}
				{/* card 5 */}
				<div>
					<ImageCard
						imageSrc="/images/therapies/therapie-etatsDuMoi-ESTI.webp"
						imageAlt="Illustration de la thérapie des états du Moi et de l'accompagnement des traumatismes"
						title="Thérapie des états du Moi® (ESTI)"
						description="Modèle innovant d’aide psychologique, reconnu comme l’un des plus efficient dans l’accompagnement des traumatismes et des troubles somatiques ou psychosomatiques."
					/>
				</div>
				{/* card 6 */}
				<div>
					<ImageCard
						imageSrc="/images/therapies/therapie-couple-accompagnement-cabinet.webp"
						imageAlt="Illustration de la thérapie de couple dans un cadre d'accompagnement en cabinet"
						title="Thérapie de couple"
						description="Un espace pour mieux se comprendre, apaiser les tensions et retrouver une relation plus sereine."
					/>
				</div>
				{/* card 7 */}
				<div>
					<ImageCard
						imageSrc="/images/therapies/therapie-groupe.webp"
						imageAlt="Illustration de la thérapie de groupe et du soutien collectif"
						title="Thérapie de groupe"
						description="Un cadre d’échange et de soutien pour partager, se sentir compris et avancer ensemble."
					/>
				</div>
				{/* card 8 */}
				<div>
					<ImageCard
						imageSrc="/images/therapies/therapie-individuelle-adulte-ado-enfant.webp"
						imageAlt="Illustration de la thérapie individuelle pour adulte, adolescent et enfant"
						title="Thérapie individuelle"
						description="Un accompagnement personnalisé, à chaque âge, adulte, ado, enfant, pour avancer à votre rythme selon vos besoins."
					/>
				</div>
			</div>
		</div>
	);
}
