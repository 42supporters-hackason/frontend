import { useEffect } from "react";
import { ApplyDetailCard } from "../../molecules/Cards/ApplyDetailCard";
import { useGetAllPosts } from "../../../hooks/useGetAllPosts";

type PropsType = {
  onClickId: number | undefined;
  setOnClickId: React.Dispatch<React.SetStateAction<number | undefined>>;
};

export const ApplyDetailCardsList = (props: PropsType) => {
  const { onClickId, setOnClickId } = props;
  const { getAllPosts, allPosts } = useGetAllPosts();

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
      {allPosts.map((item) => {
        return (
          <ApplyDetailCard
            key={item.id}
            id={item.id}
            username={item.authorName}
            title={item.title}
            beginTime={item.beginTime}
            driverId={item.driverId}
            driverName={item.driverName}
            endTime={item.endTime}
            isMyRelatedPost={item.isMyRelatedPost}
            requiredSkills={item.requiredSkills}
            onClickId={onClickId}
            setOnClickId={setOnClickId}
          />
        );
      })}
    </>
  );
};
