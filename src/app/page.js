"use client";
import Consultations from "@/sections/home/Consultations";
import Gallery from "@/sections/home/Gallery";
import Professionals from "@/sections/home/Professionals";
import Solutions from "@/sections/home/Solutions";
import Specialities from "@/sections/home/Specialities";

export default function Home() {
	return (
		<>
			<main className="m-0 p-0">
				<section className="h-screen">
					<Gallery />
				</section>
				<section className="h-[100px] bg-black" />
				<section
					className="h-[500px] bg-cover bg-center"
					style={{ backgroundImage: "url(/images/lumiere.jpg)" }}
				/>
				<section className="flex justify-center my-0 bg-black text-white py-20">
					<p className="text-[7vw] uppercase text-center max-w-[50vw] leading-none">
						Toutes les ressources sont en vous.
					</p>
				</section>
				<section
					className="h-screen bg-cover bg-center"
					style={{ backgroundImage: "url(/images/divan.jpg)" }}
				>
					<div className="relative z-10 text-white flex flex-col justify-between h-full p-2 mix-blend-difference">
						<p className="text-[1.9vw] uppercase self-end">
							Sandra Bondon : Psychopraticienne - Business Coach -
							Hypnothérapeute
						</p>
						<p className="text-[5vw] uppercase text-right">S | B</p>
					</div>{" "}
				</section>
				<section className="h-screen">
					<Specialities />
				</section>
				<section>
					<Professionals />
				</section>
				<section>
					<Consultations />
				</section>

				<section className="h-screen bg-white text-black flex items-center justify-center">
					<Solutions />
				</section>
			</main>
		</>
	);
}
