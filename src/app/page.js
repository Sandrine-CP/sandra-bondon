import Gallery from "@/components/Gallery";
import ParallaxSection from "@/components/ParallaxSection";

export default function Home() {
	return (
		<main>
			<section className="h-screen">
				<Gallery />
			</section>
			<section className="h-screen">
				<ParallaxSection />
			</section>
		</main>
	);
}
