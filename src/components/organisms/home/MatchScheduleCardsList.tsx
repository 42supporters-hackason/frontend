import { postDataType } from "../../../interfase";
import { MatchingScheduleCrad } from "../../molecules/Cards/MatchingScheduleCrad";
import { useGetAllPosts } from "../../../hooks/useGetAllPosts"
import { useEffect } from "react";

const isNavigator = false;

export const MatchScheduleCardsList = () => {
  const { getAllPosts, allPosts } = useGetAllPosts()

  useEffect(() => {
    getAllPosts()
  }, [])

  console.log(allPosts)

  return (
    <>
      {allPosts.map((item) => {
        {item.isMyRelatedPost ? (
          <MatchingScheduleCrad
            username={item.authorName}
            title={item.title}
            isNavigator={item.isNavigator}
          />
        ): <></>}
      }
      )}
    </>
  );
};
