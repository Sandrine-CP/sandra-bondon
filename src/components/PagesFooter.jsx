// Organisation des imports
// Imports de base : React, hooks, libraries essentielles
import Link from "next/link";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
// Bibliothèques tierces
// Composants parents
// Composants enfants
// Utilitaires et helpers
// Styles et assets

export default function PagesFooter() {
	return (
		<footer className="bg-secondary text-sm p-4 mt-4">
			{" "}
			<section className="text-sm p-4 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
				<div className="mt-4 flex justify-center space-x-4">
					{" "}
					<a
						href="https://www.linkedin.com/in/sandrine-cazenave-peyrasson"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
						className="text-primary hover:text-blue-500"
					>
						<FaLinkedin size={24} />
					</a>
					<a
						href="https://www.instagram.com/sandrabondon_sb/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Facebook"
						className="text-primary hover:text-blue-500"
					>
						<FaInstagram size={24} />
					</a>
				</div>{" "}
				<div>
					<h2 className="font-bold">Coordonnées</h2>
					<p>Sandra Bondon - EI</p>
					<address>
						32 Bis rue de Montbuisson
						<br />
						Louveciennes, Yvelines
					</address>
					<a
						href="mailto:sandrabondon@gmail.com"
						className="text-blue-500 underline"
					>
						sandrabondon@gmail.com
					</a>
					<p>Tel : 0624182302</p>
				</div>
				<div>
					<h2 className="font-bold">Crédits</h2>
					<p>Crédits photos : Unsplash</p>
					<p>Conception et réalisation du site : Sandrine Cazenave</p>
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
					<Link
						className="hover:texte-primary hover:underline"
						href="/a-propos"
					>
						A propos
					</Link>
					<Link className="hover:texte-primary hover:underline" href="/contact">
						Contact
					</Link>
				</div>
			</section>
			<section className="text-center">
				<p>© 2025 Sandra Bondon - EI - Tous droits réservés.</p>
				<Link href="/mentions-legales" className="text-blue-500 underline">
					Mentions légales
				</Link>{" "}
			</section>
		</footer>
	);
}
