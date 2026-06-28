"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-black/5">
			<div className="px-6 lg:px-48">
				<div className="flex items-center justify-between h-20">
					{/* Logo Section */}
					<Link
						href="/"
						className="flex items-center gap-3 group"
					>
						<img
							src="/logo.png"
							alt="Logo"
							className="w-10 h-10"
						/>
						<span className="font-bold text-xl tracking-wide">
							ANB Unique Real State
						</span>
					</Link>

					{/* Desktop Links */}
					<div className="hidden md:flex items-center gap-6 font-medium">
						<Link
							href="#projects"
							className="hover:text-blue-600 transition-colors"
						>
							Projects
						</Link>
						<Link
							href="#transparency"
							className="hover:text-blue-600 transition-colors"
						>
							Transparency
						</Link>
						<Link
							href="#materials"
							className="hover:text-blue-600 transition-colors"
						>
							Quality Audits
						</Link>
						<Link
							href="#landowners"
							className="hover:text-blue-600 transition-colors"
						>
							Landowners
						</Link>
						<Link
							href="#contact"
							className="hover:text-blue-600 transition-colors"
						>
							Support
						</Link>
					</div>

					<div className="flex items-center gap-4 text-sm font-medium">
						<button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-full transition-colors text-white cursor-pointer">
							Client Portal
						</button>
					</div>

					{/* Mobile Menu Toggle */}
					<button
						className="md:hidden p-2"
						onClick={() => setIsOpen(!isOpen)}
					>
						<Menu className="w-6 h-6" />
					</button>
				</div>
			</div>

			{/* Mobile Menu Dropdown */}
			{isOpen && (
				<div className="md:hidden bg-slate-900 border-b border-white/10 px-6 py-4 flex flex-col gap-4">
					<Link
						href="#projects"
						className="text-slate-300 hover:text-emerald-400"
					>
						Projects
					</Link>
					<Link
						href="#transparency"
						className="text-slate-300 hover:text-emerald-400"
					>
						Transparency
					</Link>
					<Link
						href="#materials"
						className="text-slate-300 hover:text-emerald-400"
					>
						Quality Assurance
					</Link>
					<button className="w-full px-5 py-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 font-medium">
						Client Portal
					</button>
				</div>
			)}
		</nav>
	);
}
