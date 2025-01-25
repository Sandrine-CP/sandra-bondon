import "../components/styles/pageConstruction.css";

export default function UnderConstruction() {
	return (
		<section className="relative h-screen flex items-center justify-center">
			<div className="container">
				<div className="loader" />
				<div className="loader" />
				<div className="loader" />
			</div>
		</section>
	);
}
