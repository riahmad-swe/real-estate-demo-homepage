// data/projects.ts
export interface FloorDetail {
	floor: number;
	molding: number;
	internalWork: number; // percentage
}

export interface Project {
	id: string;
	name: string;
	location: string;
	status: "ACTIVE" | "COMPLETED";
	progress: number;
	estFinishDate: Date; // Use Date object for accurate calculation
	floors: FloorDetail[];
	siteCamLink?: string;
}

export const projects: Project[] = [
	{
		id: "1",
		name: "ANB Alpine Tower",
		location: "Rajshahi, Boalia",
		status: "ACTIVE",
		progress: 65,
		estFinishDate: new Date("2026-12-30"),
		floors: [
			{ floor: 1, molding: 100, internalWork: 100 },
			{ floor: 2, molding: 100, internalWork: 80 },
			{ floor: 3, molding: 100, internalWork: 40 },
			{ floor: 4, molding: 60, internalWork: 0 },
		],
	},
];
