"use client";

import {
	FileText,
	Download,
	Shield,
	Hammer,
	Droplets,
	Zap,
	Eye,
	Calendar,
	FileDigit,
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
			className="relative pt-16 md:pt-24 overflow-hidden"
		>
			{/* Background Ambient Glow for eye-catching effect */}
			<div className="absolute top-0 right-0 w-125 h-125 bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
			<div className="absolute bottom-0 left-0 w-125 h-125 bg-emerald-600/5 blur-[150px] rounded-full pointer-events-none" />

			<div className="relative z-10 px-4 lg:px-24 2xl:px-48">
				{/* Section Header */}
				<div className="text-center max-w-3xl mx-auto mb-8">
					<h2 className="text-2xl md:text-4xl font-bold mb-2 tracking-wide">
						Uncompromised{" "}
						<span className="bg-linear-to-r from-emerald-500 to-indigo-500 bg-clip-text text-transparent">
							Quality
						</span>
					</h2>
					<p className="text-sm md:text-lg text-slate-700 font-medium">
						We do not hide what goes inside our walls. Transparency
						is our core foundation.
					</p>
					<p className="text-sm md:text-lg text-slate-700 mt-1">
						আমাদের ভবনের প্রতিটি নির্মাণ সামগ্রী যাচাইকৃত এবং
						আন্তর্জাতিক মানের।
					</p>
				</div>

				{/* Part 1: Material Alliance Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
					{materialCategories.map((cat) => {
						const Icon = cat.icon;
						return (
							<div
								key={cat.id}
								className="group p-4 md:p-5 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/5"
							>
								<div className="flex flex-row md:flex-col gap-3 mb-2">
									<div className="size-10 md:size-12 rounded-xl bg-blue-200 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/15 group-hover:border-blue-500/50 transition-colors">
										<Icon className="size-6 md:size-7 text-slate-600 group-hover:text-blue-500" />
									</div>

									<div>
										<h3 className="text-sm md:text-xl font-bold group-hover:text-blue-500 transition-colors mb-0.5">
											{cat.titleEn}
										</h3>
										<h4 className="text-xs font-medium">
											{cat.titleBn}
										</h4>
									</div>
								</div>

								<p className="text-xs md:text-[15px] text-slate-700 mb-3 md:mb-5">
									{cat.descEn}
								</p>

								<div className="flex flex-wrap gap-2">
									{cat.brands.map((brand, idx) => (
										<span
											key={idx}
											className="px-3 py-1 text-[10px] md:text-[11px] font-semibold tracking-wider uppercase rounded-full bg-blue-200 text-slate-700 border border-white/5"
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
				<div className="relative overflow-hidden">
					<div className="w-full h-full flex flex-col md:flex-row gap-6 md:gap-12 items-center">
						{/* Left Content */}
						<div className="w-full md:w-1/3 text-left">
							<div className="inline-flex items-center gap-2 px-2 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold uppercase tracking-wider mb-2 md:mb-4">
								<FileText className="w-4 h-4" /> The Trust Vault
							</div>
							<h3 className="text-2xl font-bold mb-1 md:mb-3">
								Lab Test Audits
							</h3>
							<p className="text-sm text-slate-700 mb-2">
								Download and verify our material strength
								certificates directly from independent
								authorities like BUET.
							</p>
							<p className="text-sm text-slate-700">
								আমাদের ব্যবহৃত ম্যাটেরিয়ালগুলোর বুয়েট ল্যাব
								টেস্ট রিপোর্ট সরাসরি ডাউনলোড করে যাচাই করুন।
							</p>
						</div>

						{/* Right Content: Download List */}
						<div className="w-full md:w-2/3 flex flex-col gap-4">
							{labReports.map((report) => (
								<div
									key={report.id}
									className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 rounded-2xl shadow-lg shadow-black/5 hover:shadow-black/10 hover:-translate-y-1 transition-all duration-300"
								>
									<div className="mb-4 sm:mb-0">
										<h4 className="font-semibold text-sm sm:text-base group-hover:text-blue-600 transition-colors">
											{report.titleEn}
										</h4>
										<p className="text-slate-700 text-sm mt-1">
											{report.titleBn}
										</p>
										<div className="flex items-center gap-4 mt-2 text-sm text-slate-600 font-medium">
											<span className="flex items-center gap-1">
												<Calendar className="w-4 h-4" />
												Date: {report.date}
											</span>

											<span className="flex items-center gap-1">
												<FileDigit className="w-4 h-4" />
												Size: {report.fileSize}
											</span>
										</div>
									</div>

									<div className="flex gap-2 w-full sm:w-auto">
										<button className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-emerald-400 hover:bg-emerald-500 text-xs font-bold transition-all shadow-md shadow-black/40 active:shadow-sm">
											<Eye className="w-4 h-4" /> View
										</button>
										<button className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-blue-600 text-white text-xs font-bold hover:bg-blue-500 transition-all shadow-md shadow-black/40 active:shadow-sm">
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
