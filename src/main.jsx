import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Therapies from "./pages/Therapies.jsx";
import Consultations from "./pages/Consultations.jsx";
import Professionals from "./pages/Contact.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/about",
		element: <About />,
	},
	{
		path: "/therapies",
		element: <Therapies />,
	},
	{
		path: "/consultations",
		element: <Consultations />,
	},
	{
		path: "/professionals",
		element: <Professionals />,
	},
	{
		path: "/contact",
		element: <Contact />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
