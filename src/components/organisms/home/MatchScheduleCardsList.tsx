import { postDataType } from '../../../interfase';
import { MatchingScheduleCrad } from '../../molecules/Cards/MatchingScheduleCrad';

const data: postDataType[] = [
  {
    id: 1,
    title: "AWSを学習したい",
    beginTime: new Date('December 17, 1995 03:24:00'),
    endTime:new Date('December 17, 1995 03:24:00'),
    driverId: 1,
    username: "ytaisei",
    navigatorId: 1,
    otherSkill: "",
    requiredSkill:
    [
      {
        id: 1,
        skill: "java"
      },
    ]
  },
]

const isNavigator = false;

export const MatchScheduleCardsList = () => {
  return (
    <>
      {data.map((item) => (
        <MatchingScheduleCrad username={item.username} title={item.title} isNavigator={isNavigator} />
      ))}
    </>
  )
}
