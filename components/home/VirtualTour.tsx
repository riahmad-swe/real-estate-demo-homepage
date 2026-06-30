"use client";

import { useState } from "react";
import {
	Box,
	Maximize,
	Map,
	Sofa,
	Microwave,
	BedDouble,
	BedSingle,
	Bath,
	House,
	TentTree,
} from "lucide-react";

// Bilingual Demo Data for 4 Beds, 3 Baths, etc.
const rooms = [
	{
		id: "outdoor",
		icon: House,
		nameEn: "Outdoor",
		nameBn: "আউটডোর",
		image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
	},
	{
		id: "dining",
		icon: Sofa,
		nameEn: "Dining Room",
		nameBn: "ডাইনিং রুম",
		image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
	},
	{
		id: "kitchen",
		icon: Microwave,
		nameEn: "Kitchen",
		nameBn: "কিচেন",
		image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop",
	},
	{
		id: "master-bedroom",
		icon: BedDouble,
		nameEn: "Master Bedroom",
		nameBn: "মাস্টার বেডরুম",
		image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2080&auto=format&fit=crop",
	},
	{
		id: "child-bedroom",
		icon: BedSingle,
		nameEn: "Child Bedroom",
		nameBn: "চাইল্ড বেডরুম",
		image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=2111&auto=format&fit=crop",
	},
	{
		id: "guest-bedroom",
		icon: BedDouble,
		nameEn: "Guest Bedroom",
		nameBn: "গেস্ট বেডরুম",
		image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057&auto=format&fit=crop",
	},
	{
		id: "master-bath",
		icon: Bath,
		nameEn: "Master Bath",
		nameBn: "মাস্টার বাথরুম",
		image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
	},
	{
		id: "balcony",
		icon: TentTree,
		nameEn: "Balcony View",
		nameBn: "ব্যালকনি",
		image: "https://images.unsplash.com/photo-1774252449329-6d411046f8e2?q=80&w=2070&auto=format&fit=crop",
	},
];

export default function VirtualTour() {
	const [activeRoom, setActiveRoom] = useState(rooms[0]);

	return (
		<section
			id="virtual-tour"
			className="pt-16 md:pt-24 relative"
		>
			<div className="px-4 lg:px-24 2xl:px-48">
				<div className="flex justify-center">
					<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-500 text-xs font-bold uppercase tracking-wider mb-2">
						<Box className="w-4 h-4" /> 360° Walkthrough
					</div>
				</div>
				{/* Section Header */}
				<div className="flex flex-col md:flex-row items-center justify-between mb-6 md:mb-12 gap-4 md:gap-6">
					<div>
						<h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-2 max-md:text-center">
							Step Inside Your{" "}
							<span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-indigo-500">
								Future Home
							</span>
						</h2>
						<p className="text-[13px] md:text-base text-slate-600 max-md:text-center">
							আমাদের রেডি প্রজেক্টের ভেতরে ভার্চুয়ালি ঘুরে দেখুন।
							প্রতিটি রুমের বিস্তারিত ডিজাইন ও স্পেস এক্সপেরিয়েন্স
							করুন।
						</p>
					</div>
					<button className="flex items-center gap-2 px-4 py-2.5 text-sm md:text-base bg-blue-500/10 hover:bg-blue-500/15 border border-blue-500/20 hover:border-blue-500/50 rounded-xl font-medium transition-all whitespace-nowrap group">
						<Map className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />{" "}
						View Floor Plan
					</button>
				</div>

				<div className="flex flex-col lg:flex-row gap-4">
					{/* 360 Viewer Container (Left Side on Desktop) */}
					<div className="w-full lg:w-4/5 h-130 md:h-140 bg-linear-to-r from-emerald-500 to-blue-500 p-1 rounded-3xl">
						<div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl group shrink-0">
							<img
								key={activeRoom.id} // Forces re-render for animation on change
								src={activeRoom.image}
								alt={activeRoom.nameEn}
								className="w-full h-full object-cover transition-transform duration-[15s] ease-linear transform group-hover:scale-125 scale-105"
							/>

							{/* Bottom Left: Room Info */}
							<div className="absolute bottom-4 left-4 z-10 pointer-events-none">
								<h3 className="text-2xl font-bold text-white drop-shadow-[0_0_1.25px_rgba(0,0,0)]">
									{activeRoom.nameEn}
								</h3>
								<p className="text-lg text-slate-300 drop-shadow-[0_0_1.25px_rgba(0,0,0)]">
									{activeRoom.nameBn}
								</p>
							</div>

							{/* Bottom Right: Fullscreen Button */}
							<button className="absolute bottom-4 right-4 z-10 p-2 bg-white/10 backdrop-blur-xs border border-white/20 rounded-xl text-slate-700 hover:bg-blue-500/30 hover:border-blue-500/50 transition-colors shadow-lg cursor-pointer">
								<Maximize className="w-6 h-6" />
							</button>
						</div>
					</div>

					{/* Room Navigation Slider (Right Side on Desktop, Bottom on Mobile) */}
					<div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:overflow-x-hidden w-full lg:w-1/4 h-auto md:h-140 pb-2 lg:pb-0 pr-1">
						{rooms.map((room) => {
							const Icon = room.icon;
							return (
								<button
									key={room.id}
									onClick={() => setActiveRoom(room)}
									className={`shrink-0 lg:w-full flex items-center gap-3 px-4 py-2 md:py-3 rounded-xl border transition-all duration-300 text-left ${
										activeRoom.id === room.id
											? "bg-blue-500/20 border-blue-500/50 text-blue-500 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
											: "border-emerald-500/40 bg-emerald-500/5 text-slate-600 hover:border-blue-500/50 hover:bg-blue-500/10"
									}`}
								>
									<Icon
										className={`w-5 h-5 md:w-6 md:h-6 shrink-0 ${activeRoom.id === room.id ? "text-emerald-500" : "text-slate-500"}`}
									/>
									<div className="text-left overflow-hidden">
										<p className="text-sm md:text-base font-bold mb-0.5 line-clamp-1">
											{room.nameEn}
										</p>
										<p className="text-[10px] md:text-xs line-clamp-1 text-slate-600">
											{room.nameBn}
										</p>
									</div>
								</button>
							);
						})}
					</div>
				</div>
			</div>

			{/* Global CSS for hiding scrollbar in standard Next.js setup */}
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
