import { postDataType } from '../../../interfase';
import { MatchingScheduleCrad } from '../../molecules/Cards/MatchingScheduleCrad';

const data: postDataType[] = [
  {
    username: "yasui taisei",
    postComment: "AWSの勉強がしたいです",
    isNavigator: true,
  },
  {
    username: "hoge hoge",
    postComment: "Djangoの勉強がしたいです",
    isNavigator: false,
  },
]

export const MatchScheduleCardsList = () => {
  return (
    <>
      {data.map((item) => (
        <MatchingScheduleCrad username={item.username} postComment={item.postComment} isNavigator={item.isNavigator} />
      ))}
    </>
  )
}
