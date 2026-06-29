"use client";

import { useState, useEffect } from "react";
import { Quote, Star, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

// Bilingual Demo Data for High-Net-Worth Individuals
const reviews = [
	{
		id: 1,
		nameEn: "Mr. Jalal Uddin",
		nameBn: "জনাব জালাল উদ্দিন",
		designationEn: "Managing Director, Horizon Group",
		designationBn: "ব্যবস্থাপনা পরিচালক, হরাইজন গ্রুপ",
		projectEn: "Resident at ANB Alpine Tower",
		projectBn: "এএনবি আলপাইন টাওয়ারের বাসিন্দা",
		quoteEn:
			"Investing in ANB Unique Real State was the best decision for my family. The level of transparency in materials and the exact on-time handover exceeded my expectations. It truly feels like a 5-star living experience.",
		quoteBn:
			"এএনবিতে বিনিয়োগ করা আমার পরিবারের জন্য সেরা সিদ্ধান্ত ছিল। ম্যাটেরিয়ালের স্বচ্ছতা এবং একদম সঠিক সময়ে ফ্ল্যাট হস্তান্তর আমার প্রত্যাশাকেও ছাড়িয়ে গেছে। এখানে বসবাস করা সত্যিই ফাইভ-স্টার এক্সপেরিয়েন্সের মতো।",
		image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2000&auto=format&fit=crop",
		rating: 5,
	},
	{
		id: 2,
		nameEn: "Dr. Salma Khatun",
		nameBn: "ডাঃ সালমা খাতুন",
		designationEn: "Chief Surgeon, RMCH",
		designationBn: "চিফ সার্জন, আরএমসিএইচ",
		projectEn: "Resident at ANB Sky View",
		projectBn: "এএনবি স্কাই ভিউয়ের বাসিন্দা",
		quoteEn:
			"As a doctor, peace and security are my top priorities. The soundproof architecture, structural safety, and the elite neighborhood they provided are simply unmatched in the city.",
		quoteBn:
			"পেশায় ডাক্তার হওয়ায় শান্তি এবং নিরাপত্তা আমার কাছে সবচেয়ে গুরুত্বপূর্ণ। তাদের সাউন্ডপ্রুফ আর্কিটেকচার, কাঠামোগত নিরাপত্তা এবং প্রিমিয়াম পরিবেশ সত্যিই অতুলনীয়।",
		image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2000&auto=format&fit=crop",
		rating: 5,
	},
	{
		id: 3,
		nameEn: "Engr. Mahfuzur Rahman",
		nameBn: "ইঞ্জিঃ মাহফুজুর রহমান",
		designationEn: "Ex-Chief Engineer, PWD",
		designationBn: "সাবেক প্রধান প্রকৌশলী, পিডব্লিউডি",
		projectEn: "Owner at ANB Green Valley",
		projectBn: "এএনবি গ্রিন ভ্যালির মালিক",
		quoteEn:
			"Being an engineer myself, I audited their construction process. I was amazed by their adherence to international building codes and their zero-compromise policy on steel and cement quality.",
		quoteBn:
			"নিজেই একজন প্রকৌশলী হওয়ায় আমি তাদের নির্মাণ প্রক্রিয়া যাচাই করেছিলাম। তাদের আন্তর্জাতিক বিল্ডিং কোড মেনে চলা এবং রড-সিমেন্টের মানের সাথে জিরো-কম্প্রোমাইজ পলিসি আমাকে মুগ্ধ করেছে।",
		image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2000&auto=format&fit=crop",
		rating: 5,
	},
];

export default function ResidentReviews() {
	const [activeIndex, setActiveIndex] = useState(0);

	// Auto-slide effect for a dynamic feel
	useEffect(() => {
		const timer = setInterval(() => {
			setActiveIndex((prev) =>
				prev === reviews.length - 1 ? 0 : prev + 1,
			);
		}, 8000); // Changes every 8 seconds
		return () => clearInterval(timer);
	}, []);

	const handlePrev = () => {
		setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
	};

	const handleNext = () => {
		setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
	};

	const activeReview = reviews[activeIndex];

	return (
		<section
			id="reviews"
			className="pt-16 md:pt-24 bg-slate-950 relative border-t border-white/5 overflow-hidden"
		>
			{/* Ambient Luxury Lighting */}
			<div className="absolute top-0 right-1/4 w-150 h-150 bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />
			<div className="absolute bottom-0 left-1/4 w-100 h-100 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

			<div className="px-4 lg:px-24 2xl:px-48 relative z-10">
				{/* Section Header */}
				<div className="text-center max-w-3xl mx-auto mb-16">
					<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
						<Star className="w-4 h-4 fill-amber-400" /> Premium
						Experiences
					</div>
					<h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
						Voices of Our{" "}
						<span className="bg-linear-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
							Esteemed Residents
						</span>
					</h2>
					<p className="text-slate-400 text-sm font-medium">
						Do not just take our word for it. Hear from the families
						who trust us with their dreams.
					</p>
				</div>

				{/* Interactive Editorial Layout */}
				<div className="bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl">
					<div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
						{/* Left: The Big Quote */}
						<div className="lg:col-span-7 relative min-h-75 flex flex-col justify-center">
							<Quote className="absolute -top-10 -left-6 w-24 h-24 text-white/5 transform -scale-x-100" />

							<div
								key={activeReview.id}
								className="animate-in fade-in slide-in-from-bottom-8 duration-700 relative z-10"
							>
								{/* 5-Star Rating */}
								<div className="flex gap-1 mb-6">
									{[...Array(activeReview.rating)].map(
										(_, i) => (
											<Star
												key={i}
												className="w-5 h-5 text-amber-400 fill-amber-400 drop-shadow-md"
											/>
										),
									)}
								</div>

								{/* English Quote */}
								<p className="text-xl md:text-3xl font-medium text-white leading-snug mb-6">
									{activeReview.quoteEn}
								</p>

								{/* Bengali Quote */}
								<p className="text-sm md:text-base text-slate-400 leading-relaxed font-medium mb-10 border-l-2 border-amber-500/50 pl-4">
									{activeReview.quoteBn}
								</p>

								{/* Custom Navigation Controls built into the layout */}
								<div className="flex items-center gap-4">
									<button
										onClick={handlePrev}
										className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500/50 text-white transition-all"
									>
										<ChevronLeft className="w-5 h-5" />
									</button>
									<button
										onClick={handleNext}
										className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500/50 text-white transition-all"
									>
										<ChevronRight className="w-5 h-5" />
									</button>
									<div className="ml-4 flex gap-2">
										{reviews.map((_, idx) => (
											<div
												key={idx}
												className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === idx ? "w-8 bg-amber-400" : "w-2 bg-white/20"}`}
											/>
										))}
									</div>
								</div>
							</div>
						</div>

						{/* Right: Resident Profile */}
						<div className="lg:col-span-5">
							<div
								key={`profile-${activeReview.id}`}
								className="relative animate-in fade-in zoom-in-95 duration-700"
							>
								{/* Profile Image Wrapper */}
								<div className="relative w-full aspect-square md:aspect: [4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
									<img
										src={activeReview.image}
										alt={activeReview.nameEn}
										className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/40 to-transparent" />

									{/* Profile Details Overlay */}
									<div className="absolute bottom-0 left-0 w-full p-8">
										<h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">
											{activeReview.nameEn}
										</h3>
										<p className="text-emerald-400 text-sm font-semibold mb-1">
											{activeReview.designationEn}
										</p>
										<p className="text-slate-400 text-[11px] mb-4">
											{activeReview.designationBn}
										</p>

										{/* Project Tag */}
										<div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 w-full">
											<MapPin className="w-4 h-4 text-amber-400 shrink-0" />
											<div className="overflow-hidden">
												<p className="text-xs text-white font-medium truncate">
													{activeReview.projectEn}
												</p>
												<p className="text-[10px] text-slate-300 truncate">
													{activeReview.projectBn}
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
