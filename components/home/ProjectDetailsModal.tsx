"use client";
import { useState } from "react";
import { X, Construction, Truck } from "lucide-react";
import { Project } from "@/data/projects";

export default function ProjectDetailsModal({
	project,
	onClose,
}: {
	project: Project;
	onClose: () => void;
}) {
	const [isPriority, setIsPriority] = useState(false);

	// Calculate move-in: Default = Finish Date + 4 months (fit-out). Priority = Finish Date + 1 month.
	const calculateMoveIn = () => {
		const date = new Date(project.estFinishDate);
		const monthsToAdd = isPriority ? 1 : 4;
		date.setMonth(date.getMonth() + monthsToAdd);
		return date.toLocaleDateString("en-US", {
			month: "long",
			year: "numeric",
		});
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-scroll">
			<div className="bg-slate-900 border border-white/10 w-full max-w-3xl rounded-3xl p-8 text-white relative shadow-2xl">
				<button
					onClick={onClose}
					className="absolute top-6 right-6 p-2 bg-white/5 rounded-full hover:bg-white/10"
				>
					<X />
				</button>

				<h2 className="text-3xl font-bold mb-2">{project.name}</h2>
				<p className="text-slate-400 mb-8">{project.location}</p>

				<div className="grid md:grid-cols-2 gap-8 mb-8">
					{/* Construction Stats */}
					<div className="space-y-6">
						<h3 className="font-semibold flex items-center gap-2">
							<Construction className="w-5 h-5" /> Construction
							Milestones
						</h3>
						{project.floors.map((f) => (
							<div
								key={f.floor}
								className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-2"
							>
								<p>Floor {f.floor}</p>
								<div className="flex items-center gap-1">
									<span className="text-sm">Molding</span>
									<div className="flex-1 bg-slate-700 h-2 rounded-full overflow-hidden">
										<div
											className="bg-emerald-500 h-full"
											style={{
												width: `${f.molding}%`,
											}}
										/>
									</div>
									<span className="text-xs">
										{f.molding}%
									</span>
								</div>
								<div className="flex items-center gap-1">
									<span className="text-sm">
										Internal Work
									</span>
									<div className="flex-1 bg-slate-700 h-2 rounded-full overflow-hidden">
										<div
											className="bg-blue-500 h-full"
											style={{
												width: `${f.internalWork}%`,
											}}
										/>
									</div>
									<span className="text-xs">
										{f.internalWork}%
									</span>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Owner Dashboard */}
				<div className="bg-linear-to-br from-blue-900/20 to-slate-800 p-6 rounded-2xl border border-blue-500/20">
					<h3 className="font-semibold mb-4 flex items-center gap-2">
						<Truck className="w-5 h-5" /> Move-in Estimation
					</h3>
					<p className="text-sm text-slate-300 mb-6">
						Calculate your move-in timeline based on construction
						finishing.
					</p>

					<label className="flex items-center gap-3 p-4 bg-white/5 rounded-xl cursor-pointer hover:bg-white/10">
						<input
							type="checkbox"
							checked={isPriority}
							onChange={(e) => setIsPriority(e.target.checked)}
							className="w-5 h-5 accent-blue-500"
						/>
						<div>
							<span className="font-bold block">
								Priority Completion
							</span>
							<span className="text-xs text-slate-400">
								Request faster internal finishing
							</span>
						</div>
					</label>

					<div className="mt-6 border-t border-white/10 pt-6">
						<p className="text-slate-400 text-sm">
							Estimated Move-in Date:
						</p>
						<p className="text-3xl font-bold text-blue-400">
							{calculateMoveIn()}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
