import { Outlet } from "react-router-dom";
import Header from "./components/Header";

import "./App.css";
import NavBar from "./components/NavBar";

function App() {
	return (
		<main>
			{/* Skip-link : invisible par défaut, visible au focus */}
			<a href="#main-content" className="skip-link visually-hidden">
				Aller au contenu principal
			</a>
			<Header />
			<NavBar />
			<Outlet />
		</main>
	);
}

export default App;
