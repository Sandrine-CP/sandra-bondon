// Organisation des imports
import { SITE_URL } from "@/config/site";
// React, hooks, librairies
import Link from "next/link";
// Bibliothèques tierces
// Composants parents
import SEO from "@/components/SEO";
// Composants enfants
// Utilitaires et helpers
// Styles et assets

export default function MentionsLegales() {
	return (
		<>
			<SEO
				title="Mentions légales | Sandra Bondon"
				description="Mentions légales, médiation de la consommation et informations relatives à la protection des données du site de Sandra Bondon, psychopraticienne à Saint-Germain-en-Laye."
				keywords="mentions légales, médiation de la consommation, protection des données, Sandra Bondon"
				author="Sandra Bondon"
			/>
				<main className="min-h-screen bg-white">
				<section className="container mx-auto max-w-4xl p-6 text-primary text-left">
					<h1 className="text-2xl font-bold uppercase mb-6 p-5">
						Mentions légales et médiation 
					</h1>
					<p className="mb-6">
						Ce site est édité par Sandra Bondon, exerçant sous le statut
						d&apos;Entreprise Individuelle. Il est mis à disposition des
						visiteurs à titre informatif sur son activité de psychopraticienne.
					</p>{" "}
					<h2 className="text-xl font-bold mb-4">Présentation du site</h2>
					<p>Statut du propriétaire : Profession Libérale</p>
					<p>Propriétaire : Sandra Bondon - Auto-entrepreneur</p>
					<p>Statut : Entreprise Individuelle</p>
					<p>Numéro d&apos;immatriculation : Siret 91211783500013 </p>
					<p>Adresse postale : </p>
					<address>
						4 chemin Benigne May
						<br />
						78290 Croissy sur Seine, Yvelines
					</address>
					<a
						href="mailto:sandrabondon@gmail.com"
						className="text-blue-500 underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						sandrabondon@gmail.com
					</a>
					<p>Tél : 06 24 18 23 02</p>
					<p>Responsable de publication : Sandra Bondon</p>
					<p>
						Contacter le responsable de publication:{" "}
						<a
							href="mailto:sandrabondon@gmail.com"
							className="text-blue-500 underline"
						>
							sandrabondon@gmail.com
						</a>
					</p>
				</section>
				<section className="container mx-auto max-w-4xl p-6 text-primary text-left">
					<h2 className="text-xl font-bold mb-4">Responsabilités</h2>
					<p>
						Les informations fournies sur le site{" "}
						<a
							href={SITE_URL}
							className="text-blue-500 underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							{SITE_URL}
						</a>{" "}
						le sont à titre indicatif.
						<br /> Sandra Bondon s&apos;efforce de les tenir à jour et exactes,
						mais ne peut garantir leur exhaustivité ou exactitude à tout moment.
					</p>
					<p>
						Le site peut contenir des liens vers des sites externes dont Sandra
						Bondon ne contrôle pas le contenu. Elle décline toute responsabilité
						concernant les informations publiées sur ces sites tiers.
					</p>
				</section>
				<section className="container mx-auto max-w-4xl p-6 text-primary text-left">
					<h2 className="text-xl font-bold mb-4">Crédits</h2>
					<p>Crédits photos : iStock</p>
					<p>Conception et réalisation du site : Sandrine Cazenave</p>
				</section>
				<section className="container mx-auto max-w-4xl p-6 text-primary text-left">
					<h2 className="text-xl font-bold mb-4">Hébergement</h2>
					<p>Le site est hébergé par :</p>
					<p>Vercel Inc.</p>
					<address>340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</address>
					<p>
						Contact :{" "}
						<a href="mailto:privacy@vercel.com" className="underline">
							privacy@vercel.com
						</a>
					</p>
					<p>
						Site web :{" "}
						<a
							href="https://vercel.com"
							className="underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							vercel.com
						</a>
					</p>
				</section>
				<section className="container mx-auto max-w-4xl p-6 text-primary text-left">
					<h2 className="text-xl font-bold mb-4">
					Propriété intellectuelle
					</h2>

					<p>
					L’ensemble du contenu présent sur le site {" "}
					<a
						href={SITE_URL}
						className="text-blue-500 underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						{SITE_URL}
					</a>{" "}
					(textes, images, illustrations, logos, éléments graphiques, structure du
					site) est protégé par les lois en vigueur relatives à la propriété
					intellectuelle.
					</p>

					<p>
					Toute reproduction, représentation, modification, publication,
					transmission ou adaptation de tout ou partie du site, quel que soit le
					moyen ou le procédé utilisé, est interdite sans l’autorisation écrite
					préalable de Sandra Bondon.
					</p>

					<p>
					Les photographies utilisées sur le site proviennent de la plateforme
					iStock et sont utilisées conformément à leur licence d’utilisation.
					</p>
				</section>
				<section className="container mx-auto max-w-4xl p-6 text-primary text-left">
					<h2 className="text-xl font-bold mb-4">
						Conditions d&apos;utilisation
					</h2>
					<p>
						L&apos;utilisation du site{" "}
						<a
						href={SITE_URL}
						className="text-blue-500 underline"
						target="_blank"
						rel="noopener noreferrer"
						>
						{SITE_URL}
					</a>{" "}
						implique l&apos;acceptation pleine et entière des conditions
						générales d&apos;utilisation décrites dans ces mentions légales.
					</p>
				</section>
				<section className="container mx-auto max-w-4xl p-6 text-primary text-left">
					<h2 className="text-xl font-bold mb-4">
					Médiation de la consommation
					</h2>

					<p>
					Conformément aux articles L.616-1 et R.616-1 du Code de la consommation,
					notre société a mis en place un dispositif de médiation de la consommation.
					</p>

					<p>
					Si vous n’êtes pas parvenu à résoudre votre litige après nous avoir adressé
					une réclamation écrite (courrier ou courriel), datée, rappelant les
					circonstances qui ont donné lieu au différend et ce que vous réclamez, vous
					pourrez saisir le médiateur de la consommation désigné ci-dessous si vous
					avez reçu une réponse écrite négative de notre part ou si vous n’avez pas
					reçu de réponse deux mois après l’envoi de votre réclamation.
					</p>

					<p>
					L’entité de médiation retenue est :
					</p>

					<p className="font-semibold">
						MEDIATION CONSOMMATION DÉVELOPPEMENT / MED CONSO DEV
					</p>

					<p>
						En cas de litige, vous pouvez déposer votre réclamation sur son site :
					</p>

					<p>
						<a
						href="https://www.medconsodev.eu"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-500 underline"
						>
						https://www.medconsodev.eu
						</a>
					</p>

					<p>ou par voie postale en écrivant à :</p>

					<address>
					MEDIATION CONSOMMATION DÉVELOPPEMENT / MED CONSO DEV
					<br />
					Centre d’Affaires Stéphanois SAS
					<br />
					IMMEUBLE L’HORIZON – ESPLANADE DE FRANCE
					<br />
					3, rue J. Constant Milleret
					<br />
					42000 Saint-Étienne
					</address>
				</section>
				<section className="container mx-auto max-w-4xl p-6 text-primary text-left">
					<h2 className="text-xl font-bold mb-4">
						Protection des données personnelles
					</h2>
					<p>
						Le site peut utiliser des services tiers nécessaires à son fonctionnement ou à
						l’affichage de certains contenus, notamment Google Maps et Google Reviews.
					</p>
					<p>
						Lorsque vous remplissez le formulaire de contact sur le site{" "}
						<a
							href={SITE_URL}
							className="text-blue-500 underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							{SITE_URL}
						</a>
						certaines données personnelles peuvent être collectées, notamment votre nom, prénom, adresse e-mail,
						numéro de téléphone et le contenu de votre message, uniquement afin de répondre à
						votre demande.
					</p>
					<p>
						Les données transmises via le formulaire de contact sont conservées uniquement
						pendant la durée nécessaire au traitement de votre demande, sauf obligation légale contraire.
					</p>
					<p>
						Conformément à la réglementation en vigueur (RGPD), vous disposez
						d&apos;un droit d&apos;accès, de rectification et de suppression de
						vos données. Pour exercer ces droits, vous pouvez envoyer une
						demande par e-mail à :
					</p>
					<p>
						<a
							href="mailto:sandrabondon@gmail.com"
							className="text-blue-500 underline"
						>
							sandrabondon@gmail.com
						</a>
					</p>{" "}
				</section>
				<section className="container mx-auto max-w-4xl p-6 text-primary text-left">
					<Link
						href="/"
						className="inline-block mt-4 text-blue-600 hover:text-blue-800 underline"
					>
					← Retour à l’accueil
					</Link>
				</section>
			</main>
		</>
	);
}
