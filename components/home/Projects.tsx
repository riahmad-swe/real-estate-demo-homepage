"use client";

import { useState } from "react";
// তোমার আগের ProjectDetailsModal ইম্পোর্ট ঠিক রাখা হয়েছে
import ProjectDetailsModal from "./ProjectDetailsModal";
import {
	MapPin,
	Building2,
	Ruler,
	Flame,
	CalendarCheck,
	ShieldCheck,
	ArrowRight,
	UnfoldHorizontal,
} from "lucide-react";

// --------------------------------------------------------
// 1. ডেমো ডেটা (Data Models) - পরবর্তীতে ডাটাবেজ থেকে আসবে
// --------------------------------------------------------

const activeProjectsData = [
	{
		id: "act-1",
		name: "ANB Sky View",
		location: "Padma Residential Area, Rajshahi",
		type: "Residential",
		size: "4 BHK",
		unitsLeft: 3, // < 5 (Glowing Alert)
		progress: { piling: 100, structure: 75, finishing: 20 },
		image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop",
	},
	{
		id: "act-2",
		name: "ANB Commercial Square",
		location: "Shaheb Bazar, Rajshahi",
		type: "Commercial",
		size: "Open Space",
		unitsLeft: 12,
		progress: { piling: 100, structure: 100, finishing: 45 },
		image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
	},
	{
		id: "act-3",
		name: "ANB Green Valley",
		location: "Upashahar, Rajshahi",
		type: "Residential",
		size: "3 BHK",
		unitsLeft: 2, // < 5 (Glowing Alert)
		progress: { piling: 100, structure: 40, finishing: 0 },
		image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop",
	},
];

const completedProjectsData = [
	{
		id: "comp-1",
		name: "ANB Alpine Tower",
		location: "Kazihata, Rajshahi",
		handoverDate: "January 2025",
		certNumber: "RDA-2023/45 (Approved)",
		// স্লাইডারের জন্য ২টি ছবি
		renderImg:
			"https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop",
		realityImg:
			"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000&auto=format&fit=crop",
	},
	{
		id: "comp-2",
		name: "ANB River View",
		location: "Talaimari, Rajshahi",
		handoverDate: "November 2024",
		certNumber: "RDA-2022/12 (Approved)",
		renderImg:
			"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
		realityImg:
			"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
	},
	{
		id: "comp-3",
		name: "ANB Heritage",
		location: "Boalia, Rajshahi",
		handoverDate: "August 2023",
		certNumber: "RDA-2021/88 (Approved)",
		renderImg:
			"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop",
		realityImg:
			"https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1000&auto=format&fit=crop",
	},
];

// --------------------------------------------------------
// 2. Custom Render vs Reality Slider Component
// --------------------------------------------------------
const RenderVsRealitySlider = ({
	renderImg,
	realityImg,
}: {
	renderImg: string;
	realityImg: string;
}) => {
	const [sliderPos, setSliderPos] = useState(50);

	return (
		<div className="relative w-full h-64 md:h-72 rounded-t-2xl overflow-hidden group select-none">
			{/* Reality Image (Background) */}
			<img
				src={realityImg}
				alt="Reality"
				className="absolute inset-0 w-full h-full object-cover pointer-events-none"
			/>

			{/* Render Image (Clipped dynamically based on slider state) */}
			<div
				className="absolute inset-0 w-full h-full pointer-events-none"
				style={{
					clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
				}}
			>
				<img
					src={renderImg}
					alt="Render 3D"
					className="absolute inset-0 w-full h-full object-cover"
				/>
			</div>

			{/* Slider Control Handle */}
			<div
				className="absolute top-0 bottom-0 w-1 bg-black cursor-ew-resize flex items-center justify-center pointer-events-none z-10"
				style={{ left: `calc(${sliderPos}% - 2px)` }}
			>
				<div className="min-w-6 min-h-6 bg-black rounded-full shadow-lg flex items-center justify-center">
					<UnfoldHorizontal className="w-4 h-4 text-emerald-400" />
				</div>
			</div>

			{/* Hidden Range Input to control state naturally */}
			<input
				type="range"
				min="0"
				max="100"
				value={sliderPos}
				onChange={(e) => setSliderPos(Number(e.target.value))}
				className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
			/>

			{/* Labels */}
			<div className="absolute top-4 left-4 bg-black/80 backdrop-blur text-white text-[10px] uppercase font-bold px-3 py-1.5 rounded-lg z-10 pointer-events-none">
				3D Render
			</div>
			<div className="absolute top-4 right-4 bg-emerald-500/80 backdrop-blur text-black text-[10px] uppercase font-bold px-3 py-1.5 rounded-lg z-10 pointer-events-none">
				Reality
			</div>
		</div>
	);
};

// --------------------------------------------------------
// 3. Main Projects Section
// --------------------------------------------------------
export default function Projects() {
	const [activeTab, setActiveTab] = useState<"active" | "completed">(
		"active",
	);
	const [selectedProject, setSelectedProject] = useState<
		| {
				id: string;
				name: string;
				location: string;
				handoverDate: string;
				certNumber: string;
				renderImg: string;
				realityImg: string;
		  }
		| {
				id: string;
				name: string;
				location: string;
				type: string;
				size: string;
				unitsLeft: number;
				progress: {
					piling: number;
					structure: number;
					finishing: number;
				};
				image: string;
		  }
		| null
	>(null);

	return (
		<section className="py-8 mt-8 md:py-12 md:mt-12 lg:px-24 xl:px-48 px-4 relative">
			{/* Ambient Background Glow */}
			<div className="absolute top-1/4 left-0 w-125 h-125 bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
			<div className="absolute bottom-0 right-0 w-125 h-125 bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none" />

			{/* Header & Tab Controllers */}
			<div className="relative z-10 mb-8 flex flex-col items-center">
				<h2 className="text-2xl md:text-4xl font-extrabold mb-6 tracking-tight text-center">
					Our{" "}
					<span className="bg-linear-to-r from-emerald-500 to-indigo-500 bg-clip-text text-transparent">
						Masterpieces
					</span>
				</h2>

				<div className="flex bg-slate-900 p-1 rounded-full border border-white/10 w-fit shadow-xl">
					<button
						onClick={() => setActiveTab("active")}
						className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
							activeTab === "active"
								? "bg-blue-500 text-white shadow-md"
								: "text-slate-300 hover:text-white"
						}`}
					>
						Active Projects
					</button>
					<button
						onClick={() => setActiveTab("completed")}
						className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
							activeTab === "completed"
								? "bg-emerald-500 text-slate-950 shadow-md"
								: "text-slate-300 hover:text-white"
						}`}
					>
						Completed Projects
					</button>
				</div>
			</div>

			{/* =========================================
                TAB 1: ACTIVE PROJECTS
            ============================================= */}
			{activeTab === "active" && (
				<div className="animate-in fade-in slide-in-from-bottom-8 duration-500 relative z-10">
					{/* Active Projects Grid */}
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{activeProjectsData.length > 0 ? (
							activeProjectsData.map((p) => (
								<div
									key={p.id}
									className="bg-slate-900 rounded-3xl overflow-hidden transition-all duration-300 group flex flex-col shadow-xl"
								>
									{/* Image & Live Inventory Alert */}
									<div className="relative h-56 overflow-hidden">
										<img
											src={p.image}
											alt={p.name}
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
										/>

										{/* Inventory Badge */}
										{p.unitsLeft < 5 && (
											<div className="absolute top-2 right-2 bg-orange-500/75 backdrop-blur text-white text-xs font-bold px-2 py-1.5 rounded-lg flex items-center gap-1 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.5)] border border-orange-400">
												<Flame className="w-3.5 h-3.5" />{" "}
												Only {p.unitsLeft} Units Left!
											</div>
										)}
									</div>

									{/* Details */}
									<div className="p-5 flex-1 flex flex-col">
										<h3 className="text-xl font-bold text-white mb-2">
											{p.name}
										</h3>

										<div className="space-y-2 mb-4">
											<p className="flex items-center gap-2 text-sm text-slate-300">
												<MapPin className="w-4 h-4 text-emerald-400 shrink-0" />{" "}
												{p.location}
											</p>
											<p className="flex items-center gap-2 text-sm text-slate-300">
												<Building2 className="w-4 h-4 text-blue-400 shrink-0" />{" "}
												{p.type}
											</p>
											<p className="flex items-center gap-2 text-sm text-slate-300">
												<Ruler className="w-4 h-4 text-purple-400 shrink-0" />{" "}
												{p.size}
											</p>
										</div>

										{/* Construction Milestone Tracker */}
										<div className="mt-auto mb-6">
											<p className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-3">
												Construction Progress
											</p>

											<div className="space-y-2">
												{/* Piling */}
												<div>
													<div className="flex justify-between text-xs mb-1">
														<span className="text-slate-300 font-medium">
															Piling & Foundation
														</span>
														<span className="text-emerald-400">
															{p.progress.piling}%
														</span>
													</div>
													<div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
														<div
															className="h-full bg-emerald-500 rounded-full"
															style={{
																width: `${p.progress.piling}%`,
															}}
														/>
													</div>
												</div>
												{/* Structure */}
												<div>
													<div className="flex justify-between text-xs mb-1">
														<span className="text-slate-300 font-medium">
															Super Structure
														</span>
														<span
															className={
																p.progress
																	.structure >
																0
																	? "text-emerald-400"
																	: "text-slate-500"
															}
														>
															{
																p.progress
																	.structure
															}
															%
														</span>
													</div>
													<div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
														<div
															className="h-full bg-blue-500 rounded-full transition-all duration-1000"
															style={{
																width: `${p.progress.structure}%`,
															}}
														/>
													</div>
												</div>
												{/* Finishing */}
												<div>
													<div className="flex justify-between text-xs mb-1">
														<span className="text-slate-300 font-medium">
															Finishing Works
														</span>
														<span
															className={
																p.progress
																	.finishing >
																0
																	? "text-emerald-400"
																	: "text-slate-500"
															}
														>
															{
																p.progress
																	.finishing
															}
															%
														</span>
													</div>
													<div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
														<div
															className="h-full bg-purple-500 rounded-full transition-all duration-1000"
															style={{
																width: `${p.progress.finishing}%`,
															}}
														/>
													</div>
												</div>
											</div>
										</div>

										{/* Action Button */}
										<button
											onClick={() =>
												setSelectedProject(p)
											}
											className="w-full text-[15px] py-2 bg-white/5 hover:bg-blue-500 text-blue-400 hover:text-slate-950 font-bold rounded-xl transition-all border border-blue-500/30 hover:border-blue-500 flex justify-center items-center gap-1.5"
										>
											View Details{" "}
											<ArrowRight className="w-4 h-4" />
										</button>
									</div>
								</div>
							))
						) : (
							<div className="col-span-full py-12 text-center text-slate-500">
								No active projects found matching your criteria.
								Try adjusting the filters.
							</div>
						)}
					</div>
				</div>
			)}

			{/* =========================================
                TAB 2: COMPLETED PROJECTS
            ============================================= */}
			{activeTab === "completed" && (
				<div className="animate-in fade-in slide-in-from-bottom-8 duration-500 relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{completedProjectsData.map((p) => (
						<div
							key={p.id}
							className="bg-slate-900 rounded-3xl overflow-hidden flex flex-col shadow-xl"
						>
							{/* Interactive Render vs Reality Slider */}
							<RenderVsRealitySlider
								renderImg={p.renderImg}
								realityImg={p.realityImg}
							/>

							{/* Details & Compliance Badges */}
							<div className="p-5 flex-1 flex flex-col">
								<h3 className="text-xl font-bold text-white mb-1">
									{p.name}
								</h3>

								<p className="flex items-center gap-2 text-sm text-slate-300 mb-4">
									<MapPin className="w-4 h-4 text-emerald-400 shrink-0" />{" "}
									{p.location}
								</p>

								<div className="mt-auto space-y-3 border-t border-white/15 pt-4">
									{/* Handover Timeline */}
									<div className="flex items-start gap-3">
										<div className="p-2 bg-blue-500/15 rounded-lg shrink-0">
											<CalendarCheck className="w-5 h-5 text-blue-400" />
										</div>
										<div>
											<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
												Handover Timeline
											</p>
											<p className="text-sm font-medium text-white">
												Successfully Delivered in{" "}
												{p.handoverDate}
											</p>
										</div>
									</div>

									{/* Compliance Badge */}
									<div className="flex items-start gap-3">
										<div className="p-2 bg-emerald-500/15 rounded-lg shrink-0">
											<ShieldCheck className="w-5 h-5 text-emerald-400" />
										</div>
										<div>
											<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
												Legal Compliance
											</p>
											<p className="text-sm font-medium text-emerald-400">
												{p.certNumber}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			)}

			{/* Modal Logic (তোমার আগের কোড অনুযায়ী) */}
			{selectedProject && (
				<ProjectDetailsModal
					project={selectedProject}
					onClose={() => setSelectedProject(null)}
				/>
			)}
		</section>
	);
}
