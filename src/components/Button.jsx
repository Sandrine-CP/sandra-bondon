/* From Uiverse.io by BaekCCI */
// Organisation des imports
// React, hooks, librairies
// Bibliothèques tierces
// Composants parents
// Composants enfants
// Utilitaires et helpers
// Styles et assets
import "../components/styles/button.css";

export default function Button({
	text,
	className = "",
	textColor = "#2C254D",
	bgColor = "#F2E9E4",
	hoverTextColor = "#F2E9E4",
	hoverBgColor = "#2C254D",
}) {
	return (
		<span
			className={`cta relative ${className}`}
			style={{
				"--bg-color": bgColor,
				"--text-color": textColor,
				"--hover-bg-color": hoverBgColor,
				"--hover-text-color": hoverTextColor,
			}}
		>
			<span>{text}</span>
			<svg width="15px" height="10px" viewBox="0 0 13 10">
				<title>Arrow Icon</title>
				<path d="M1,5 L11,5" />
				<polyline points="8 1 12 5 8 9" />
			</svg>
		</span>
	);
}