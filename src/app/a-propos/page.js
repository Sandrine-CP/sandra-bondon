import "../a-propos/apropos.css";

export default function APropos() {
	return (
		<>
			<main>
				<section className="text-2xl font-bold uppercase text-center m-6 p-5">
					<h1>A Propos</h1>
				</section>
				<h2 className="text-xl font-bold text-center">
					Page en cours de construction
				</h2>
				<section className="flex flex-row justify-center m-20">
					<div className="typewriter">
						<div className="slide">
							<i />
						</div>
						<div className="paper" />
						<div className="keyboard" />
					</div>
				</section>
			</main>
		</>
	);
}
