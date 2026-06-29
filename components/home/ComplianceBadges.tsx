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
		<section className="w-full py-24">
			<div className="max-w-7xl mx-auto px-6">
				{/* Section Header (Bilingual) */}
				<div className="text-center mb-4">
					<p className="text-xl lg:text-2xl font-bold tracking-wide uppercase">
						Trusted & Recognized By
					</p>
					<p className="lg:text-lg mt-1">
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
								className="group relative flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/5 transition-all duration-300 ease-in-out hover:bg-white/10 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] cursor-default"
							>
								{/* Icon acts as Logo placeholder */}
								<div className="p-4 bg-orange-200 rounded-full mb-2 text-slate-600 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300 shadow-inner">
									<Icon className="w-8 h-8" />
								</div>

								{/* English Text */}
								<h4 className="text-sm md:text-base font-bold text-center mb-1 text-slate-700 group-hover:text-blue-500 transition-colors">
									{badge.titleEn}
								</h4>
								<p className="text-xs md:text-sm text-slate-600 text-center mb-3">
									{badge.descEn}
								</p>

								{/* Divider */}
								<div className="w-8 h-px bg-black/10 mb-3 group-hover:bg-blue-500/50 transition-colors" />

								{/* Bengali Text */}
								<h4 className="text-sm md:text-base font-bold text-slate-700 text-center mb-1">
									{badge.titleBn}
								</h4>
								<p className="text-xs md:text-sm text-slate-600 text-center">
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
