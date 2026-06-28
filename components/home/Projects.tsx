"use client";
import { useState } from "react";
import { projects, Project } from "@/data/projects";
import ProjectDetailsModal from "./ProjectDetailsModal";

export default function Projects() {
	const [selectedProject, setSelectedProject] = useState<Project | null>(
		null,
	);

	return (
		<section className="py-24 lg:px-48 px-6">
			<h2 className="text-4xl font-bold mb-12 text-center">
				Active Projects
			</h2>
			<div className="grid md:grid-cols-2 gap-8">
				{projects.map((p) => (
					<div
						key={p.id}
						className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all"
					>
						<h3 className="text-2xl font-bold mb-4">{p.name}</h3>
						<button
							onClick={() => setSelectedProject(p)}
							className="text-blue-400 font-semibold hover:underline"
						>
							View Details & Move-in Calculator →
						</button>
					</div>
				))}
			</div>

			{selectedProject && (
				<ProjectDetailsModal
					project={selectedProject}
					onClose={() => setSelectedProject(null)}
				/>
			)}
		</section>
	);
}
