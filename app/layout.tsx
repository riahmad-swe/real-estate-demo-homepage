import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/components/home/SmoothScroll";
import Footer from "@/components/layout/Footer";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Real Estate",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${inter.variable} h-full antialiased`}
		>
			<body className="font-sans min-h-full flex flex-col bg-[#fff2db] text-[#0b0909] scroll-smooth">
				<SmoothScroll>
					<header>
						<Navbar />
					</header>
					{children}
					<Footer />
				</SmoothScroll>
			</body>
		</html>
	);
}
