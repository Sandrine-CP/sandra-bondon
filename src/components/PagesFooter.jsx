import Link from "next/link";

export default function PagesFooter() {
	return (
		<footer className="bg-secondary text-sm p-4 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
			{" "}
			<div>
				<p>Linkedin</p>
				<p>Facebook</p>
				<p>Psychologue.net</p>
			</div>
			<div>
				<h2 className="font-bold">Informations légales</h2>
				<p>Sandra Bondon</p>
				<p>Numéro d'immatriculation</p>
				<address>
					32 Bis rue de Montbuisson
					<br />
					Louveciennes, Yvelines
				</address>
				<p>Mentions légales</p>
			</div>
			<div>
				<h2 className="font-bold">Crédits</h2>
				<p>Conception et réalisation du site : Sandrine Cazenave</p>
				<p>Crédits photos : Unsplash</p>
				<p>© 2025 Sandra Bondon. Tous droits réservés.</p>
			</div>
			<div className="flex flex-col ">
				<h2 className="font-bold">Plan du site</h2>
				<Link className="hover:texte-primary hover:underline" href="/">
					Accueil
				</Link>
				<Link
					className="hover:texte-primary hover:underline"
					href="/solutions-pour-vous"
				>
					Solutions pour vous
				</Link>
				<Link className="hover:texte-primary hover:underline" href="/seances">
					Séances
				</Link>
				<Link
					className="hover:texte-primary hover:underline"
					href="/solutions-pour-vos-collaborateurs"
				>
					Solutions pour vos collaborateurs
				</Link>
				<Link className="hover:texte-primary hover:underline" href="/a-propos">
					A propos
				</Link>
				<Link className="hover:texte-primary hover:underline" href="/contact">
					Contact
				</Link>
			</div>
		</footer>
	);
}
