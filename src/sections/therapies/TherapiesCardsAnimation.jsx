import ImageCard from "@/components/ImageCard";

export default function TherapiesCardsAnimation() {
  return (
    <div className="mt-4 bg-[#22223b] pt-28 pb-20">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 md:px-10">
        {/* Titre de section */}
        <h2 className="mb-16 text-center text-2xl font-semibold text-secondary md:text-3xl">
          Pour un accompagnement personnalisé
        </h2>

        {/* Grille des cartes */}
        <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {" "}
          {/* PNL */}
          <div>
            <ImageCard
              imageSrc="/images/therapies/pnl-programmation-neurolinguistique.webp"
              imageAlt="Illustration de la programmation neurolinguistique (PNL) pour améliorer la communication et dépasser les blocages"
              title="PNL"
              description="Approche centrée sur la communication et les mécanismes inconscients pour dépasser blocages et schémas limitants."
            />
          </div>
          {/* Hypnose */}
          <div>
            <ImageCard
              imageSrc="/images/therapies/hypnose-ericksonienne-etat-modifie-conscience.webp"
              imageAlt="Illustration de l'hypnose ericksonienne et de l'état modifié de conscience"
              title="Hypnose ericksonienne"
              description="Hypnose douce et non directive permettant d’accéder à vos ressources internes pour dépasser vos blocages."
            />
          </div>
          {/* Thérapie des états du Moi */}
          <div>
            <ImageCard
              imageSrc="/images/therapies/therapie-etatsDuMoi-ESTI.webp"
              imageAlt="Illustration de la thérapie des états du Moi et de l'accompagnement des traumatismes"
              title="Thérapie des états du Moi® (ESTI)"
              description="Modèle innovant d’aide psychologique, reconnu comme l’un des plus efficients dans l’accompagnement des traumatismes et des troubles somatiques ou psychosomatiques."
            />
          </div>
          {/* Thérapie transpersonnelle */}
          <div>
            <ImageCard
              imageSrc="/images/therapies/pyramide-transpersonnelle-personnage-feminin.webp"
              imageAlt="Illustration de la thérapie transpersonnelle initiée dans les années 1960 par Abraham Maslow et orientée vers la dimension spirituelle de l'humain"
              title="Thérapie transpersonnelle"
              description="Initiée dans les années 1960 par Abraham Maslow et Stanislav Grof, cette discipline place la dimension spirituelle au cœur de l’humain. Elle intègre le potentiel thérapeutique des états modifiés de conscience, pour une complète connaissance de soi."
            />
          </div>
          {/* Constellations familiales */}
          <div>
            <ImageCard
              imageSrc="/images/therapies/constellations-familiales.webp"
              imageAlt="Illustration de plusieurs générations reliées par des lignes symbolisant les liens familiaux"
              title="Constellations familiales"
              description="Explorer les liens familiaux et les dynamiques invisibles qui peuvent influencer notre histoire personnelle, grâce à une mise en scène symbolique des relations entre générations."
            />
          </div>
          {/* MOSAIC : directement après Hypnose sur mobile,
				    sous Hypnose sur tablette */}
          <div>
            <ImageCard
              imageSrc="/images/therapies/therapie-mosaic.webp"
              imageAlt="Illustration de la méthode MOSAIC® et du processus de transformation émotionnelle"
              title="MOSAIC®"
              description="Méthode innovante utilisant des stimulations bilatérales pour favoriser une transformation profonde, durable et centrée sur la sensation qui conduit vers la solution."
            />
          </div>
          {/* Thérapie individuelle */}
          <div>
            <ImageCard
              imageSrc="/images/therapies/therapie-individuelle-adulte-ado-enfant.webp"
              imageAlt="Illustration de la thérapie individuelle pour adulte, adolescent et enfant"
              title="Thérapie individuelle"
              description="Un accompagnement personnalisé, à chaque âge, adulte, ado, enfant, pour avancer à votre rythme selon vos besoins."
            />
          </div>
          {/* Thérapie couple / famille */}
          <div>
            <ImageCard
              imageSrc="/images/therapies/therapie-couple-accompagnement-cabinet.webp"
              imageAlt="Illustration de la thérapie de couple dans un cadre d'accompagnement en cabinet"
              title="Thérapie couple / famille"
              description="Un espace pour mieux se comprendre, apaiser les tensions et retrouver une relation plus sereine."
            />
          </div>
          {/* Coaching */}
          <div className="sm:col-span-2 sm:justify-self-center lg:col-span-1">
            <ImageCard
              imageSrc="/images/therapies/coaching-professionnel.webp"
              imageAlt="Illustration d'une séance de coaching professionnel"
              title="Coaching"
              description="Un cadre d’échange et de soutien pour partager, se sentir compris et avancer ensemble."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
