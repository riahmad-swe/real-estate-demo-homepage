"use client";
import { useState } from "react";
import {
	X,
	Construction,
	Truck,
	MapPin,
	Building2,
	Calendar,
	ShieldCheck,
} from "lucide-react";

// 1. Unified Project Type based on our new data structure
type ProjectType = {
	id: string;
	name: string;
	location: string;
	// Active specific
	type?: string;
	size?: string;
	unitsLeft?: number;
	progress?: { piling: number; structure: number; finishing: number };
	image?: string;
	// Completed specific
	handoverDate?: string;
	certNumber?: string;
	renderImg?: string;
	realityImg?: string;
};

export default function ProjectDetailsModal({
	project,
	onClose,
}: {
	project: ProjectType;
	onClose: () => void;
}) {
	const [isPriority, setIsPriority] = useState(false);

	// Determine if it's an active or completed project based on existing fields
	const isActiveProject = !!project.progress;

	// Calculate move-in: Mock logic for demo purposes based on current date
	const calculateMoveIn = () => {
		if (!isActiveProject) return "Already Delivered";

		const date = new Date(); // Use current date as base
		// If finishing is 0, add 12 months. If 50, add 6. Priority subtracts 2 months.
		const baseMonthsRemaining = project.progress
			? Math.max(1, Math.round((100 - project.progress.finishing) * 0.12))
			: 12;
		const finalMonths = isPriority
			? Math.max(1, baseMonthsRemaining - 2)
			: baseMonthsRemaining;

		date.setMonth(date.getMonth() + finalMonths);
		return date.toLocaleDateString("en-US", {
			month: "long",
			year: "numeric",
		});
	};

	return (
		<div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
			<div className="bg-slate-900 border border-white/10 w-full max-w-4xl rounded-4xl p-6 md:p-10 text-white relative shadow-2xl animate-in zoom-in-95 duration-300 my-auto">
				{/* Close Button */}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-white/5 rounded-full hover:bg-white/10 hover:rotate-90 transition-all border border-white/10"
				>
					<X className="w-5 h-5 text-slate-400" />
				</button>

				{/* Header Section */}
				<div className="mb-8 pr-12">
					<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider mb-4">
						{isActiveProject ? (
							<>
								<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>{" "}
								Active Project
							</>
						) : (
							<>
								<ShieldCheck className="w-4 h-4 text-blue-400" />{" "}
								Completed Project
							</>
						)}
					</div>
					<h2 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">
						{project.name}
					</h2>
					<p className="text-emerald-400 flex items-center gap-2 font-medium">
						<MapPin className="w-4 h-4" /> {project.location}
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 lg:gap-12">
					{/* Left Column: Image or Specific Details */}
					<div>
						<div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg mb-6 h-48 md:h-64">
							<img
								src={
									isActiveProject
										? project.image
										: project.realityImg
								}
								alt={project.name}
								className="w-full h-full object-cover"
							/>
						</div>

						<div className="grid grid-cols-2 gap-4">
							{isActiveProject ? (
								<>
									<div className="bg-white/5 p-4 rounded-xl border border-white/5">
										<p className="text-[10px] uppercase text-slate-500 font-bold mb-1">
											Type
										</p>
										<p className="font-semibold text-sm flex items-center gap-2">
											<Building2 className="w-4 h-4 text-blue-400" />{" "}
											{project.type}
										</p>
									</div>
									<div className="bg-white/5 p-4 rounded-xl border border-white/5">
										<p className="text-[10px] uppercase text-slate-500 font-bold mb-1">
											Layout
										</p>
										<p className="font-semibold text-sm">
											{project.size}
										</p>
									</div>
								</>
							) : (
								<>
									<div className="bg-white/5 p-4 rounded-xl border border-white/5">
										<p className="text-[10px] uppercase text-slate-500 font-bold mb-1">
											Handover
										</p>
										<p className="font-semibold text-sm flex items-center gap-2">
											<Calendar className="w-4 h-4 text-emerald-400" />{" "}
											{project.handoverDate}
										</p>
									</div>
									<div className="bg-white/5 p-4 rounded-xl border border-white/5 overflow-hidden">
										<p className="text-[10px] uppercase text-slate-500 font-bold mb-1">
											Approval
										</p>
										<p className="font-semibold text-xs text-blue-400 truncate">
											{project.certNumber}
										</p>
									</div>
								</>
							)}
						</div>
					</div>

					{/* Right Column: Interaction & Stats */}
					<div className="flex flex-col justify-center">
						{isActiveProject ? (
							<>
								{/* Construction Stats */}
								<div className="space-y-6 mb-8">
									<h3 className="font-bold text-xl flex items-center gap-2 text-white">
										<Construction className="w-5 h-5 text-emerald-400" />{" "}
										Live Milestones
									</h3>

									<div className="bg-white/5 p-5 rounded-2xl border border-white/5 space-y-5">
										{/* Piling */}
										<div>
											<div className="flex justify-between text-xs mb-2">
												<span className="text-slate-300 font-medium">
													Piling & Foundation
												</span>
												<span className="text-emerald-400 font-bold">
													{project.progress?.piling}%
												</span>
											</div>
											<div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
												<div
													className="bg-emerald-500 h-full rounded-full"
													style={{
														width: `${project.progress?.piling}%`,
													}}
												/>
											</div>
										</div>
										{/* Structure */}
										<div>
											<div className="flex justify-between text-xs mb-2">
												<span className="text-slate-300 font-medium">
													Super Structure
												</span>
												<span className="text-blue-400 font-bold">
													{
														project.progress
															?.structure
													}
													%
												</span>
											</div>
											<div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
												<div
													className="bg-blue-500 h-full rounded-full"
													style={{
														width: `${project.progress?.structure}%`,
													}}
												/>
											</div>
										</div>
										{/* Finishing */}
										<div>
											<div className="flex justify-between text-xs mb-2">
												<span className="text-slate-300 font-medium">
													Internal Finishing
												</span>
												<span className="text-purple-400 font-bold">
													{
														project.progress
															?.finishing
													}
													%
												</span>
											</div>
											<div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
												<div
													className="bg-purple-500 h-full rounded-full"
													style={{
														width: `${project.progress?.finishing}%`,
													}}
												/>
											</div>
										</div>
									</div>
								</div>

								{/* Owner Dashboard Move-in logic */}
								<div className="bg-slate-900/80 p-6 rounded-2xl border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)] mt-auto">
									<h3 className="font-bold mb-2 flex items-center gap-2 text-white">
										<Truck className="w-5 h-5 text-blue-400" />{" "}
										Move-in Estimation
									</h3>
									<p className="text-xs text-slate-400 mb-5 leading-relaxed">
										Our AI calculates your expected handover
										date based on current finishing
										progress.
									</p>

									<label className="flex items-center gap-3 p-3 bg-white/5 rounded-xl cursor-pointer hover:bg-white/10 transition-colors border border-white/5">
										<input
											type="checkbox"
											checked={isPriority}
											onChange={(e) =>
												setIsPriority(e.target.checked)
											}
											className="w-4 h-4 accent-blue-500 rounded"
										/>
										<div>
											<span className="font-bold text-sm block text-slate-200">
												Fast-Track Interior
											</span>
										</div>
									</label>

									<div className="mt-5 border-t border-white/10 pt-5 flex justify-between items-end">
										<p className="text-slate-400 text-xs font-medium uppercase tracking-wider">
											Expected Date
										</p>
										<p className="text-2xl font-black text-blue-400 tracking-tight">
											{calculateMoveIn()}
										</p>
									</div>
								</div>
							</>
						) : (
							<div className="h-full flex flex-col justify-center text-center p-8 bg-white/5 border border-white/10 rounded-3xl">
								<ShieldCheck className="w-16 h-16 text-emerald-500/50 mx-auto mb-4" />
								<h3 className="text-2xl font-bold text-white mb-2">
									Project Delivered
								</h3>
								<p className="text-sm text-slate-400 leading-relaxed">
									This masterpiece has been successfully
									handed over to the owners. To view available
									resale units or rent options, please contact
									our concierge.
								</p>
								<button className="mt-8 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-colors">
									Contact Concierge
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
