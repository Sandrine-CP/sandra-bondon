import Link from "next/link";

export default function MentionsLegales() {
	return (
		<>
			<main className="min-h-screen text-center bg-white">
				<div className="container mx-auto p-6 text-primary">
					<h1 className="text-2xl font-bold uppercase mb-6 p-5">
						Mentions Légales
					</h1>
					<p className="mb-6">
						Ce site est édité par Sandra Bondon, exerçant sous le statut
						d&apos;Entreprise Individuelle. Il est mis à disposition des
						visiteurs à titre informatif sur son activité de psychopraticienne.
					</p>{" "}
					<h2 className="text-xl font-bold mb-4">Présentation du site</h2>
					<p>Statut du propriétaire : Profession Libérale</p>
					<p>Propriétaire : Sandra Bondon - EI</p>
					<p>Statut : Entreprise Individuelle</p>
					<p>Numéro d&apos;immatriculation : [à compléter]</p>
					<p>Adresse postale : </p>
					<address>
						32 Bis rue de Montbuisson
						<br />
						Louveciennes, Yvelines
					</address>
					<a href="mailto:[mailSandra]" className="text-blue-500 underline">
						[mailSandra]
					</a>
					<p>[Tel Sandra]</p>
					<p>Responsable de publication : Sandra Bondon</p>
					<p>
						Contacter le responsable de publication :{" "}
						<a href="mailto:[mailSandra]" className="text-blue-500 underline">
							[mailSandra]
						</a>
					</p>
				</div>
				<div>
					<h2 className="text-xl font-bold mb-4">Responsabilités</h2>
					<p>
						Les informations fournies sur le site{" "}
						<a
							href="https://www.sandra.bondon.fr/"
							className="text-blue-500 underline"
						>
							https://www.sandra.bondon.fr/
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
				</div>
				<div className="container mx-auto p-6 text-primary">
					<h2 className="text-xl font-bold mb-4">Crédits</h2>
					<p>Crédits photos : Unsplash</p>
					<p>Conception et réalisation du site : Sandrine Cazenave</p>
				</div>
				<div className="container mx-auto p-6 text-primary">
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
				</div>
				<div>
					<h2 className="text-xl font-bold mb-4">
						Conditions d&apos;utilisation
					</h2>
					<p>
						L&apos;utilisation du site{" "}
						<a
							href="https://www.sandra.bondon.fr/"
							className="text-blue-500 underline"
						>
							https://www.sandra.bondon.fr/
						</a>{" "}
						implique l&apos;acceptation pleine et entière des conditions
						générales d&apos;utilisation décrites dans ces mentions légales.
					</p>
				</div>
				{/* <div className="container mx-auto p-6 text-primary">
					<h2 className="text-xl font-bold mb-4">
						Formation et titres professionnels
					</h2>
				</div> */}
				<div className="container mx-auto p-6 text-primary">
					<h2 className="text-xl font-bold mb-4">
						Protection des données personnelles
					</h2>
					<p>
						Lorsque vous remplissez le formulaire de contact sur le site{" "}
						<a
							href="https://www.sandra.bondon.fr/"
							className="text-blue-500 underline"
						>
							https://www.sandra.bondon.fr/
						</a>
						, vos données personnelles (adresse e-mail, numéro de téléphone)
						sont collectées uniquement pour répondre à votre demande.
					</p>
					<p>
						Conformément à la réglementation en vigueur (RGPD), vous disposez
						d&apos;un droit d&apos;accès, de rectification et de suppression de
						vos données. Pour exercer ces droits, vous pouvez envoyer une
						demande par e-mail à :
					</p>
					<p>
						<a href="mailto:[mailSandra]" className="text-blue-500 underline">
							[mailSandra]
						</a>
					</p>{" "}
				</div>

				<Link className="hover:texte-primary underline" href="/">
					Retour à l&apos;accueil
				</Link>
			</main>
		</>
	);
}
