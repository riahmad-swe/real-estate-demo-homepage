"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const navRef = useRef<HTMLElement>(null);

	// ডেস্কটপ এবং মোবাইল মেনুর জন্য সেম লিংক ডাটা
	const navLinks = [
		{ name: "Quality", href: "/#quality" },
		{ name: "Team", href: "/#team" },
		{ name: "360 Tour", href: "/#virtual-tour" },
		{ name: "Neighborhood", href: "/#neighborhood" },
		{ name: "Investment", href: "/#investment-calculator" },
		{ name: "Landowner", href: "/#landowner-corner" },
		{ name: "Reviews", href: "/#reviews" },
		{ name: "FAQ", href: "/#faq" },
		{ name: "Contact", href: "/#contact" },
	];

	// Click outside to close function
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				navRef.current &&
				!navRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		// Event listener যোগ করা হলো
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// ক্লিনআপ
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<nav
			ref={navRef}
			className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xs bg-white/75"
		>
			{/* ডাইনামিক প্যাডিং: স্ক্রিন অনুযায়ী রেসপন্সিভ */}
			<div className="px-4 lg:px-12 xl:px-24 2xl:px-48">
				<div className="flex items-center justify-between h-16">
					{/* Logo Section */}
					<Link
						href="/"
						className="flex items-center gap-3 group shrink-0"
					>
						<img
							src="/logo.png"
							alt="Logo"
							className="w-10 h-10 object-contain"
						/>
						<span className="font-bold md:text-xl tracking-wide group-hover:text-blue-500 transition-colors">
							ANB Unique Real Estate
						</span>
					</Link>

					{/* Desktop Links (xl স্ক্রিন বা তার চেয়ে বড় স্ক্রিনের জন্য) */}
					<div className="hidden xl:flex items-center gap-5 font-medium text-[15px]">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className="hover:text-blue-400 transition-colors"
							>
								{link.name}
							</Link>
						))}
					</div>

					{/* Client Portal Button (ডেস্কটপের জন্য) */}
					<div className="hidden xl:flex items-center gap-4 text-sm font-medium shrink-0">
						<button className="px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-full transition-colors text-white shadow-lg shadow-blue-600/20">
							Client Portal
						</button>
					</div>

					{/* Mobile/Tablet Menu Toggle (xl স্ক্রিনের নিচে শো করবে) */}
					<button
						className="xl:hidden p-2 transition-colors"
						onClick={() => setIsOpen(!isOpen)}
						aria-label="Toggle Menu"
					>
						{isOpen ? (
							<X className="w-7 h-7" />
						) : (
							<Menu className="w-7 h-7" />
						)}
					</button>
				</div>
			</div>

			{/* Mobile/Tablet Menu Dropdown */}
			<div
				className={`xl:hidden absolute top-full left-0 w-full bg-white border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${
					isOpen
						? "max-h-125 opacity-100 py-6"
						: "max-h-0 opacity-0 py-0"
				}`}
			>
				<div className="px-6 flex flex-col gap-4 font-medium">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							onClick={() => setIsOpen(false)} // লিংকে ক্লিক করলে মেনু ক্লোজ হবে
							className="block origin-left text-base active:scale-85 transition-transform duration-200"
						>
							{link.name}
						</Link>
					))}

					<div className="mt-2 border-t border-white/10">
						<button className="w-full px-5 py-3 bg-blue-600/10 border border-blue-500/30 hover:bg-blue-600 hover:text-white rounded-xl text-blue-500 font-bold transition-colors">
							Client Portal
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}
