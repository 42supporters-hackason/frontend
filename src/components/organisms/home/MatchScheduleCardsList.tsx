import { useEffect } from "react";
import { MatchingScheduleCrad } from "../../molecules/Cards/MatchingScheduleCrad";
import { useGetAllPosts } from "../../../hooks/useGetAllPosts"

export const MatchScheduleCardsList = () => {
  const { getAllPosts, allPosts } = useGetAllPosts()

  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <>
      {allPosts.map((item) => {
        return (
          <MatchingScheduleCrad
            key={item.id}
            username={item.authorName}
            title={item.title}
            beginTime={item.beginTime}
            endTime={item.endTime}
            isNavigator={item.isNavigator}
          />
        )
      }
      )}
    </>
  );
};
