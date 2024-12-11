import Plume from "../assets/plumes.jpg";
import Flowers from "../assets/fleurs.jpg";
import "./styles/Home.css";

function Home() {
	return (
		<>
			<main>
				<section className="hero">
					<h1 className="hero__title">Vivez-vous</h1>
					<img className="hero__image" src={Flowers} alt="Des fleurs" />
					<div className="hero__subtitle">
						<h2 className="hero__subtitle-text">
							Trouvez votre équilibre pas à pas
						</h2>
					</div>
					<div className="hero__text">
						<p className="hero__paragraph">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. In
							cupiditate dolore numquam voluptatem rerum fugiat modi ipsum
							similique, quis, quasi reprehenderit assumenda est cum odit labore
							beatae nisi eaque veritatis?
						</p>
					</div>
				</section>
				<section className="specialities">
					<h2 className="specialities__title">Spécialités</h2>
					<p className="specialities__text">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
						ducimus ratione amet molestiae atque inventore labore, dolorem rem,
						temporibus id illo? Aperiam debitis quod quibusdam exercitationem
						quos ut illum fugit.
					</p>
				</section>
				<section className="therapies">
					<div className="therapies__title">
						<h2>Thérapies</h2>
					</div>
					<div className="therapies__text">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. In
							cupiditate dolore numquam voluptatem rerum fugiat modi ipsum
							similique, quis, quasi reprehenderit assumenda est cum odit labore
							beatae nisi eaque veritatis?
						</p>
					</div>
					<img
						className="therapies__image"
						src={Plume}
						alt="Une plume légère"
					/>
				</section>
			</main>
		</>
	);
}

export default Home;
