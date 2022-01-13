export type User = {
	id: number;
	name: string;
	mail: string;
	evaluationPoint: number;
	icon: File;
	otherSkill: string;
	postID: number[];
	userSkills: {
		id: number;
		skill: string;
	}[];
}

export type postDataType = {
	id: number;
	title: string;
	beginTime: Date;
	endTime: Date;
	driverId: number | undefined;
	authorName: string;
	navigatorId: number | undefined;
	otherSkill: string;
	requiredSkill: {
		id: number;
		skill: string;
	}[];
}
