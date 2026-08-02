import ImageCard from "@/components/ImageCard";

export default function TherapiesCardsAnimation() {
	return (
		<div className="mt-4 flex justify-center bg-[#22223b] py-20">
			<div className="mx-auto grid max-w-[1300px] grid-cols-1 place-items-center gap-6 px-4 sm:grid-cols-2 sm:px-6 md:px-10 lg:grid-cols-3">
				{/* PNL */}
				<div className="sm:col-start-1 sm:row-start-1 lg:col-start-1 lg:row-start-1">
					<ImageCard
						imageSrc="/images/therapies/pnl-programmation-neurolinguistique.webp"
						imageAlt="Illustration de la programmation neurolinguistique (PNL) pour améliorer la communication et dépasser les blocages"
						title="PNL"
						description="Approche centrée sur la communication et les mécanismes inconscients pour dépasser blocages et schémas limitants."
					/>
				</div>

				{/* Hypnose */}
				<div className="sm:col-start-2 sm:row-start-1 lg:col-start-2 lg:row-start-1">
					<ImageCard
						imageSrc="/images/therapies/hypnose-ericksonienne-etat-modifie-conscience.webp"
						imageAlt="Illustration de l'hypnose ericksonienne et de l'état modifié de conscience"
						title="Hypnose ericksonienne"
						description="Hypnose douce et non directive permettant d’accéder à vos ressources internes pour dépasser vos blocages."
					/>
				</div>

				{/* MOSAIC : directement après Hypnose sur mobile,
				    sous Hypnose sur tablette */}
				<div className="sm:col-start-2 sm:row-start-2 lg:col-start-3 lg:row-start-2">
					<ImageCard
						imageSrc="/images/therapies/therapie-mosaic.webp"
						imageAlt="Illustration de la méthode MOSAIC® et du processus de transformation émotionnelle"
						title="MOSAIC®"
						description="Méthode innovante utilisant des stimulations bilatérales pour favoriser une transformation profonde, durable et centrée sur la sensation qui conduit vers la solution."
					/>
				</div>

				{/* Thérapie des états du Moi */}
				<div className="sm:col-start-1 sm:row-start-2 lg:col-start-3 lg:row-start-1">
					<ImageCard
						imageSrc="/images/therapies/therapie-etatsDuMoi-ESTI.webp"
						imageAlt="Illustration de la thérapie des états du Moi et de l'accompagnement des traumatismes"
						title="Thérapie des états du Moi® (ESTI)"
						description="Modèle innovant d’aide psychologique, reconnu comme l’un des plus efficients dans l’accompagnement des traumatismes et des troubles somatiques ou psychosomatiques."
					/>
				</div>

				{/* Thérapie transpersonnelle */}
				<div className="sm:col-start-1 sm:row-start-4 lg:col-start-1 lg:row-start-2">
					<ImageCard
						imageSrc="/images/therapies/pyramide-transpersonnelle-personnage-feminin.webp"
						imageAlt="Illustration de la thérapie transpersonnelle initiée dans les années 1960 par Abraham Maslow et orientée vers la dimension spirituelle de l'humain"
						title="Thérapie transpersonnelle"
						description="Initiée dans les années 1960 par Abraham Maslow et Stanislav Grof, cette discipline place la dimension spirituelle au cœur de l’humain. Elle intègre le potentiel thérapeutique des états modifiés de conscience, pour une complète connaissance de soi."
					/>
				</div>

				{/* Titre central */}
				<div
					className="
						flex h-[180px] w-[280px] flex-col items-center justify-center
						rounded-lg shadow-lg
						sm:col-span-2 sm:col-start-1 sm:row-start-3
						lg:col-span-1 lg:col-start-2 lg:row-start-2
					"
				>
					<h3 className="text-center text-2xl font-semibold text-secondary">
						Pour un accompagnement
						<br />
						personnalisé
					</h3>
				</div>

				{/* Thérapie individuelle */}
				<div className="sm:col-start-2 sm:row-start-4 lg:col-start-1 lg:row-start-3">
					<ImageCard
						imageSrc="/images/therapies/therapie-individuelle-adulte-ado-enfant.webp"
						imageAlt="Illustration de la thérapie individuelle pour adulte, adolescent et enfant"
						title="Thérapie individuelle"
						description="Un accompagnement personnalisé, à chaque âge, adulte, ado, enfant, pour avancer à votre rythme selon vos besoins."
					/>
				</div>

				{/* Thérapie couple / famille */}
				<div className="sm:col-start-1 sm:row-start-5 lg:col-start-2 lg:row-start-3">
					<ImageCard
						imageSrc="/images/therapies/therapie-couple-accompagnement-cabinet.webp"
						imageAlt="Illustration de la thérapie de couple dans un cadre d'accompagnement en cabinet"
						title="Thérapie couple / famille"
						description="Un espace pour mieux se comprendre, apaiser les tensions et retrouver une relation plus sereine."
					/>
				</div>

				{/* Coaching */}
				<div className="sm:col-start-2 sm:row-start-5 lg:col-start-3 lg:row-start-3">
					<ImageCard
						imageSrc="/images/therapies/coaching-professionnel.webp"
						imageAlt="Illustration d'une séance de coaching professionnel"
						title="Coaching"
						description="Un cadre d’échange et de soutien pour partager, se sentir compris et avancer ensemble."
					/>
				</div>
			</div>
		</div>
	);
}