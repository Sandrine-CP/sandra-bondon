import Gallery from "@/components/Gallery";
import ParallaxSection from "@/components/ParallaxSection";
import Solutions from "@/components/Solutions";

export default function Home() {
	return (
		<>
			<main>
				<section className="h-screen">
					<Gallery />
				</section>
				<Solutions />
				<section className="h-screen">
					<ParallaxSection />
				</section>
			</main>
		</>
	);
}
