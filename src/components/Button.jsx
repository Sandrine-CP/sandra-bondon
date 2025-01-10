/* From Uiverse.io by BaekCCI */
import "../components/styles/button.css";
export default function Button() {
	return (
		<button type="button" className="cta">
			<span>Get Started</span>
			<svg width="15px" height="10px" viewBox="0 0 13 10">
				<title>Arrow Icon</title>
				<path d="M1,5 L11,5" />
				<polyline points="8 1 12 5 8 9" />
			</svg>
		</button>
	);
}
