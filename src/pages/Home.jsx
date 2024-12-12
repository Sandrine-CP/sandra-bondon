import Plume from "../assets/plumes.jpg";
import Flowers from "../assets/fleurs.jpg";
import "./styles/Home.css";

function Home() {
	return (
		<>
			<main id="main-content">
				<section className="hero">
					<div className="hero__title">
						<h1 className="hero__title-text">Vivez-vous</h1>
					</div>
					<div className="hero__section">
						<div className="hero__image">
							<img src={Plume} alt="Des fleurs" />
						</div>
						<div className="hero__paragraph">
							<h2 className="hero__paragraph-subtitle">
								Trouvez votre équilibre pas à pas
							</h2>
							<p className="hero__paragraph-text">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. In
								cupiditate dolore numquam voluptatem rerum fugiat modi ipsum
								similique, quis, quasi reprehenderit assumenda est cum odit
								labore beatae nisi eaque veritatis?
							</p>
						</div>
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
					<h3 className="specialities__item">Anxiété</h3>
					<h3 className="specialities__item">Burn Out</h3>
					<h3 className="specialities__item">Addiction</h3>
					<h3 className="specialities__item">Phobie</h3>
					<h3 className="specialities__item">Obsession</h3>
					<h3 className="specialities__item">Trauma</h3>
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
