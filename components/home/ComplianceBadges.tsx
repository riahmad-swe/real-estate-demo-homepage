"use client";

import { ShieldCheck, Building, FileCheck, Award } from "lucide-react";

// Dummy Data with English & Bengali translations
const badges = [
	{
		id: "rajuk",
		icon: Building,
		titleEn: "RAJUK Approved",
		titleBn: "রাজউক অনুমোদিত",
		descEn: "Compliant with building codes",
		descBn: "বিল্ডিং কোড অনুযায়ী নির্মিত",
	},
	{
		id: "rehab",
		icon: ShieldCheck,
		titleEn: "REHAB Member",
		titleBn: "রিহ্যাব সদস্য",
		descEn: "Registered developer",
		descBn: "নিবন্ধিত ডেভেলপার",
	},
	{
		id: "cda",
		icon: FileCheck,
		titleEn: "CDA Certified",
		titleBn: "সিডিএ সার্টিফাইড",
		descEn: "Legal land acquisition",
		descBn: "বৈধ ভূমি অধিগ্রহণ",
	},
	{
		id: "iso",
		icon: Award,
		titleEn: "ISO 9001:2015",
		titleBn: "আইএসও মানসনদ",
		descEn: "Quality management system",
		descBn: "মান নিয়ন্ত্রণ ব্যবস্থা",
	},
];

export default function ComplianceBadges() {
	return (
		<section className="w-full bg-slate-950 border-y border-white/5 py-10">
			<div className="max-w-7xl mx-auto px-6">
				{/* Section Header (Bilingual) */}
				<div className="text-center mb-8">
					<p className="text-sm font-semibold tracking-widest text-slate-400 uppercase">
						Trusted & Recognized By
					</p>
					<p className="text-xs text-slate-500 mt-1 font-medium">
						যাদের স্বীকৃতি ও অনুমোদনে আমরা বিশ্বস্ত
					</p>
				</div>

				{/* Badges Grid */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
					{badges.map((badge) => {
						const Icon = badge.icon;
						return (
							<div
								key={badge.id}
								className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/5 transition-all duration-300 ease-in-out hover:bg-white/10 hover:border-emerald-500/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] cursor-default"
							>
								{/* Icon acts as Logo placeholder */}
								<div className="p-4 bg-slate-900 rounded-full mb-4 text-slate-400 group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-300 shadow-inner">
									<Icon className="w-8 h-8" />
								</div>

								{/* English Text */}
								<h4 className="text-sm md:text-base font-bold text-white text-center mb-1 group-hover:text-emerald-300 transition-colors">
									{badge.titleEn}
								</h4>
								<p className="text-[10px] md:text-xs text-slate-400 text-center mb-3">
									{badge.descEn}
								</p>

								{/* Divider */}
								<div className="w-8 h-px bg-white/10 mb-3 group-hover:bg-emerald-500/50 transition-colors" />

								{/* Bengali Text */}
								<h4 className="text-sm md:text-base font-bold text-slate-300 text-center mb-1">
									{badge.titleBn}
								</h4>
								<p className="text-[10px] md:text-xs text-slate-500 text-center">
									{badge.descBn}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
