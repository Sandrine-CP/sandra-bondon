import "../../styles/pageConstruction.css";

export default function APropos() {
	return (
		<>
			<main>
				<section>
					<h1 className="text-2xl font-bold uppercase text-center m-6 p-5">
						A Propos
					</h1>
					<h2 className="text-xl font-bold text-center">
						Page en cours de construction
					</h2>
				</section>
				<section>
					<div className="container">
						<div className="loader" />
						<div className="loader" />
						<div className="loader" />
					</div>
				</section>
			</main>
		</>
	);
}
