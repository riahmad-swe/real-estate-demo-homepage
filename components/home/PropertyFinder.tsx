"use client";

import { useState } from "react";
import {
	Search,
	MapPin,
	Building2,
	Bed,
	GraduationCap,
	Hospital,
	Train,
	CheckCircle2,
} from "lucide-react";

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
		bhk: "3 BHK",
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
		bhk: "4 BHK",
		status: "Ongoing",
		image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
	},
];

export default function PropertyFinderMap() {
	const [activeAmenity, setActiveAmenity] = useState<
		"education" | "healthcare" | "transit" | "none"
	>("none");
	const [bhkFilter, setBhkFilter] = useState("All");

	return (
		<section className="py-24 bg-slate-950 border-t border-white/5 relative">
			<div className="max-w-350 mx-auto px-6">
				{/* Header Section */}
				<div className="mb-12">
					<h2 className="text-4xl font-extrabold text-white mb-3">
						Explore Your{" "}
						<span className="text-emerald-400">Neighborhood</span>
					</h2>
					<p className="text-slate-400 text-sm">
						Find the perfect home with our advanced location
						intelligence map. <br />
						লোকেশন ইন্টেলিজেন্স ম্যাপের মাধ্যমে আপনার স্বপ্নের
						প্রজেক্ট এবং তার আশেপাশের সুবিধাগুলো এক্সপ্লোর করুন।
					</p>
				</div>

				{/* Top Filters Bar (Glassmorphism) */}
				<div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg">
					<div className="flex-1 flex items-center bg-slate-900 border border-white/10 rounded-xl px-4 py-3">
						<Search className="w-5 h-5 text-slate-400 mr-3" />
						<input
							type="text"
							placeholder="Search location (e.g. Upashahar, Rajshahi)..."
							className="bg-transparent border-none text-white w-full focus:outline-none text-sm placeholder:text-slate-500"
							defaultValue="Upashahar Mor, Rajshahi"
						/>
					</div>

					<div className="flex gap-4">
						<select
							className="bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500"
							value={bhkFilter}
							onChange={(e) => setBhkFilter(e.target.value)}
						>
							<option value="All">All BHK</option>
							<option value="3 BHK">3 BHK</option>
							<option value="4 BHK">4 BHK</option>
						</select>

						<button className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 py-3 rounded-xl transition-colors text-sm">
							Search
						</button>
					</div>
				</div>

				{/* Main Split Layout: List & Map */}
				<div className="grid lg:grid-cols-3 gap-8 h-150">
					{/* Left Column: Property List */}
					<div className="col-span-1 flex flex-col gap-4 overflow-y-auto pr-2 hide-scrollbar">
						{demoProperties
							.filter(
								(p) =>
									bhkFilter === "All" || p.bhk === bhkFilter,
							)
							.map((property) => (
								<div
									key={property.id}
									className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-colors group cursor-pointer"
								>
									<div className="h-40 overflow-hidden relative">
										<img
											src={property.image}
											alt={property.nameEn}
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
										/>
										<div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-emerald-400 border border-emerald-500/30">
											{property.status}
										</div>
									</div>
									<div className="p-5">
										<h3 className="text-xl font-bold text-white mb-1">
											{property.nameEn}
										</h3>
										<h4 className="text-xs text-slate-400 mb-3 font-medium">
											{property.nameBn}
										</h4>

										<div className="flex items-center text-slate-400 text-xs mb-4">
											<MapPin className="w-3.5 h-3.5 mr-1 text-emerald-400" />{" "}
											{property.locationEn}
										</div>

										<div className="flex justify-between items-center border-t border-white/10 pt-4">
											<span className="text-lg font-bold text-emerald-400">
												{property.price}
											</span>
											<div className="flex gap-3 text-xs text-slate-300 font-medium">
												<span className="flex items-center gap-1">
													<Building2 className="w-3.5 h-3.5" />{" "}
													{property.size}
												</span>
												<span className="flex items-center gap-1">
													<Bed className="w-3.5 h-3.5" />{" "}
													{property.bhk}
												</span>
											</div>
										</div>
									</div>
								</div>
							))}
					</div>

					{/* Right Column: Interactive Map & Location Intelligence */}
					<div className="col-span-1 lg:col-span-2 relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
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
						<div className="absolute top-6 left-6 z-10 flex flex-col gap-3">
							<button
								onClick={() =>
									setActiveAmenity(
										activeAmenity === "education"
											? "none"
											: "education",
									)
								}
								className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs transition-all shadow-lg backdrop-blur-md border ${
									activeAmenity === "education"
										? "bg-emerald-500 text-slate-900 border-emerald-400"
										: "bg-slate-900/80 text-white border-white/10 hover:bg-slate-800"
								}`}
							>
								<GraduationCap className="w-4 h-4" /> Nearby
								Schools
							</button>

							<button
								onClick={() =>
									setActiveAmenity(
										activeAmenity === "healthcare"
											? "none"
											: "healthcare",
									)
								}
								className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs transition-all shadow-lg backdrop-blur-md border ${
									activeAmenity === "healthcare"
										? "bg-blue-500 text-white border-blue-400"
										: "bg-slate-900/80 text-white border-white/10 hover:bg-slate-800"
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
								className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs transition-all shadow-lg backdrop-blur-md border ${
									activeAmenity === "transit"
										? "bg-amber-500 text-slate-900 border-amber-400"
										: "bg-slate-900/80 text-white border-white/10 hover:bg-slate-800"
								}`}
							>
								<Train className="w-4 h-4" /> Transit & Rail
							</button>
						</div>

						{/* Simulated Data Popup based on active amenity */}
						{activeAmenity !== "none" && (
							<div className="absolute bottom-6 right-6 z-10 bg-slate-900/95 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-2xl w-64 animate-in slide-in-from-right-8 duration-300">
								<h4 className="text-white font-bold mb-3 flex items-center gap-2">
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

								<ul className="space-y-3">
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
