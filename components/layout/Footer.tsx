"use client";

import Link from "next/link";
import { Heart, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="relative bg-slate-950 pt-16 pb-8 overflow-hidden border-t border-white/10 mt-auto">
			{/* Ambient Footer Glow */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-75 bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none" />

			<div className="px-4 lg:px-24 2xl:px-48 relative z-10">
				{/* Main Footer Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
					{/* Column 1: Brand Info */}
					<div className="flex flex-col gap-3">
						<Link
							href="/"
							className="flex items-center gap-2 group w-fit"
						>
							<img
								src="/logo.png"
								alt="Logo"
								className="w-10 h-10 object-contain"
							/>
							<span className="font-bold text-lg tracking-wide text-white">
								ANB Unique Real Estate
							</span>
						</Link>
						<p className="text-sm text-slate-400 leading-relaxed">
							Redefining luxury living and commercial spaces in
							Bangladesh with unparalleled transparency and
							architectural excellence.
						</p>
					</div>

					{/* Column 2: Quick Links */}
					<div>
						<h4 className="text-white font-bold mb-3 uppercase tracking-wider text-sm">
							Explore
						</h4>
						<ul className="space-y-1.5">
							<li>
								<Link
									href="#projects"
									className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
								>
									Active Projects
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
						<h4 className="text-white font-bold mb-3 uppercase tracking-wider text-sm">
							Resources
						</h4>
						<ul className="space-y-1.5">
							<li>
								<Link
									href="#contact"
									className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
								>
									Client Support
								</Link>
							</li>
							<li>
								<Link
									href="#land"
									className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
								>
									Share Your Land
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
						<h4 className="text-white font-bold mb-3 uppercase tracking-wider text-sm">
							Contact Details
						</h4>
						<ul className="space-y-3 text-sm text-slate-400">
							<li className="flex items-start gap-2">
								<MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
								<span>
									K M Max Tower, Upashahar Mor, Rajshahi
								</span>
							</li>
							<li className="flex items-center gap-2">
								<Phone className="w-4 h-4 text-emerald-400 shrink-0" />
								<span>+880 1711-480903</span>
							</li>
							<li className="flex items-center gap-2">
								<Mail className="w-4 h-4 text-emerald-400 shrink-0" />
								<span>anbuniquerealestate@gmail.com</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Section: Copyright */}
				<div className="pt-4 mt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
					<p>
						© {currentYear} ANB Unique Real Estate. All Rights
						Reserved.
					</p>
					<p className="flex items-center gap-1">
						Built with{" "}
						<Heart className="w-3.5 h-3.5 stroke-blue-500 fill-emerald-500 animate-pulse" />{" "}
						by Titonex
					</p>
				</div>
			</div>
		</footer>
	);
}
