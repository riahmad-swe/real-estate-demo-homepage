"use client";

import Link from "next/link";
import { Building, ArrowRight, Heart, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="relative bg-slate-950 pt-20 pb-8 overflow-hidden border-t border-white/10 mt-auto">
			{/* Ambient Footer Glow */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-75 bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none" />

			<div className="px-4 lg:px-24 2xl:px-48 relative z-10">
				{/* Top Section: Cordial Thank You & Newsletter */}
				<div className="grid lg:grid-cols-2 gap-12 items-center pb-16 border-b border-white/10">
					<div>
						<h3 className="text-3xl font-extrabold text-white mb-3 tracking-tight">
							Thank You For{" "}
							<span className="text-emerald-400">Visiting</span>
						</h3>
						<p className="text-slate-400 text-sm leading-relaxed max-w-md">
							We cordially appreciate your time exploring ANB
							Unique Real State. We look forward to building your
							dream with uncompromised trust.
						</p>
						<p className="text-slate-500 text-xs mt-3 font-medium border-l-2 border-emerald-500/30 pl-3">
							এএনবি ইউনিক রিয়েল এস্টেটের সাথে থাকার জন্য আন্তরিক
							ধন্যবাদ। আপনার স্বপ্নের ঠিকানা নির্মাণে আমরা সর্বদা
							প্রস্তুত।
						</p>
					</div>

					<div className="bg-white/5 border border-white/10 p-2 rounded-2xl flex items-center backdrop-blur-md max-w-lg lg:ml-auto w-full shadow-lg">
						<input
							type="email"
							placeholder="Subscribe to our VIP newsletter..."
							className="bg-transparent border-none text-white px-4 py-3 w-full focus:outline-none text-sm placeholder:text-slate-500"
						/>
						<button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition-colors flex items-center gap-2 text-sm shrink-0">
							Subscribe <ArrowRight className="w-4 h-4" />
						</button>
					</div>
				</div>

				{/* Main Footer Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
					{/* Column 1: Brand Info */}
					<div className="flex flex-col gap-6">
						<Link
							href="/"
							className="flex items-center gap-3 group w-fit"
						>
							<div className="p-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20 group-hover:border-emerald-500/50 transition-colors">
								<Building className="w-6 h-6 text-emerald-400" />
							</div>
							<span className="font-bold text-xl tracking-wide text-white">
								ANB Unique
							</span>
						</Link>
						<p className="text-xs text-slate-400 leading-relaxed">
							Redefining luxury living and commercial spaces in
							Bangladesh with unparalleled transparency and
							architectural excellence.
						</p>
						{/* Social Icons */}
					</div>

					{/* Column 2: Quick Links */}
					<div>
						<h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
							Explore
						</h4>
						<ul className="space-y-4">
							<li>
								<Link
									href="#projects"
									className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
								>
									Active Projects (চলমান প্রজেক্ট)
								</Link>
							</li>
							<li>
								<Link
									href="#projects"
									className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
								>
									Completed Projects
								</Link>
							</li>
							<li>
								<Link
									href="#materials"
									className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
								>
									Material Transparency
								</Link>
							</li>
							<li>
								<Link
									href="#tour"
									className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
								>
									360° Virtual Tour
								</Link>
							</li>
						</ul>
					</div>

					{/* Column 3: Resources & Corporate */}
					<div>
						<h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
							Resources
						</h4>
						<ul className="space-y-4">
							<li>
								<Link
									href="#contact"
									className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
								>
									Client Concierge (যোগাযোগ)
								</Link>
							</li>
							<li>
								<Link
									href="#land"
									className="text-sm text-emerald-400 font-semibold hover:text-emerald-300 transition-colors"
								>
									Share Your Land (যৌথ উদ্যোগ)
								</Link>
							</li>
							<li>
								<Link
									href="#faq"
									className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
								>
									Frequently Asked Questions
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
								>
									Privacy Policy
								</Link>
							</li>
						</ul>
					</div>

					{/* Column 4: Quick Contact Info */}
					<div>
						<h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
							Contact Details
						</h4>
						<ul className="space-y-4 text-xs text-slate-400">
							<li className="flex items-start gap-3">
								<MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
								<span>
									Level 5, K M Max Tower, Upashahar Mor,
									Rajshahi
								</span>
							</li>
							<li className="flex items-center gap-3">
								<Phone className="w-4 h-4 text-emerald-400 shrink-0" />
								<span>+880 1711-000000</span>
							</li>
							<li className="flex items-center gap-3">
								<Mail className="w-4 h-4 text-emerald-400 shrink-0" />
								<span>info@anbunique.com</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Section: Copyright */}
				<div className="pt-8 mt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
					<p>
						© {currentYear} ANB Unique Real Estate. All Rights
						Reserved.
					</p>
					<p className="flex items-center gap-1">
						Engineered with{" "}
						<Heart className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500 animate-pulse" />{" "}
						by Titonex
					</p>
				</div>
			</div>
		</footer>
	);
}
