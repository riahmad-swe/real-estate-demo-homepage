"use client";

import {
	FileText,
	Download,
	Shield,
	Hammer,
	Droplets,
	Zap,
	Eye,
} from "lucide-react";

// Bilingual Dummy Data for Material Brands
const materialCategories = [
	{
		id: "steel",
		icon: Hammer,
		titleEn: "Structural Steel",
		titleBn: "স্ট্রাকচারাল স্টিল",
		descEn: "High-grade 500W TMT bars for maximum earthquake resistance.",
		descBn: "সর্বোচ্চ ভূমিকম্প সহনশীল 500W টিএমটি রড।",
		brands: ["BSRM", "AKS", "KSRM"],
	},
	{
		id: "cement",
		icon: Shield,
		titleEn: "Premium Cement",
		titleBn: "প্রিমিয়াম সিমেন্ট",
		descEn: "High-strength Portland Composite Cement (PCC).",
		descBn: "অধিক ক্ষমতাসম্পন্ন পোর্টল্যান্ড কম্পোজিট সিমেন্ট।",
		brands: ["Holcim", "Shah Cement", "Crown"],
	},
	{
		id: "electrical",
		icon: Zap,
		titleEn: "Electrical Fittings",
		titleBn: "ইলেকট্রিক্যাল ক্যাবলস",
		descEn: "Fire-resistant and high-conductivity wiring systems.",
		descBn: "অগ্নিনির্বাপক এবং উচ্চ পরিবাহী ওয়্যারিং।",
		brands: ["BRB Cables", "BBS Cables", "MK FItings"],
	},
	{
		id: "plumbing",
		icon: Droplets,
		titleEn: "Plumbing & Sanitary",
		titleBn: "প্লাম্বিং ও স্যানিটারি",
		descEn: "Leak-proof and durable pipes with luxury sanitary ware.",
		descBn: "টেকসই পাইপ এবং লাক্সারি স্যানিটারি ফিটিংস।",
		brands: ["RAK Ceramics", "Stella", "RFL PVC"],
	},
];

// Bilingual Dummy Data for Lab Reports
const labReports = [
	{
		id: "rep-1",
		titleEn: "BUET Cylinder Test Report - Alpine Tower",
		titleBn: "বুয়েট সিলিন্ডার টেস্ট রিপোর্ট - আলপাইন টাওয়ার",
		date: "15 May, 2026",
		fileSize: "2.4 MB",
	},
	{
		id: "rep-2",
		titleEn: "Steel Tensile Strength Certificate",
		titleBn: "স্টিল টেনসাইল স্ট্রেন্থ সার্টিফিকেট",
		date: "02 April, 2026",
		fileSize: "1.8 MB",
	},
	{
		id: "rep-3",
		titleEn: "Soil Test & Foundation Approval",
		titleBn: "সয়েল টেস্ট এবং ফাউন্ডেশন এপ্রুভাল",
		date: "10 Jan, 2026",
		fileSize: "4.1 MB",
	},
];

export default function Quality() {
	return (
		<section
			id="quality"
			className="relative pt-16 md:pt-24 bg-slate-950 overflow-hidden"
		>
			{/* Background Ambient Glow for eye-catching effect */}
			<div className="absolute top-0 right-0 w-125 h-125 bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
			<div className="absolute bottom-0 left-0 w-125 h-125 bg-emerald-600/5 blur-[150px] rounded-full pointer-events-none" />

			<div className="relative z-10 max-w-7xl mx-auto px-6">
				{/* Section Header */}
				<div className="text-center max-w-3xl mx-auto mb-16">
					<h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
						Uncompromised{" "}
						<span className="bg-linear-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
							Quality
						</span>
					</h2>
					<p className="text-lg text-slate-400 font-medium">
						We do not hide what goes inside our walls. Transparency
						is our core foundation.
					</p>
					<p className="text-sm text-slate-500 mt-2">
						আমাদের ভবনের প্রতিটি নির্মাণ সামগ্রী যাচাইকৃত এবং
						আন্তর্জাতিক মানের।
					</p>
				</div>

				{/* Part 1: Material Alliance Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
					{materialCategories.map((cat) => {
						const Icon = cat.icon;
						return (
							<div
								key={cat.id}
								className="group p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
							>
								<div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 transition-colors">
									<Icon className="w-6 h-6 text-slate-400 group-hover:text-emerald-400" />
								</div>

								<h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
									{cat.titleEn}
								</h3>
								<h4 className="text-sm font-medium text-slate-400 mb-4">
									{cat.titleBn}
								</h4>

								<p className="text-xs text-slate-500 mb-6 h-10">
									{cat.descEn}
								</p>

								<div className="flex flex-wrap gap-2">
									{cat.brands.map((brand, idx) => (
										<span
											key={idx}
											className="px-3 py-1 text-[11px] font-semibold tracking-wider uppercase rounded-full bg-slate-900 text-slate-300 border border-white/5"
										>
											{brand}
										</span>
									))}
								</div>
							</div>
						);
					})}
				</div>

				{/* Part 2: The Trust Vault (Lab Test Downloads) */}
				<div className="relative rounded-3xl overflow-hidden p-.25 bg-linear-to-br from-white/10 via-white/5 to-emerald-500/30">
					<div className="bg-slate-900 w-full h-full rounded-[23px] p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
						{/* Left Content */}
						<div className="w-full md:w-1/3 text-left">
							<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
								<FileText className="w-4 h-4" /> The Trust Vault
							</div>
							<h3 className="text-3xl font-bold text-white mb-3">
								Lab Test Audits
							</h3>
							<p className="text-sm text-slate-400 mb-2">
								Download and verify our material strength
								certificates directly from independent
								authorities like BUET.
							</p>
							<p className="text-xs text-slate-500">
								আমাদের ব্যবহৃত ম্যাটেরিয়ালগুলোর বুয়েট ল্যাব
								টেস্ট রিপোর্ট সরাসরি ডাউনলোড করে যাচাই করুন।
							</p>
						</div>

						{/* Right Content: Download List */}
						<div className="w-full md:w-2/3 flex flex-col gap-4">
							{labReports.map((report) => (
								<div
									key={report.id}
									className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
								>
									<div className="mb-4 sm:mb-0">
										<h4 className="text-white font-semibold text-sm sm:text-base group-hover:text-blue-300 transition-colors">
											{report.titleEn}
										</h4>
										<p className="text-slate-500 text-xs mt-1">
											{report.titleBn}
										</p>
										<div className="flex items-center gap-4 mt-2 text-[11px] text-slate-400 font-medium">
											<span>Date: {report.date}</span>
											<span>•</span>
											<span>Size: {report.fileSize}</span>
										</div>
									</div>

									<div className="flex gap-2 w-full sm:w-auto">
										<button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 text-white text-xs font-bold hover:bg-slate-700 transition-colors">
											<Eye className="w-4 h-4" /> View
										</button>
										<button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/50">
											<Download className="w-4 h-4" /> PDF
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
