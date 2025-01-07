import Gallery from "@/components/Gallery";
import ParallaxSection from "@/components/ParallaxSection";

export default function Home() {
	return (
		<>
			<header>
				<div className="bg-background min-h-screen text-primary p-4">
					<h1 className="font-heading text-3xl">
						Bienvenue sur le site Sandra Bondon
					</h1>
					<p className="font-body text-lg text-primary mt-4">
						Découvrez les solutions proposées pour surmonter vos difficultés
						émotionnelles et relationnelles.
					</p>
				</div>
			</header>
			<main>
				<section className="h-screen">
					<Gallery />
				</section>
				<section className="h-screen">
					<ParallaxSection />
				</section>
			</main>
		</>
	);
}
