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
						imageSrc="/images/pnl.jpg"
						imageAlt="XX"
						title="PNL"
						description="Lorem ipsum"
					/>
				</div>
				{/* card 2 */}
				<div>
					<ImageCard
						imageSrc="/images/hypnose.jpg"
						imageAlt="XX"
						title="Hypnose"
						description="Un état modifié de conscience pour accéder à vos ressources profondes et favoriser le changement."
					/>
				</div>
				{/* card 3 */}
				<div>
					<ImageCard
						imageSrc="/images/mosaic.jpg"
						imageAlt="XX"
						title="MOSAIC ®"
						description="Lorem ipsum"
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
						imageSrc="/images/etatsMoi.jpg"
						imageAlt="XX"
						title="Etats du Moi ®"
						description="Lorem ipsum"
					/>
				</div>
				{/* card 6 */}
				<div>
					<ImageCard
						imageSrc="/images/couple2.jpg"
						imageAlt="XX"
						title="Thérapie de couple"
						description="Lorem ipsum"
					/>
				</div>
				{/* card 7 */}
				<div>
					<ImageCard
						imageSrc="/images/groupe2.jpg"
						imageAlt="XX"
						title="Thérapie de groupe"
						description="Lorem ipsum"
					/>
				</div>
				{/* card 8 */}
				<div>
					<ImageCard
						imageSrc="/images/tousAges.jpg"
						imageAlt="XX"
						title="Thérapie individuelle : adulte, ado, enfant"
						description="Lorem ipsum"
					/>
				</div>
			</div>
		</div>
	);
}
