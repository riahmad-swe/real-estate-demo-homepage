"use client";

import { useState } from "react";
import { Search, MapPin, GraduationCap, Hospital, Train } from "lucide-react";

// Bilingual Demo Data around K M Max Tower, Upashahar, Rajshahi
const demoProperties = [
	{
		id: 1,
		nameEn: "K M Max Tower",
		nameBn: "কে এম ম্যাক্স টাওয়ার",
		locationEn: "Upashahar Mor, Rajshahi",
		locationBn: "উপশহর মোড়, রাজশাহী",
		price: "৳ ৮৫,০০,০০০",
		size: "1850 sqft",
		status: "Ready",
		image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop",
	},
	{
		id: 2,
		nameEn: "ANB Padma Residency",
		nameBn: "এএনবি পদ্মা রেসিডেন্সি",
		locationEn: "Padma R/A, Rajshahi",
		locationBn: "পদ্মা আ/এ, রাজশাহী",
		price: "৳ ১,২০,০০,০০০",
		size: "2200 sqft",
		status: "Ongoing",
		image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
	},
];

export default function PropertyFinderMap() {
	const [activeAmenity, setActiveAmenity] = useState<
		"education" | "healthcare" | "transit" | "none"
	>("none");

	return (
		<section
			id="neighborhood"
			className="pt-16 md:pt-24 relative"
		>
			<div className="max-w-350 mx-auto px-4">
				{/* Header Section */}
				<div className="mb-6 text-center">
					<h2 className="text-2xl lg:text-4xl font-extrabold mb-2">
						Explore Your{" "}
						<span className="bg-linear-to-r from-emerald-500 to-indigo-500 bg-clip-text text-transparent">
							Neighborhood
						</span>
					</h2>
					<p className="text-slate-600 text-sm lg:text-base">
						Find the perfect home with our advanced location
						intelligence map. <br />
						লোকেশন ইন্টেলিজেন্স ম্যাপের মাধ্যমে আপনার স্বপ্নের
						প্রজেক্ট এবং তার আশেপাশের সুবিধাগুলো খুঁজে দেখুন।
					</p>
				</div>

				{/* Top Filters Bar (Glassmorphism) */}
				<div className="flex flex-col md:flex-row gap-2 mb-8">
					<div className="flex-1 flex items-center bg-white border border-black/15 rounded-xl px-4 py-3 shadow-md shadow-black/10">
						<Search className="w-5 h-5 text-slate-400 mr-3" />
						<input
							type="text"
							placeholder="Search location (e.g. Upashahar, Rajshahi)..."
							className="bg-transparent border-none w-full focus:outline-none text-sm placeholder:text-slate-400"
							defaultValue="Upashahar Mor, Rajshahi"
						/>
					</div>

					<button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-2 rounded-xl transition-colors shadow-md shadow-black/10">
						Search
					</button>
				</div>

				{/* Main Split Layout: List & Map */}
				<div className="grid lg:grid-cols-3 gap-8">
					{/* Left Column: Property List */}
					<div className="col-span-1 flex flex-col gap-4 overflow-y-auto pr-2">
						{demoProperties.map((property) => (
							<div
								key={property.id}
								className="rounded-2xl overflow-hidden transition-all group cursor-pointer shadow-lg shadow-black/5 hover:shadow-black/10 relative h-64 md:h-72 w-full"
							>
								{/* Background Image Container */}
								<img
									src={property.image}
									alt={property.nameEn}
									className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
								/>

								{/* Top-left Status Badge */}
								<div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-blue-400 border border-blue-500/50 z-20">
									{property.status}
								</div>

								{/* Bottom Gradient Overlay for Text Readability */}
								<div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/40 to-transparent z-10 pointer-events-none" />

								{/* Bottom Content Overlay (Text) */}
								<div className="absolute bottom-0 left-0 w-full p-3 md:p-4 z-20 pointer-events-none flex items-end justify-between gap-4">
									<div>
										<h3 className="text-[15px] md:text-lg font-extrabold text-white drop-shadow-md tracking-tight">
											{property.nameEn}
										</h3>

										{/* Using nameBn as the sub-title / role as per your layout */}
										<h4 className="text-xs md:text-sm text-slate-300 font-bold uppercase tracking-wider -mt-0.5">
											{property.nameBn}
										</h4>
									</div>

									{/* Location (Optional, hiding it on very small screens to keep it clean like the image) */}
									<div className="flex items-center text-slate-300 text-xs md:text-sm font-medium">
										<MapPin className="w-4 h-4 mr-1 text-emerald-400 shrink-0" />
										<span className="line-clamp-1">
											{property.locationEn}
										</span>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Right Column: Interactive Map & Location Intelligence */}
					<div className="col-span-1 lg:col-span-2 relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group h-120 md:h-140">
						{/* Google Maps Iframe (Centered on Upashahar, Rajshahi) */}
						<iframe
							src="https://maps.google.com/maps?q=K%20M%20Max%20Tower,%20Rajshahi&t=&z=15&ie=UTF8&iwloc=&output=embed"
							width="100%"
							height="100%"
							style={{
								border: 0,
								filter: "invert(90%) hue-rotate(180deg) contrast(80%) grayscale(20%)",
							}}
							allowFullScreen={false}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="absolute inset-0 z-0 transition-opacity duration-300"
						/>

						{/* Custom Location Intelligence Overlay (Simulated) */}
						<div className="absolute top-3 right-3 z-10 flex flex-col bg-slate-950/50 text-white rounded-xl backdrop-blur-sm overflow-hidden">
							<button
								onClick={() =>
									setActiveAmenity(
										activeAmenity === "education"
											? "none"
											: "education",
									)
								}
								className={`flex items-center gap-1.5 px-3 py-2 font-semibold text-xs transition-all ${
									activeAmenity === "education"
										? "bg-blue-500"
										: "hover:bg-blue-500/50"
								}`}
							>
								<GraduationCap className="w-4 h-4" /> Schools
							</button>

							<button
								onClick={() =>
									setActiveAmenity(
										activeAmenity === "healthcare"
											? "none"
											: "healthcare",
									)
								}
								className={`flex items-center gap-1.5 px-3 py-2 font-semibold text-xs transition-all ${
									activeAmenity === "healthcare"
										? "bg-blue-500"
										: "hover:bg-blue-500/50"
								}`}
							>
								<Hospital className="w-4 h-4" /> Hospitals
							</button>

							<button
								onClick={() =>
									setActiveAmenity(
										activeAmenity === "transit"
											? "none"
											: "transit",
									)
								}
								className={`flex items-center gap-1.5 px-3 py-2 font-semibold text-xs transition-all ${
									activeAmenity === "transit"
										? "bg-blue-500"
										: "hover:bg-blue-500/50"
								}`}
							>
								<Train className="w-4 h-4" /> Transit & Rail
							</button>
						</div>

						{/* Simulated Data Popup based on active amenity */}
						{activeAmenity !== "none" && (
							<div className="absolute bottom-3 right-3 z-10 bg-slate-950/50 backdrop-blur-sm border border-white/10 p-3 rounded-2xl shadow-2xl w-64 animate-in slide-in-from-right-8 duration-300">
								<h4 className="text-white font-bold mb-2 flex items-center gap-1.5 text-sm">
									{activeAmenity === "education" && (
										<>
											<GraduationCap className="w-4 h-4 text-emerald-400" />{" "}
											Education Zone
										</>
									)}
									{activeAmenity === "healthcare" && (
										<>
											<Hospital className="w-4 h-4 text-blue-400" />{" "}
											Healthcare Zone
										</>
									)}
									{activeAmenity === "transit" && (
										<>
											<Train className="w-4 h-4 text-amber-400" />{" "}
											Transit Hub
										</>
									)}
								</h4>

								<ul className="space-y-2">
									{activeAmenity === "education" && (
										<>
											<li className="flex justify-between items-start text-xs">
												<span className="text-slate-300">
													Cantonment Public School
												</span>{" "}
												<span className="text-emerald-400 font-bold ml-2">
													1.2km
												</span>
											</li>
											<li className="flex justify-between items-start text-xs">
												<span className="text-slate-300">
													Rajshahi University
												</span>{" "}
												<span className="text-emerald-400 font-bold ml-2">
													3.5km
												</span>
											</li>
										</>
									)}
									{activeAmenity === "healthcare" && (
										<>
											<li className="flex justify-between items-start text-xs">
												<span className="text-slate-300">
													RMCH (Medical College)
												</span>{" "}
												<span className="text-blue-400 font-bold ml-2">
													2.8km
												</span>
											</li>
											<li className="flex justify-between items-start text-xs">
												<span className="text-slate-300">
													Islami Bank Hospital
												</span>{" "}
												<span className="text-blue-400 font-bold ml-2">
													1.5km
												</span>
											</li>
										</>
									)}
									{activeAmenity === "transit" && (
										<>
											<li className="flex justify-between items-start text-xs">
												<span className="text-slate-300">
													Rajshahi Railway Station
												</span>{" "}
												<span className="text-amber-400 font-bold ml-2">
													1.8km
												</span>
											</li>
											<li className="flex justify-between items-start text-xs">
												<span className="text-slate-300">
													Shiroil Bus Terminal
												</span>{" "}
												<span className="text-amber-400 font-bold ml-2">
													2.0km
												</span>
											</li>
										</>
									)}
								</ul>
							</div>
						)}

						{/* Target Indicator Overlay for Center */}
						<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
							<div className="relative">
								<div className="w-8 h-8 bg-emerald-500/20 rounded-full animate-ping absolute inset-0" />
								<MapPin className="w-8 h-8 text-emerald-500 drop-shadow-xl relative z-10" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<style
				dangerouslySetInnerHTML={{
					__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `,
				}}
			/>
		</section>
	);
}
