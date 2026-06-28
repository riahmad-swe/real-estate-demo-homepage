"use client";

import { useState } from "react";
import {
	Handshake,
	ShieldCheck,
	Clock,
	TrendingUp,
	MapPin,
	Ruler,
	Road,
	Send,
} from "lucide-react";

export default function LandownerCorner() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	// Form submission simulation
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setTimeout(() => {
			setIsSubmitting(false);
			setIsSuccess(true);
			setTimeout(() => setIsSuccess(false), 5000); // Reset after 5s
		}, 1500);
	};

	return (
		<section className="py-24 bg-slate-950 relative overflow-hidden border-t border-white/5">
			{/* Background ambient glow */}
			<div className="absolute top-1/2 left-1/4 w-125 h-125 bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none transform -translate-y-1/2" />

			<div className="max-w-7xl mx-auto px-6 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
					{/* Left Column: Value Proposition */}
					<div className="flex flex-col gap-8">
						<div>
							<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
								<Handshake className="w-4 h-4" /> Joint Venture
							</div>
							<h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
								Turn Your Property Into A{" "}
								<span className="bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
									Landmark
								</span>
							</h2>
							<p className="text-slate-400 text-lg mb-2">
								Share your land with us for a profitable joint
								venture. Get the best sharing ratio and absolute
								legal peace of mind.
							</p>
							<p className="text-sm text-slate-500 font-medium">
								আপনার মূল্যবান জমিটি ডেভেলপ করতে আমাদের সাথে
								যুক্ত হোন। আমরা নিশ্চিত করি সর্বোচ্চ লাভজনক
								রেশিও এবং শতভাগ আইনি স্বচ্ছতা।
							</p>
						</div>

						{/* Why Partner With Us - Features */}
						<div className="space-y-6 mt-4">
							<div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-colors">
								<div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 shrink-0">
									<TrendingUp className="w-6 h-6" />
								</div>
								<div>
									<h4 className="text-white font-bold text-lg mb-1">
										Maximized ROI & Best Ratio
									</h4>
									<p className="text-xs text-slate-400">
										সর্বোচ্চ লাভজনক শেয়ারিং রেশিও এবং
										সাইনিং মানি।
									</p>
								</div>
							</div>

							<div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-colors">
								<div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 shrink-0">
									<ShieldCheck className="w-6 h-6" />
								</div>
								<div>
									<h4 className="text-white font-bold text-lg mb-1">
										100% Legal Transparency
									</h4>
									<p className="text-xs text-slate-400">
										নিষ্কণ্টক আইনি প্রক্রিয়া এবং
										ট্রান্সপারেন্ট চুক্তিনামা।
									</p>
								</div>
							</div>

							<div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-colors">
								<div className="p-3 bg-amber-500/10 rounded-xl text-amber-400 shrink-0">
									<Clock className="w-6 h-6" />
								</div>
								<div>
									<h4 className="text-white font-bold text-lg mb-1">
										Guaranteed On-Time Handover
									</h4>
									<p className="text-xs text-slate-400">
										চুক্তির মেয়াদ অনুযায়ী নির্দিষ্ট সময়ে
										প্রজেক্ট হস্তান্তর।
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right Column: The Land Form */}
					<div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
						{isSuccess ? (
							<div className="absolute inset-0 z-20 bg-slate-900/90 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-500">
								<div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
									<ShieldCheck className="w-10 h-10 text-emerald-400" />
								</div>
								<h3 className="text-2xl font-bold text-white mb-2">
									Proposal Received!
								</h3>
								<p className="text-slate-400 text-sm">
									Thank you for your interest. Our business
									development team will review your land
									details and contact you shortly.
								</p>
							</div>
						) : null}

						<div className="mb-8">
							<h3 className="text-2xl font-bold text-white mb-1">
								Land Details Form
							</h3>
							<p className="text-xs text-slate-400">
								Please provide accurate details for a quick
								evaluation. <br /> প্রাথমিক মূল্যায়নের জন্য
								জমির সঠিক তথ্য দিন।
							</p>
						</div>

						<form
							onSubmit={handleSubmit}
							className="space-y-6 relative z-10"
						>
							{/* Personal Info Group */}
							<div className="grid grid-cols-2 gap-4">
								<div className="col-span-2 sm:col-span-1">
									<label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
										Full Name
									</label>
									<input
										required
										type="text"
										placeholder="e.g. Rakibul Islam"
										className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
									/>
								</div>
								<div className="col-span-2 sm:col-span-1">
									<label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
										Phone Number
									</label>
									<input
										required
										type="tel"
										placeholder="+880 1..."
										className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
									/>
								</div>
							</div>

							{/* Location Input */}
							<div>
								<label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex; items-center gap-2">
									<MapPin className="w-3.5 h-3.5" /> Land
									Location / Address
								</label>
								<input
									required
									type="text"
									placeholder="e.g. Plot 12, Road 4, Banani, Dhaka"
									className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
								/>
							</div>

							{/* BD Standard Land Measurement Group */}
							<div className="grid grid-cols-5 gap-4">
								<div className="col-span-3">
									<label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex; items-center gap-2">
										<Ruler className="w-3.5 h-3.5" /> Land
										Size
									</label>
									<input
										required
										type="number"
										step="0.01"
										placeholder="Enter size..."
										className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
									/>
								</div>
								<div className="col-span-2">
									<label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
										Unit
									</label>
									<select className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors appearance-none cursor-pointer">
										<option value="katha">
											Katha (কাঠা)
										</option>
										<option value="decimal">
											Decimal (শতক)
										</option>
										<option value="bigha">
											Bigha (বিঘা)
										</option>
									</select>
								</div>
							</div>

							{/* Road Width (Crucial for BD Developers) */}
							<div>
								<label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex; items-center gap-2">
									<Road className="w-3.5 h-3.5" /> Front Road
									Width (Feet)
								</label>
								<input
									required
									type="number"
									placeholder="e.g. 20 (রাস্তার প্রশস্থতা ফিটে)"
									className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
								/>
								<p className="text-[10px] text-slate-500 mt-1.5">
									* Minimum road width requirements apply for
									high-rise approvals.
								</p>
							</div>

							{/* Submit Button */}
							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] disabled:opacity-70 disabled:cursor-not-allowed mt-4"
							>
								{isSubmitting ? (
									"Sending Proposal..."
								) : (
									<>
										Submit Land Details{" "}
										<Send className="w-4 h-4" />
									</>
								)}
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
