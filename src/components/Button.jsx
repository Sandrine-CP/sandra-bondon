/* From Uiverse.io by BaekCCI */
import "../components/styles/button.css";
export default function Button({
	text,
	className = "",
	textColor = "#2C254D",
	bgColor = "#F2E9E4",
}) {
	return (
		<button
			type="button"
			className={`cta relative ${className}`}
			style={{ "--bg-color": bgColor, "--text-color": textColor }}
		>
			<span>{text}</span>
			<svg width="15px" height="10px" viewBox="0 0 13 10">
				<title>Arrow Icon</title>
				<path d="M1,5 L11,5" />
				<polyline points="8 1 12 5 8 9" />
			</svg>
		</button>
	);
}
