import Gallery from "@/sections/home/Gallery";
import ParallaxSection from "@/sections/home/parallax/ParallaxSection";
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
