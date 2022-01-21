import { useCallback, useState } from "react";
import { postDataType } from "./../interfase";
import http from "../http-common";

type postDataAndIsnavigatorType = postDataType & {
  isNavigator: boolean;
  isMyRelatedPost: boolean;
};

export const useGetAllPosts = () => {
  const [allPosts, setAllPosts] = useState<postDataAndIsnavigatorType[]>([]);

  const getAllPosts = useCallback(async () => {
    let tmpArray: postDataAndIsnavigatorType[] = [];
    const loginId = localStorage.getItem("id");
    await http.get<postDataType[]>("/posts").then((res) => {
      console.log(res);
      res.data.map((item) => {
        let isNavigator = false;
        let isMyRelatedPost = false;
        if (loginId === String(item.navigatorId)) {
          isNavigator = true;
        }
        if (
          loginId === String(item.navigatorId) ||
          loginId === String(item.driverId)
        ) {
          isMyRelatedPost = true;
        }
        console.log(item.requiredSkills);
        if (item.requiredSkills?.length) {
          tmpArray.push({
            id: item.id,
            title: item.title,
            beginTime: item.beginTime,
            endTime: item.endTime,
            driverId: item.driverId,
            authorName: item.authorName,
            navigatorName: item.navigatorName,
            driverName: item.driverName,
            navigatorId: item.navigatorId,
            otherSkill: item.otherSkill,
            requiredSkills: [
              {
                id: item.requiredSkills[0].id,
                skill: item.requiredSkills[0].skill,
              },
            ],
            isNavigator: isNavigator,
            isMyRelatedPost: isMyRelatedPost,
          });
        } else {
          tmpArray.push({
            id: item.id,
            title: item.title,
            beginTime: item.beginTime,
            endTime: item.endTime,
            driverId: item.driverId,
            navigatorName: item.navigatorName,
            driverName: item.driverName,
            authorName: item.authorName,
            navigatorId: item.navigatorId,
            otherSkill: item.otherSkill,
            requiredSkills: [],
            isNavigator: isNavigator,
            isMyRelatedPost: isMyRelatedPost,
          });
        }
      });
    });
    setAllPosts(tmpArray);
  }, []);

  return { getAllPosts, allPosts };
};
