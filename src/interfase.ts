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
    username: string;
    postComment: string;
    isNavigator: boolean;
}
