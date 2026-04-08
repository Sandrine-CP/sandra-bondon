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
						imageSrc="/images/pnl_v2.webp"
						imageAlt="XX"
						title="PNL"
						description="Programmation Neurolinguistique Elle est mise en œuvre dans de nombreux secteurs d'activité pour améliorer la communication mais aussi dépasser les formes de blocages inconscients."
					/>
				</div>
				{/* card 2 */}
				<div>
					<ImageCard
						imageSrc="/images/hypnose.jpg"
						imageAlt="XX"
						title="Hypnose ericksonienne"
						description="Forme d'hypnose douce et non directive. Elle repose sur la collaboration entre le conscient et l'inconscient pour accéder aux ressources internes du patient, permettant de surmonter des obstacles personnels."
					/>
				</div>
				{/* card 3 */}
				<div>
					<ImageCard
						imageSrc="/images/mosaic.jpg"
						imageAlt="XX"
						title="MOSAIC®"
						description="(mouvements oculaires et stimulations alternées pour l’intégration cérébrale) est une méthode thérapeutique innovante qui utilise les propriétés neurophysiologiques des Stimulations Bilatérales Alternées (auditives, tactiles ou mouvements oculaires) dans une approche solutionniste expérientielle® pour accompagner La transformation profonde. Cette approche thérapeutique, basée sur des recherches scientifiques validées, a l’avantage de s’adresser à tous les profis psychologiques et donc à toutes les pathologies. Elle permet de vivre rapidement et de façon durable dans le corps la solution désirée par la personne."
					/>
				</div>
				{/* card 3 */}
				<div>
					<ImageCard
						imageSrc="/images/therapieBreve.jpg"
						imageAlt="XX"
						title="Thérapie brève"
						description="Lorem ipsum"
					/>
				</div>
				{/* card 4-Title */}
				<div
					className="flex flex-col justify-center items-center w-[280px] h-[180px] rounded-lg shadow-lg
					sm:col-span-2 sm:col-start-1 sm:row-start-3
					lg:col-span-1 lg:col-start-2 lg:row-start-2 mx-auto"
				>
					<h1 className="text-secondary text-center text-2xl font-semibold">
						Pour un accompagnement
						<br />
						personnalisé
					</h1>
				</div>{" "}
				{/* card 5 */}
				<div>
					<ImageCard
						imageSrc="/images/etatsMoi2.webp"
						imageAlt="XX"
						title="Thérapie des états du Moi® (ESTI)"
						description="Modèle innovant d’aide psychologique, reconnu comme l’un des plus efficient dans l’accompagnement des traumatismes et des troubles somatiques ou psychosomatiques."
					/>
				</div>
				{/* card 6 */}
				<div>
					<ImageCard
						imageSrc="/images/couple-PriscillaDuPreez-Unsplash.jpg"
						imageAlt="XX"
						title="Thérapie de couple"
						description="Lorem ipsum"
					/>
				</div>
				{/* card 7 */}
				<div>
					<ImageCard
						imageSrc="/images/therapie_groupe.webp"
						imageAlt="XX"
						title="Thérapie de groupe"
						description="Lorem ipsum"
					/>
				</div>
				{/* card 8 */}
				<div>
					<ImageCard
						imageSrc="/images/famille-JosueMichel-Unsplash.jpg"
						imageAlt="XX"
						title="Thérapie individuelle : adulte, ado, enfant"
						description="Lorem ipsum"
					/>
				</div>
			</div>
		</div>
	);
}
