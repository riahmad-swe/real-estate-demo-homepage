"use client";

import { useState } from "react";
import {
	Calculator,
	TrendingUp,
	Home,
	Briefcase,
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
			className="pt-16 md:pt-24 relative"
		>
			{/* Background ambient elements */}
			<div className="absolute top-1/4 left-0 w-100 h-100 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
			<div className="absolute bottom-0 right-0 w-125 h-125 bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none" />

			<div className="px-4 lg:px-24 2xl:px-48 relative z-10">
				{/* Section Header */}
				<div className="text-center max-w-3xl mx-auto mb-8">
					<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-500 text-xs font-bold uppercase tracking-wider mb-3">
						<TrendingUp className="w-4 h-4" /> Smart Investment
					</div>
					<h2 className="text-2xl md:text-4xl font-extrabold mb-2 tracking-tight">
						Calculate Your{" "}
						<span className="bg-linear-to-r from-emerald-500 to-indigo-500 bg-clip-text text-transparent">
							ROI Projection
						</span>
					</h2>
					<p className="text-slate-600 text-sm font-medium">
						Discover the financial growth of your property over the
						next 5 years.
					</p>
					<p className="text-xs text-slate-600 mt-1">
						আগামী ৫ বছরে আপনার প্রোপার্টির মূল্যবৃদ্ধি এবং সম্ভাব্য
						মাসিক ভাড়ার একটি লাইভ হিসাব দেখুন।
					</p>
				</div>

				{/* Calculator Container */}
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
					{/* Left Column: Inputs */}
					<div className="flex flex-col gap-6">
						<div>
							<h3 className="text-xl font-bold mb-1 flex items-center gap-1.5">
								<Calculator className="w-5.5 h-5.5 text-blue-500" />{" "}
								Investment Details
							</h3>
							<p className="text-sm text-slate-700">
								আপনার বিনিয়োগের ধরন ও পরিমাণ নির্বাচন করুন।
							</p>
						</div>

						{/* Property Type Toggle */}
						<div>
							<label className="block text-sm font-bold text-slate-600 uppercase tracking-wider mb-2">
								Property Type
							</label>
							<div className="grid grid-cols-2 gap-2">
								<button
									onClick={() =>
										setPropertyType("RESIDENTIAL")
									}
									className={`flex items-center justify-center gap-1.5 text-xs md:text-[15px] py-3.5 rounded-xl border transition-all duration-300 font-semibold ${
										propertyType === "RESIDENTIAL"
											? "bg-blue-500/20 border-blue-500 text-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
											: "bg-orange-200/50 hover:bg-orange-200 border-black/10"
									}`}
								>
									<Home className="w-4 h-4" /> Residential
									(ফ্ল্যাট)
								</button>
								<button
									onClick={() =>
										setPropertyType("COMMERCIAL")
									}
									className={`flex items-center justify-center gap-1.5 text-xs md:text-[15px] py-3.5 rounded-xl border transition-all duration-300 font-semibold ${
										propertyType === "COMMERCIAL"
											? "bg-emerald-400/15 border-emerald-500 text-emerald-500 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
											: "bg-orange-200/50 hover:bg-orange-200 border-black/10"
									}`}
								>
									<Briefcase className="w-5 h-5" /> Commercial
									(শপ/অফিস)
								</button>
							</div>
						</div>

						{/* Investment Slider */}
						<div>
							<div className="flex justify-between items-center mb-2">
								<label className="block text-sm font-bold text-slate-600 uppercase tracking-wider">
									Initial Investment (BDT)
								</label>
								<span className="font-bold text-sm md:text-base text-blue-500">
									{formatBDT(investment)}
								</span>
							</div>
							<input
								type="range"
								min="3000000"
								max="50000000"
								step="500000"
								value={investment}
								onChange={(e) =>
									setInvestment(Number(e.target.value))
								}
								className="w-full h-2 bg-blue-500 rounded-lg appearance-none cursor-pointer accent-slate-950 hover:accent-slate-600 transition-all shadow-md shadow-black/10"
							/>
							<div className="flex justify-between text-xs text-slate-500 font-medium">
								<span>30 Lakh</span>
								<span>5 Crore</span>
							</div>
						</div>

						{/* Metrics Info Box */}
						<div className="flex items-start gap-3">
							<PieChart className="w-6 h-6 text-blue-500 shrink-0" />
							<div>
								<p className="text-sm font-semibold mb-0.5">
									Current Market Metrics (Est.)
								</p>
								<p className="text-sm text-slate-600">
									<span className="text-emerald-500 font-bold">
										{(
											currentMetrics.appreciationRate *
											100
										).toFixed(1)}
										%
									</span>{" "}
									Annual Value Appreciation &{" "}
									<span className="text-blue-500 font-bold">
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
					<div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-3xl border border-white/10 p-5 shadow-inner flex flex-col justify-center relative overflow-hidden">
						{/* Glowing orb behind results */}
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />

						<h3 className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-4 text-center relative z-10">
							5-Year Projection Forecast
						</h3>

						<div className="space-y-3 relative z-10">
							{/* Est Property Value */}
							<div className="bg-white/5 border border-white/5 p-4 rounded-2xl backdrop-blur-md">
								<p className="text-sm text-slate-300">
									Estimated Property Value (After 5 Yrs)
								</p>
								<p className="text-sm text-slate-400 mb-1.5">
									সম্ভাব্য সম্পদের মূল্য (৫ বছর পরে)
								</p>
								<p className="text-lg font-extrabold text-white">
									{formatBDT(futureValue)}{" "}
								</p>
							</div>

							{/* Monthly Rental Income */}
							<div className="bg-white/5 border border-white/5 p-4 rounded-2xl backdrop-blur-md">
								<p className="text-sm text-slate-300">
									Estimated Monthly Rental Income
								</p>
								<p className="text-sm text-slate-400 mb-1.5">
									সম্ভাব্য মাসিক আয়
								</p>
								<p className="text-lg font-extrabold text-blue-400">
									{formatBDT(monthlyRent)}{" "}
									<span className="text-sm text-slate-300 font-medium">
										/ month
									</span>
								</p>
							</div>

							{/* Total ROI Highlights */}
							<div className="pt-4 mt-4 border-t border-white/10 flex justify-between items-end">
								<div>
									<p className="text-sm text-slate-300 mb-0.5">
										Total Return on Investment (ROI)
									</p>
									<p className="font-medium text-emerald-400">
										Total Profit: {formatBDT(totalProfit)}
									</p>
								</div>
								<div className="text-right">
									<span className="inline-block px-2.5 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-lg text-sm md:text-base font-bold text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
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
