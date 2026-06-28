"use client";

import { useState } from "react";
import {
	ShieldCheck,
	Clock,
	CheckCircle,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";

const heroImages = [
	"/images/hero-1.jpg",
	"/images/hero-2.jpg",
	"/images/hero-3.jpg",
	"/images/hero-4.jpg",
	"/images/hero-5.jpg",
];

export default function Hero() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prev) =>
			prev === heroImages.length - 1 ? 0 : prev + 1,
		);
	};

	const prevSlide = () => {
		setCurrentIndex((prev) =>
			prev === 0 ? heroImages.length - 1 : prev - 1,
		);
	};

	return (
		<section className="relative min-h-[80vh] pt-16 overflow-hidden pb-16 lg:pb-0">
			{/* Trust Badge (Kept exactly as you had it) */}
			<div className="flex justify-center mb-10">
				<div className="inline-flex gap-2 px-4 py-2 rounded-full border border-blue-500/50 shadow-md">
					<ShieldCheck className="w-4 h-4 text-blue-600" />
					<span className="text-sm font-medium tracking-wider uppercase text-blue-600">
						100% Legal & RDA/CDA Approved
					</span>
				</div>
			</div>

			{/* Split Layout Container */}
			<div className="px-6 lg:px-48 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
				{/* LEFT SIDE: Your exact existing content */}
				<div className="relative z-10 flex flex-col items-start w-full lg:w-1/2">
					{/* Main Headline */}
					<h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl">
						Building Your Dreams With{" "}
						<br className="hidden md:block" />
						<span className="bg-linear-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
							Uncompromised Trust
						</span>
					</h1>

					{/* Sub-headline */}
					<p className="text-lg md:text-xl max-w-2xl mb-8 leading-relaxed font-medium">
						We don&apos;t just build apartments, we engineer peace
						of mind. Experience total transparency with live project
						tracking and audited material logs.
					</p>

					{/* Trust Metrics Grid */}
					<div className="flex flex-col md:flex-row gap-8 mb-12">
						<div className="flex flex-col items-center rounded-2xl drop-shadow-md drop-shadow-black/30">
							<Clock className="w-8 h-8 text-emerald-400 mb-1" />
							<h3 className="text-2xl font-bold mb-1">0%</h3>
							<p className="text-sm">Handover Delays</p>
						</div>

						<div className="flex flex-col items-center rounded-2xl drop-shadow-md drop-shadow-black/30">
							<ShieldCheck className="w-8 h-8 text-emerald-400 mb-1" />
							<h3 className="text-2xl font-bold mb-1">Live</h3>
							<p className="text-sm">Construction Tracking</p>
						</div>

						<div className="flex flex-col items-center rounded-2xl drop-shadow-md drop-shadow-black/30">
							<CheckCircle className="w-8 h-8 text-emerald-400 mb-1" />
							<h3 className="text-2xl font-bold mb-1">100+</h3>
							<p className="text-sm">Satisfied Families</p>
						</div>
					</div>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-4">
						<button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 font-bold rounded-full transition-colors text-white cursor-pointer">
							Explore Properties
						</button>
						<button className="px-6 py-3 bg-emerald-400 hover:bg-emerald-500 font-bold rounded-full transition-all cursor-pointer">
							View Material Audits
						</button>
					</div>
				</div>

				{/* RIGHT SIDE: Custom Unique Carousel */}
				<div className="w-full lg:w-1/2 relative h-120 lg:h-130 rounded-3xl overflow-hidden shadow-2xl group">
					{/* Main Carousel Image with smooth fade */}
					<img
						src={heroImages[currentIndex]}
						alt={`Property View ${currentIndex + 1}`}
						className="w-full h-full object-cover transition-all duration-700 ease-in-out transform group-hover:scale-105"
					/>

					{/* Dark gradient overlay for bottom UI readability */}
					<div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

					{/* Left: Glassmorphism Navigation Controls */}
					<div className="absolute bottom-6 left-6 flex items-center gap-2 backdrop-blur-md bg-white/10 border border-white/20 p-2 rounded-full shadow-lg">
						<button
							onClick={prevSlide}
							className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white cursor-pointer"
						>
							<ChevronLeft className="w-5 h-5" />
						</button>
						<button
							onClick={nextSlide}
							className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white cursor-pointer"
						>
							<ChevronRight className="w-5 h-5" />
						</button>
					</div>

					{/* Right: Floating "Up Next" Preview Widget */}
					<div
						className="absolute bottom-6 right-6 hidden sm:flex items-center gap-4 backdrop-blur-md bg-slate-900/60 p-2 pr-5 rounded-full border border-white/10 shadow-2xl cursor-pointer hover:bg-slate-900/80 transition-colors"
						onClick={nextSlide}
					>
						<img
							src={
								heroImages[
									(currentIndex + 1) % heroImages.length
								]
							}
							alt="Next Slide Preview"
							className="w-12 h-12 rounded-full object-cover border-2 border-blue-500 shadow-sm"
						/>
						<div className="flex flex-col">
							<span className="text-[10px] text-slate-300 uppercase tracking-widest font-semibold">
								Up Next
							</span>
							<span className="text-sm text-white font-bold tracking-wider">
								0{((currentIndex + 1) % heroImages.length) + 1}{" "}
								<span className="text-slate-400 font-medium text-xs">
									/ 05
								</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
