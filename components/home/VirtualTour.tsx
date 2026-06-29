"use client";

import { useState } from "react";
import { View, Box, Maximize, Rotate3d, Map } from "lucide-react";

// Bilingual Demo Data for 4 Beds, 3 Baths, etc.
const rooms = [
	{
		id: "drawing",
		nameEn: "Drawing Room",
		nameBn: "ড্রয়িং রুম",
		image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
	},
	{
		id: "dining",
		nameEn: "Dining Space",
		nameBn: "ডাইনিং স্পেস",
		image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
	},
	{
		id: "kitchen",
		nameEn: "Modern Kitchen",
		nameBn: "মডার্ন কিচেন",
		image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop",
	},
	{
		id: "masterBed",
		nameEn: "Master Bedroom",
		nameBn: "মাস্টার বেডরুম",
		image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2080&auto=format&fit=crop",
	},
	{
		id: "childBed",
		nameEn: "Children Bed",
		nameBn: "চিলড্রেন বেড",
		image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=2111&auto=format&fit=crop",
	},
	{
		id: "guestBed",
		nameEn: "Guest Bedroom",
		nameBn: "গেস্ট বেডরুম",
		image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057&auto=format&fit=crop",
	},
	{
		id: "masterBath",
		nameEn: "Master Bath",
		nameBn: "মাস্টার বাথরুম",
		image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
	},
	{
		id: "balcony",
		nameEn: "Balcony View",
		nameBn: "ব্যালকনি",
		image: "https://images.unsplash.com/photo-1580974582391-a6649c82a85f?q=80&w=2070&auto=format&fit=crop",
	},
];

export default function VirtualTour() {
	const [activeRoom, setActiveRoom] = useState(rooms[0]);

	return (
		<section
			id="virtual-tour"
			className="pt-16 md:pt-24 bg-slate-950 border-t border-white/5 relative"
		>
			<div className="px-4 lg:px-24 2xl:px-48">
				{/* Section Header */}
				<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
					<div>
						<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
							<Box className="w-4 h-4" /> 360° Walkthrough
						</div>
						<h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2">
							Step Inside Your{" "}
							<span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400">
								Future Home
							</span>
						</h2>
						<p className="text-slate-400 text-sm">
							আমাদের রেডি প্রজেক্টের ভেতরে ভার্চুয়ালি ঘুরে দেখুন।
							প্রতিটি রুমের বিস্তারিত ডিজাইন ও স্পেস এক্সপেরিয়েন্স
							করুন।
						</p>
					</div>
					<button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-medium transition-colors whitespace-nowrap">
						<Map className="w-5 h-5 text-emerald-400" /> View Floor
						Plan
					</button>
				</div>

				{/* 360 Viewer Container */}
				<div className="relative w-full h-[50vh] md:h-[70vh] bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
					{/* Note to Neo: In production, replace this <img> tag with the Matterport <iframe src="..."> */}
					<img
						key={activeRoom.id} // Forces re-render for animation on change
						src={activeRoom.image}
						alt={activeRoom.nameEn}
						className="w-full h-full object-cover transition-transform duration-[20s] ease-linear transform group-hover:scale-125 scale-105"
					/>

					{/* Interactive Overlay & Instructions */}
					<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

					<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity">
						<div className="flex flex-col items-center bg-black/50 backdrop-blur-md p-4 rounded-full">
							<Rotate3d className="w-10 h-10 text-white animate-pulse mb-1" />
							<span className="text-xs text-white tracking-widest uppercase font-semibold">
								Drag to View 360°
							</span>
						</div>
					</div>

					{/* Bottom Left: Room Info */}
					<div className="absolute bottom-6 left-6 z-10 pointer-events-none">
						<h3 className="text-3xl font-bold text-white drop-shadow-lg">
							{activeRoom.nameEn}
						</h3>
						<p className="text-lg text-emerald-400 font-medium drop-shadow-md">
							{activeRoom.nameBn}
						</p>
					</div>

					{/* Bottom Right: Fullscreen Button */}
					<button className="absolute bottom-6 right-6 z-10 p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white hover:bg-emerald-500 hover:border-emerald-500 transition-colors shadow-lg">
						<Maximize className="w-5 h-5" />
					</button>
				</div>

				{/* Room Navigation Slider */}
				<div className="mt-6 flex overflow-x-auto pb-4 gap-3 hide-scrollbar">
					{rooms.map((room) => (
						<button
							key={room.id}
							onClick={() => setActiveRoom(room)}
							className={`flex-shrink:0 flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-300 ${
								activeRoom.id === room.id
									? "bg-emerald-500/20 border-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.2)]"
									: "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-white"
							}`}
						>
							<View
								className={`w-4 h-4 ${activeRoom.id === room.id ? "text-emerald-400" : "text-slate-500"}`}
							/>
							<div className="text-left">
								<p className="text-sm font-bold leading-none mb-1">
									{room.nameEn}
								</p>
								<p
									className={`text-[10px] leading-none ${activeRoom.id === room.id ? "text-emerald-300" : "text-slate-500"}`}
								>
									{room.nameBn}
								</p>
							</div>
						</button>
					))}
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
