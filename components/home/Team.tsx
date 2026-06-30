"use client";

import { useState } from "react";
import { Mail, Award, GraduationCap, Briefcase } from "lucide-react";

const leaders = [
	{
		id: 1,
		name: "Md. Abdus Sobhan",
		roleEn: "Managing Director",
		roleBn: "ব্যবস্থাপনা পরিচালক",
		bioEn: "Visionary leader with over one decade of experience. Committed to uncompromised quality and timely delivery.",
		bioBn: "এক দশকেরও বেশি অভিজ্ঞতাসম্পন্ন ভিশনারি লিডার। মানসম্পন্ন নির্মাণ ও সঠিক সময়ে প্রজেক্ট হস্তান্তরে বদ্ধপরিকর।",
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
		image: "/images/md-abdus-sobhan.jpg",
		email: "contact@anbuniquerealestate.com",
	},
	{
		id: 2,
		name: "Noshin Tabassum Shaba",
		roleEn: "Manager & Senior Sales Executive",
		roleBn: "পরিচালক ও সিনিয়র সেলস এক্সিকিউটিভ",
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
		email: "contact@anbuniquerealestate.com",
	},
	{
		id: 3,
		name: "Mst. Suriya Parvin",
		roleEn: "Relation Officer",
		roleBn: "রিলেশন অফিসার",
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
		image: "/images/mst-suriya-parvin.jpg",
		email: "contact@anbuniquerealestate.com",
	},
	{
		id: 4,
		name: "Marufa Khatun Disha",
		roleEn: "Marketing & Sales Executive",
		roleBn: "মার্কেটিং ও সেলস এক্সিকিউটিভ",
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
		email: "contact@anbuniquerealestate.com",
	},
	{
		id: 5,
		name: "Shihab Ahmed Saimon",
		roleEn: "Consultant Officer",
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
		image: "/images/shihab-ahmed-saimon.jpg",
		email: "project@anbunique.com",
	},
];

export default function Team() {
	const [activeId, setActiveId] = useState(1);
	const activeLeader = leaders.find((l) => l.id === activeId) || leaders[0];

	const [touchStart, setTouchStart] = useState<number>(0);
	const [touchEnd, setTouchEnd] = useState<number>(0);

	const handleTouchStart = (e: React.TouchEvent) => {
		setTouchEnd(0);
		setTouchStart(e.targetTouches[0].clientX);
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		setTouchEnd(e.targetTouches[0].clientX);
	};

	const handleTouchEnd = () => {
		if (!touchStart || !touchEnd) return;
		const distance = touchStart - touchEnd;
		const isLeftSwipe = distance > 50; // বামে সোয়াইপ করলে (Next)
		const isRightSwipe = distance < -50; // ডানে সোয়াইপ করলে (Prev)

		const currentIndex = leaders.findIndex((l) => l.id === activeId);

		if (isLeftSwipe) {
			// Next Leader (লুপ হয়ে প্রথমটায় যাবে যদি শেষে থাকে)
			const nextIndex = (currentIndex + 1) % leaders.length;
			setActiveId(leaders[nextIndex].id);
		}

		if (isRightSwipe) {
			// Previous Leader (লুপ হয়ে শেষেরটায় যাবে যদি শুরুতে থাকে)
			const prevIndex =
				(currentIndex - 1 + leaders.length) % leaders.length;
			setActiveId(leaders[prevIndex].id);
		}
	};

	return (
		<section
			id="team"
			className="pt-16 md:pt-24 relative"
		>
			<div className="px-4 lg:px-24 2xl:px-48">
				<div className="mb-4 md:mb-8">
					<h2 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight text-center">
						The Minds Behind{" "}
						<span className="bg-linear-to-r from-emerald-500 to-indigo-500 bg-clip-text text-transparent">
							The Masterpieces
						</span>
					</h2>
				</div>

				<div className="max-w-7xl mx-auto bg-slate-900 border border-white/10 rounded-0.5 p-4 lg:p-6 rounded-3xl shadow-[0_0_15px_6px_rgba(0,100,255,0.35)]">
					<div className="grid lg:grid-cols-5 gap-4 md:gap-12 items-center">
						<div className="lg:col-span-2 relative">
							{/* টাচ ইভেন্টগুলো এই মেইন কন্টেইনারে অ্যাড করা হলো */}
							<div
								className="relative h-60 md:h-100 w-full rounded-2xl overflow-hidden bg-slate-800 touch-pan-y"
								onTouchStart={handleTouchStart}
								onTouchMove={handleTouchMove}
								onTouchEnd={handleTouchEnd}
							>
								<div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay z-10 pointer-events-none" />
								<img
									key={activeLeader.id}
									src={
										activeLeader.image ||
										"/images/woman-avatar.jpg"
									}
									alt={activeLeader.name}
									className="absolute inset-0 w-full h-full object-cover object-top animate-in fade-in zoom-in-95 duration-700 pointer-events-none"
								/>
								<div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/20 to-transparent z-10 pointer-events-none" />

								<div className="absolute bottom-6 md:bottom-4 left-2 md:left-4 z-20 pointer-events-none">
									<h3 className="text-lg md:text-2xl font-bold text-white tracking-tight drop-shadow-md">
										{activeLeader.name}
									</h3>
									<p className="max-md:text-xs text-emerald-400 font-semibold uppercase tracking-wider text-sm">
										{activeLeader.roleEn}
									</p>
								</div>

								{/* Mobile/Tablet Dots Indicator (শুধুমাত্র ছোট স্ক্রিনে দেখাবে) */}
								<div className="absolute bottom-2 left-0 w-full flex justify-center gap-1.5 z-30 lg:hidden">
									{leaders.map((leader) => (
										<button
											key={leader.id}
											onClick={() =>
												setActiveId(leader.id)
											}
											className={`h-1.5 rounded-full transition-all duration-300 ${
												activeId === leader.id
													? "w-6 bg-emerald-400"
													: "w-1.5 bg-white/50 hover:bg-white/80"
											}`}
											aria-label={`Go to ${leader.name}`}
										/>
									))}
								</div>
							</div>
						</div>

						<div className="lg:col-span-3 flex flex-col justify-center">
							<div
								key={`details-${activeLeader.id}`}
								className="animate-in fade-in slide-in-from-right-8 duration-700"
							>
								<div className="mb-4 md:mb-8">
									<h4 className="text-lg md:text-xl font-bold text-white mb-1">
										{activeLeader.roleEn}
									</h4>
									<h4 className="max-md:text-sm font-bold text-slate-300 mb-3">
										{activeLeader.roleBn}
									</h4>
									<p className="text-white text-sm leading-relaxed mb-1">
										{activeLeader.bioEn}
									</p>
									<p className="text-slate-300 text-xs leading-relaxed font-medium">
										{activeLeader.bioBn}
									</p>
								</div>
								<div className="space-y-2 md:space-y-3 mb-4 md:mb-8">
									<p className="text-sm uppercase tracking-wider text-slate-300 font-bold mb-2">
										Credentials & Expertise
									</p>
									{activeLeader.qualifications.map(
										(qual, idx) => (
											<div
												key={idx}
												className="flex items-start gap-3"
											>
												<div className="p-2 bg-white/5 rounded-lg border border-white/5 text-emerald-400 shrink-0">
													<qual.icon className="w-5 h-5" />
												</div>
												<div>
													<p className="text-white text-sm font-semibold">
														{qual.textEn}
													</p>
													<p className="text-slate-300 text-xs">
														{qual.textBn}
													</p>
												</div>
											</div>
										),
									)}
								</div>
								<a
									href={`mailto:${activeLeader.email}`}
									className="flex items-center gap-2 px-3 md:px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 rounded-xl transition-colors text-sm font-bold w-fit"
								>
									<Mail className="w-4 h-4" /> Email Directly
								</a>
							</div>
						</div>
					</div>

					<div className="mt-6 pt-4 border-t border-white/10 hidden lg:flex flex-wrap gap-2 justify-center">
						{leaders.map((leader) => (
							<button
								key={leader.id}
								onClick={() => setActiveId(leader.id)}
								className={`flex items-center gap-3 px-2 py-1 rounded-full transition-all duration-300 border ${
									activeId === leader.id
										? "bg-slate-800 border-emerald-500/50"
										: "bg-transparent border-transparent hover:bg-white/5"
								}`}
							>
								<img
									src={
										leader.image ||
										"/images/woman-avatar.jpg"
									}
									alt={leader.name}
									className={`w-10 h-10 rounded-full object-cover border-2 ${activeId === leader.id ? "border-emerald-500" : "border-slate-600"}`}
								/>
								<div className="text-left hidden sm:block">
									<p
										className={`text-xs font-bold leading-none mb-1 ${activeId === leader.id ? "text-white" : "text-slate-300"}`}
									>
										{leader.name}
									</p>
									<p
										className={`text-xs font-medium leading-none mb-1 ${activeId === leader.id ? "text-slate-200" : "text-slate-400"}`}
									>
										{leader.roleEn}
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
