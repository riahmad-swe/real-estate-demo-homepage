"use client";

import { useState } from "react";
import {
	Calculator,
	TrendingUp,
	Home,
	Briefcase,
	ArrowUpRight,
	PieChart,
} from "lucide-react";

export default function InvestmentCalculator() {
	const [propertyType, setPropertyType] = useState<
		"RESIDENTIAL" | "COMMERCIAL"
	>("COMMERCIAL");
	const [investment, setInvestment] = useState<number>(10000000); // Default 1 Crore BDT

	// Real-world dummy metrics for Rajshahi/Dhaka
	const metrics = {
		RESIDENTIAL: { appreciationRate: 0.08, rentalYield: 0.045 }, // 8% appreciation, 4.5% rent yield
		COMMERCIAL: { appreciationRate: 0.12, rentalYield: 0.075 }, // 12% appreciation, 7.5% rent yield
	};

	const currentMetrics = metrics[propertyType];
	const years = 5;

	// Calculations
	const futureValue =
		investment * Math.pow(1 + currentMetrics.appreciationRate, years);
	const monthlyRent = (investment * currentMetrics.rentalYield) / 12;
	const totalRentalIncome = monthlyRent * 12 * years;
	const totalProfit = futureValue - investment + totalRentalIncome;
	const roiPercentage = ((totalProfit / investment) * 100).toFixed(1);

	// Currency Formatter (BDT)
	const formatBDT = (value: number) => {
		return new Intl.NumberFormat("en-IN", {
			style: "currency",
			currency: "BDT",
			maximumFractionDigits: 0,
		}).format(value);
	};

	return (
		<section
			id="investment-calculator"
			className="pt-16 md:pt-24 bg-slate-950 relative border-t border-white/5"
		>
			{/* Background ambient elements */}
			<div className="absolute top-1/4 left-0 w-100 h-100 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
			<div className="absolute bottom-0 right-0 w-125 h-125 bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none" />

			<div className="max-w-7xl mx-auto px-6 relative z-10">
				{/* Section Header */}
				<div className="text-center max-w-3xl mx-auto mb-16">
					<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
						<TrendingUp className="w-4 h-4" /> Smart Investment
					</div>
					<h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
						Calculate Your{" "}
						<span className="bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
							ROI Projection
						</span>
					</h2>
					<p className="text-slate-400 text-sm font-medium">
						Discover the financial growth of your property over the
						next 5 years.
					</p>
					<p className="text-xs text-slate-500 mt-2">
						আগামী ৫ বছরে আপনার প্রোপার্টির মূল্যবৃদ্ধি এবং সম্ভাব্য
						মাসিক ভাড়ার একটি লাইভ হিসাব দেখুন।
					</p>
				</div>

				{/* Calculator Container */}
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 lg:p-12 shadow-2xl">
					{/* Left Column: Inputs */}
					<div className="flex flex-col gap-8">
						<div>
							<h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
								<Calculator className="w-6 h-6 text-blue-400" />{" "}
								Investment Details
							</h3>
							<p className="text-sm text-slate-400">
								আপনার বিনিয়োগের ধরন ও পরিমাণ নির্বাচন করুন।
							</p>
						</div>

						{/* Property Type Toggle */}
						<div>
							<label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
								Property Type
							</label>
							<div className="grid grid-cols-2 gap-4">
								<button
									onClick={() =>
										setPropertyType("RESIDENTIAL")
									}
									className={`flex items-center justify-center gap-2 py-4 rounded-2xl border transition-all duration-300 font-semibold ${
										propertyType === "RESIDENTIAL"
											? "bg-blue-600/20 border-blue-500 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
											: "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10"
									}`}
								>
									<Home className="w-5 h-5" /> Residential
									(ফ্ল্যাট)
								</button>
								<button
									onClick={() =>
										setPropertyType("COMMERCIAL")
									}
									className={`flex items-center justify-center gap-2 py-4 rounded-2xl border transition-all duration-300 font-semibold ${
										propertyType === "COMMERCIAL"
											? "bg-emerald-600/20 border-emerald-500 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
											: "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10"
									}`}
								>
									<Briefcase className="w-5 h-5" /> Commercial
									(শপ/অফিস)
								</button>
							</div>
						</div>

						{/* Investment Slider */}
						<div>
							<div className="flex justify-between items-end mb-4">
								<label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
									Initial Investment (BDT)
								</label>
								<span className="text-2xl font-bold text-white">
									{formatBDT(investment)}
								</span>
							</div>
							<input
								type="range"
								min="5000000"
								max="50000000"
								step="500000"
								value={investment}
								onChange={(e) =>
									setInvestment(Number(e.target.value))
								}
								className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 transition-all"
							/>
							<div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
								<span>50 Lac</span>
								<span>5 Crore</span>
							</div>
						</div>

						{/* Metrics Info Box */}
						<div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-start gap-4">
							<PieChart className="w-6 h-6 text-slate-400 shrink-0" />
							<div>
								<p className="text-sm text-white font-semibold mb-1">
									Current Market Metrics (Est.)
								</p>
								<p className="text-xs text-slate-400">
									<span className="text-emerald-400 font-bold">
										{(
											currentMetrics.appreciationRate *
											100
										).toFixed(1)}
										%
									</span>{" "}
									Annual Value Appreciation &{" "}
									<span className="text-blue-400 font-bold">
										{(
											currentMetrics.rentalYield * 100
										).toFixed(1)}
										%
									</span>{" "}
									Yearly Rental Yield for{" "}
									{propertyType.toLowerCase()} spaces.
								</p>
							</div>
						</div>
					</div>

					{/* Right Column: Interactive Results Dashboard */}
					<div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-3xl border border-white/10 p-8 shadow-inner flex flex-col justify-center relative overflow-hidden">
						{/* Glowing orb behind results */}
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />

						<h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8 text-center relative z-10">
							5-Year Projection Forecast
						</h3>

						<div className="space-y-6 relative z-10">
							{/* Est Property Value */}
							<div className="bg-white/5 border border-white/5 p-6 rounded-2xl backdrop-blur-md">
								<p className="text-xs text-slate-400 mb-2">
									Estimated Property Value (After 5 Yrs)
								</p>
								<p className="text-3xl lg:text-4xl font-extrabold text-white flex items-center gap-2">
									{formatBDT(futureValue)}{" "}
									<ArrowUpRight className="w-6 h-6 text-emerald-400" />
								</p>
							</div>

							{/* Monthly Rental Income */}
							<div className="bg-white/5 border border-white/5 p-6 rounded-2xl backdrop-blur-md">
								<p className="text-xs text-slate-400 mb-2">
									Projected Monthly Rental Income
								</p>
								<p className="text-2xl lg:text-3xl font-bold text-blue-400">
									{formatBDT(monthlyRent)}{" "}
									<span className="text-sm text-slate-500 font-medium">
										/ month
									</span>
								</p>
							</div>

							{/* Total ROI Highlights */}
							<div className="pt-6 mt-4 border-t border-white/10 flex justify-between items-end">
								<div>
									<p className="text-xs text-slate-400 mb-1">
										Total Return on Investment (ROI)
									</p>
									<p className="text-sm text-slate-500">
										মোট লাভ: {formatBDT(totalProfit)}
									</p>
								</div>
								<div className="text-right">
									<span className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/50 rounded-xl text-xl font-black text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
										+{roiPercentage}%
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
