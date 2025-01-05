import { ReactNode } from "react";
import "./globals.css";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import BackgroundUI from "../components/BackgroundUI";
import { Metadata } from "next";

const playfairDisplay = Playfair_Display({
	subsets: ["latin"],
	variable: "--playfairDisplay",
});
const sourceSans3 = Source_Sans_3({
	subsets: ["latin"],
	variable: "--sourceSans3",
});

export const metadata: Metadata = {
	title: "Wai Yan Min Lwin",
	description: "",
};

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html
			lang="en"
			className={`${playfairDisplay.variable} ${sourceSans3.variable}`}
		>
			<body>
				<main className="relative z-10 container mx-auto px-5 sm:px-20 md:px-40 lg:px-60 xl:px-80 py-10 sm:py-16 md:py-28">
					{children}
				</main>
				<BackgroundUI />
			</body>
		</html>
	);
}
