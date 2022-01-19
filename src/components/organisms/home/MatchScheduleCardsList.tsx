import { Dispatch, SetStateAction, useEffect } from "react";
import { MatchingScheduleCrad } from "../../molecules/Cards/MatchingScheduleCrad";
import { useGetAllPosts } from "../../../hooks/useGetAllPosts";

type PropsType = {
  isOpenChat: boolean;
  setIsOpenChat: Dispatch<SetStateAction<boolean>>;
};

export const MatchScheduleCardsList = (props: PropsType) => {
  const { isOpenChat, setIsOpenChat } = props;
  const { getAllPosts, allPosts } = useGetAllPosts();

  useEffect(() => {
    getAllPosts();
  }, []);

  console.log(allPosts);

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
            navigatorId={item.navigatorId}
            driverId={item.driverId}
            requiredSkills={item.requiredSkills}
            isNavigator={item.isNavigator}
            isMyRelatedPost={item.isMyRelatedPost}
            isOpenChat={isOpenChat}
            setIsOpenChat={setIsOpenChat}
          />
        );
      })}
    </>
  );
};
