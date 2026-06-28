"use client";

import { useState } from "react";
import { Mail, Award, GraduationCap, Briefcase } from "lucide-react";

const leaders = [
	{
		id: 1,
		name: "A. N. B. Rahman",
		roleEn: "Founder & CEO",
		roleBn: "প্রতিষ্ঠাতা ও সিইও",
		bioEn: "Visionary leader with over two decades of experience. Committed to uncompromised quality and timely delivery.",
		bioBn: "দুই দশকেরও বেশি অভিজ্ঞতাসম্পন্ন ভিশনারি লিডার। মানসম্পন্ন নির্মাণ ও সঠিক সময়ে প্রজেক্ট হস্তান্তরে বদ্ধপরিকর।",
		qualifications: [
			{
				icon: GraduationCap,
				textEn: "B.Sc in Civil Engineering, BUET",
				textBn: "বি.এসসি ইন সিভিল ইঞ্জিনিয়ারিং, বুয়েট",
			},
			{
				icon: Award,
				textEn: "Real Estate Personality of the Year 2024",
				textBn: "রিয়েল এস্টেট পার্সোনালিটি অফ দ্য ইয়ার ২০২৪",
			},
		],
		image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop",
		email: "ceo@anbunique.com",
	},
	{
		id: 2,
		name: "Arch. Nusrat Jahan",
		roleEn: "Chief Architect",
		roleBn: "প্রধান স্থপতি",
		bioEn: "Pioneer of sustainable architecture. Blends modern aesthetics with functional living spaces.",
		bioBn: "টেকসই আর্কিটেকচারের অন্যতম প্রবর্তক। মডার্ন এস্থেটিক্স এবং ফাংশনাল স্পেসের দারুণ মেলবন্ধন ঘটান।",
		qualifications: [
			{
				icon: GraduationCap,
				textEn: "M.Arch, NUS, Singapore",
				textBn: "এম.আর্ক, এনইউএস, সিঙ্গাপুর",
			},
			{
				icon: Briefcase,
				textEn: "Fellow Member, IAB",
				textBn: "ফেলো মেম্বার, আইএবি",
			},
		],
		image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop",
		email: "architect@anbunique.com",
	},
	{
		id: 3,
		name: "Dr. Kazi Tanvir",
		roleEn: "Lead Structural Engineer",
		roleBn: "প্রধান স্ট্রাকচারাল ইঞ্জিনিয়ার",
		bioEn: "Expert in seismic engineering and high-rise structural integrity.",
		bioBn: "ভূমিকম্প প্রতিরোধী নকশা এবং হাই-রাইজ বিল্ডিং স্ট্রাকচারে বিশেষজ্ঞ।",
		qualifications: [
			{
				icon: GraduationCap,
				textEn: "Ph.D in Structural Eng., Tokyo University",
				textBn: "পিএইচডি (স্ট্রাকচারাল ইঞ্জিনিয়ারিং), টোকিও বিশ্ববিদ্যালয়",
			},
			{
				icon: Award,
				textEn: "Seismic Design Excellence Award",
				textBn: "সিসমিক ডিজাইন এক্সিলেন্স অ্যাওয়ার্ড",
			},
		],
		image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000&auto=format&fit=crop",
		email: "engineer@anbunique.com",
	},
	{
		id: 4,
		name: "Sarah Karim",
		roleEn: "Director of Marketing",
		roleBn: "পরিচালক, মার্কেটিং",
		bioEn: "Driving brand growth through customer-centric strategies and market analysis.",
		bioBn: "কাস্টমার-সেন্ট্রিক স্ট্র্যাটেজি এবং মার্কেট অ্যানালাইসিসের মাধ্যমে ব্র্যান্ডের ভ্যালু বাড়াতে দক্ষ।",
		qualifications: [
			{
				icon: Briefcase,
				textEn: "MBA, IBA, Dhaka University",
				textBn: "এমবিএ, আইবিএ, ঢাকা বিশ্ববিদ্যালয়",
			},
			{
				icon: Award,
				textEn: "Top Marketing Leader Award 2025",
				textBn: "টপ মার্কেটিং লিডার অ্যাওয়ার্ড ২০২৫",
			},
		],
		image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2000&auto=format&fit=crop",
		email: "marketing@anbunique.com",
	},
	{
		id: 5,
		name: "Rahim Ahmed",
		roleEn: "Project Manager",
		roleBn: "প্রজেক্ট ম্যানেজার",
		bioEn: "Overseeing on-site execution and ensuring quality compliance across all active projects.",
		bioBn: "অন-সাইট এক্সিকিউশন তদারকি এবং সব প্রজেক্টের কোয়ালিটি কমপ্লায়েন্স নিশ্চিতকরণে দক্ষ।",
		qualifications: [
			{
				icon: GraduationCap,
				textEn: "B.Sc in Civil Engineering, KUET",
				textBn: "বি.এসসি ইন সিভিল ইঞ্জিনিয়ারিং, কুয়েট",
			},
			{
				icon: Briefcase,
				textEn: "PMP Certified Professional",
				textBn: "পিএমপি সার্টিফাইড প্রফেশনাল",
			},
		],
		image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop",
		email: "project@anbunique.com",
	},
];

export default function Leadership() {
	const [activeId, setActiveId] = useState(1);
	const activeLeader = leaders.find((l) => l.id === activeId) || leaders[0];

	return (
		<section className="py-24 bg-slate-950 relative border-t border-white/5">
			<div className="max-w-7xl mx-auto px-6">
				<div className="mb-16">
					<h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
						The Minds Behind{" "}
						<span className="bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
							The Masterpieces
						</span>
					</h2>
				</div>

				<div className="bg-slate-900/40 border border-white/10 rounded-0.5 p-6 md:p-8 lg:p-12 shadow-2xl backdrop-blur-sm">
					<div className="grid lg:grid-cols-12 gap-12 items-center">
						<div className="lg:col-span-5 relative">
							<div className="relative h-100 md:h-125 w-full rounded-2xl overflow-hidden bg-slate-800">
								<div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay z-10" />
								<img
									key={activeLeader.id}
									src={activeLeader.image}
									alt={activeLeader.name}
									className="absolute inset-0 w-full h-full object-cover object-top animate-in fade-in zoom-in-95 duration-700"
								/>
								<div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/20 to-transparent z-10" />
								<div className="absolute bottom-6 left-6 z-20">
									<h3 className="text-3xl font-black text-white tracking-tight drop-shadow-md">
										{activeLeader.name}
									</h3>
									<p className="text-emerald-400 font-bold uppercase tracking-widest text-xs mt-1">
										{activeLeader.roleEn}
									</p>
								</div>
							</div>
						</div>

						<div className="lg:col-span-7 flex flex-col justify-center min-h-100">
							<div
								key={`details-${activeLeader.id}`}
								className="animate-in fade-in slide-in-from-right-8 duration-700"
							>
								<div className="mb-8">
									<h4 className="text-2xl font-bold text-white mb-2">
										{activeLeader.roleBn}
									</h4>
									<p className="text-slate-400 text-sm leading-relaxed mb-3">
										{activeLeader.bioEn}
									</p>
									<p className="text-slate-500 text-xs leading-relaxed font-medium">
										{activeLeader.bioBn}
									</p>
								</div>
								<div className="space-y-4 mb-10">
									<p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4">
										Credentials & Expertise
									</p>
									{activeLeader.qualifications.map(
										(qual, idx) => (
											<div
												key={idx}
												className="flex items-start gap-4"
											>
												<div className="p-2 bg-white/5 rounded-lg border border-white/5 text-emerald-400 shrink-0">
													<qual.icon className="w-4 h-4" />
												</div>
												<div>
													<p className="text-white text-sm font-semibold">
														{qual.textEn}
													</p>
													<p className="text-slate-500 text-xs">
														{qual.textBn}
													</p>
												</div>
											</div>
										),
									)}
								</div>
								<div className="border-t border-white/10 pt-8">
									<a
										href={`mailto:${activeLeader.email}`}
										className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 rounded-xl transition-colors text-sm font-bold w-fit"
									>
										<Mail className="w-4 h-4" /> Email
										Directly
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-4 justify-center lg:justify-start">
						{leaders.map((leader) => (
							<button
								key={leader.id}
								onClick={() => setActiveId(leader.id)}
								className={`flex items-center gap-3 p-2 pr-6 rounded-full transition-all duration-300 border ${
									activeId === leader.id
										? "bg-slate-800 border-emerald-500/50"
										: "bg-transparent border-transparent hover:bg-white/5"
								}`}
							>
								<img
									src={leader.image}
									alt={leader.name}
									className={`w-10 h-10 rounded-full object-cover border-2 ${activeId === leader.id ? "border-emerald-500" : "border-slate-600"}`}
								/>
								<div className="text-left hidden sm:block">
									<p
										className={`text-xs font-bold leading-none mb-1 ${activeId === leader.id ? "text-white" : "text-slate-400"}`}
									>
										{leader.name}
									</p>
								</div>
							</button>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
