import "./globals.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

export const metadata = {
	title: "Masoud S.R | Front-End Web Developer",
	description: "AmirMasoud SepehrRad , Front-End Developer | ReactJS",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="">{children}</body>
		</html>
	);
}
