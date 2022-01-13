import { useCallback, useState } from "react";
import { postDataType } from "./../interfase";
import http from "../http-common"

type postDataAndIsnavigatorType = postDataType & {
	isNavigator: boolean;
	isMyRelatedPost: boolean;
}

export const useGetAllPosts = () => {
	const [allPosts, setAllPosts] = useState<postDataAndIsnavigatorType[]>([])

  const getAllPosts = useCallback(async () => {
		let tmpArray: postDataAndIsnavigatorType[] = []
		const loginId = localStorage.getItem("id")
    await http
      .get<postDataType[]>("/posts")
      .then((res) => {
				res.data.map((item) => {
					let isNavigator = false
					let isMyRelatedPost = false
					if (loginId === String(item.navigatorId)) {
						isNavigator = true
					}
					if (loginId === String(item.navigatorId) || loginId === String(item.driverId)) {
						isMyRelatedPost = true
					}
					tmpArray.push({
						id: item.id,
						title: item.title,
						beginTime: item.beginTime,
						endTime: item.endTime,
						driverId: item.driverId,
						authorName: item.authorName,
						navigatorId: item.navigatorId,
						otherSkill: item.otherSkill,
						requiredSkill: item.requiredSkill,
						isNavigator: isNavigator,
						isMyRelatedPost: isMyRelatedPost,
					})
				})
      });
			setAllPosts(tmpArray)
  }, []);

  return { getAllPosts, allPosts };
};
