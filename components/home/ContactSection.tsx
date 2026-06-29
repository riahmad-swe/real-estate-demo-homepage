"use client";

import { useState } from "react";
import {
	MapPin,
	Phone,
	Mail,
	Clock,
	Send,
	MessageSquare,
	Building2,
	CalendarCheck,
} from "lucide-react";

export default function ContactSection() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setTimeout(() => {
			setIsSubmitting(false);
			setIsSuccess(true);
			setTimeout(() => setIsSuccess(false), 5000);
		}, 1500);
	};

	return (
		<section className="py-24 bg-slate-950 relative border-t border-white/5 overflow-hidden">
			{/* Premium Ambient Lighting */}
			<div className="absolute top-0 right-0 w-125 h-125 bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
			<div className="absolute bottom-0 left-0 w-125 h-125 bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none" />

			<div className="max-w-7xl mx-auto px-6 relative z-10">
				{/* Section Header */}
				<div className="text-center max-w-3xl mx-auto mb-16">
					<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
						<MessageSquare className="w-4 h-4" /> Concierge Desk
					</div>
					<h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
						Let us Discuss Your{" "}
						<span className="bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
							Future Home
						</span>
					</h2>
					<p className="text-slate-400 text-sm font-medium mb-2">
						Schedule a site visit or consult with our property
						experts today.
					</p>
					<p className="text-xs text-slate-500">
						আমাদের প্রজেক্ট ভিজিট করতে বা বিস্তারিত জানতে আজই আমাদের
						এক্সপার্টদের সাথে কথা বলুন।
					</p>
				</div>

				<div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
					{/* Left Column: Contact Info Cards */}
					<div className="lg:col-span-5 flex flex-col gap-6">
						{/* Rajshahi HQ Card */}
						<div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-emerald-500/30 transition-all group">
							<div className="flex items-center gap-4 mb-6">
								<div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
									<Building2 className="w-6 h-6" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-white">
										Rajshahi Headquarters
									</h3>
									<p className="text-xs text-slate-400">
										প্রধান কার্যালয়, রাজশাহী
									</p>
								</div>
							</div>
							<div className="space-y-4">
								<p className="flex items-start gap-3 text-sm text-slate-300">
									<MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
									Level 2, K M Max Tower, Upashahar Mor,
									Rajshahi, Bangladesh
								</p>
								<p className="flex items-center gap-3 text-sm text-slate-300">
									<Phone className="w-4 h-4 text-emerald-400 shrink-0" />
									+880 1711-000000
								</p>
							</div>
						</div>

						{/* Dhaka Corporate Office Card */}
						<div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition-all group">
							<div className="flex items-center gap-4 mb-6">
								<div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
									<Building2 className="w-6 h-6" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-white">
										Dhaka Corporate Office
									</h3>
									<p className="text-xs text-slate-400">
										কর্পোরেট অফিস, ঢাকা
									</p>
								</div>
							</div>
							<div className="space-y-4">
								<p className="flex items-start gap-3 text-sm text-slate-300">
									<MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
									House 12, Road 4, Block F, Banani, Dhaka,
									Bangladesh
								</p>
								<p className="flex items-center gap-3 text-sm text-slate-300">
									<Phone className="w-4 h-4 text-blue-400 shrink-0" />
									+880 1811-000000
								</p>
							</div>
						</div>

						{/* Global Contact & Hours */}
						<div className="grid grid-cols-2 gap-4">
							<div className="bg-white/5 border border-white/10 rounded-2xl p-5">
								<Mail className="w-5 h-5 text-slate-400 mb-3" />
								<p className="text-xs text-slate-500 mb-1">
									Email Us At
								</p>
								<p className="text-sm font-bold text-white truncate">
									info@anbunique.com
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-2xl p-5">
								<Clock className="w-5 h-5 text-slate-400 mb-3" />
								<p className="text-xs text-slate-500 mb-1">
									Working Hours
								</p>
								<p className="text-sm font-bold text-white">
									10 AM - 6 PM
								</p>
							</div>
						</div>
					</div>

					{/* Right Column: Premium Contact Form */}
					<div className="lg:col-span-7 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
						{isSuccess ? (
							<div className="absolute inset-0 z-20 bg-slate-900/95 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-500">
								<div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
									<CalendarCheck className="w-10 h-10 text-blue-400" />
								</div>
								<h3 className="text-2xl font-bold text-white mb-2">
									Request Received!
								</h3>
								<p className="text-slate-400 text-sm">
									Thank you for reaching out. Our property
									consultant will contact you within 24 hours
									to schedule your visit.
								</p>
							</div>
						) : null}

						<div className="mb-8">
							<h3 className="text-2xl font-bold text-white mb-2">
								Book a Site Visit
							</h3>
							<p className="text-xs text-slate-400">
								Fill out the form below to register your
								interest. <br />
								বিস্তারিত জানতে বা প্রজেক্ট ভিজিট করতে ফর্মটি
								পূরণ করুন।
							</p>
						</div>

						<form
							onSubmit={handleSubmit}
							className="space-y-6"
						>
							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
										Full Name{" "}
										<span className="text-emerald-500">
											*
										</span>
									</label>
									<input
										required
										type="text"
										placeholder="e.g. Shafiqul Islam"
										className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
									/>
								</div>
								<div>
									<label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
										Phone Number{" "}
										<span className="text-emerald-500">
											*
										</span>
									</label>
									<input
										required
										type="tel"
										placeholder="+880 1..."
										className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
									/>
								</div>
							</div>

							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
										Email Address
									</label>
									<input
										type="email"
										placeholder="your@email.com"
										className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
									/>
								</div>
								<div>
									<label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
										Interested Project{" "}
										<span className="text-emerald-500">
											*
										</span>
									</label>
									<select
										required
										className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
									>
										<option
											value=""
											disabled
											selected
										>
											Select a project...
										</option>
										<option value="alpine">
											ANB Alpine Tower (Rajshahi)
										</option>
										<option value="skyview">
											ANB Sky View (Dhaka)
										</option>
										<option value="greenvalley">
											ANB Green Valley (Rajshahi)
										</option>
										<option value="commercial">
											Looking for Commercial Space
										</option>
									</select>
								</div>
							</div>

							<div>
								<label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
									Your Message / Query
								</label>
								<textarea
									rows={4}
									placeholder="I would like to know the pricing for a 3 BHK flat..."
									className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
								></textarea>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] disabled:opacity-70 disabled:cursor-not-allowed mt-2"
							>
								{isSubmitting ? (
									"Sending Request..."
								) : (
									<>
										Send Message & Book Visit{" "}
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
