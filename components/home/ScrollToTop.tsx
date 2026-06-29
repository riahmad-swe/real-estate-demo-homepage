"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	// User 400px er beshi scroll korle button ti show korbe
	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 400) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};
		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	// Top a scroll korar function (Lenis eta ke automatic smooth korbe)
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<button
			onClick={scrollToTop}
			aria-label="Scroll to top"
			className={`fixed bottom-8 right-8 md:bottom-10 md:right-10 z-25 flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border-2 border-emerald-500/80 shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-500 group ${
				isVisible
					? "opacity-100 translate-y-0 scale-100"
					: "opacity-0 translate-y-10 scale-90 pointer-events-none"
			}`}
		>
			{/* 1. Animated Pulsing Ring (Video er moto glowing wave) */}
			<div className="absolute inset-0 rounded-full border-2 border-emerald-400/60 animate-[ping_2s_ease-out_infinite]"></div>

			{/* 2. Inner Constant Soft Glow */}
			<div className="absolute inset-0 rounded-full bg-emerald-500/10 group-hover:bg-emerald-500/30 blur-[6px] transition-colors duration-300"></div>

			{/* 3. The Chevron Arrow Icon */}
			<ChevronUp className="w-6 h-6 text-emerald-400 relative z-10 group-hover:-translate-y-1 transition-transform duration-300 font-bold" />
		</button>
	);
}
