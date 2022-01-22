import { useCallback, useState } from "react";
import http from "../http-common";
import { User } from "../interfase";

export const useGetSpecificUser = () => {
  const [specificUser, setSpecificUser] = useState<User | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const getSpecificUser = useCallback(async (id: number) => {
    setIsLoading(true);

    await http
      .get<Array<User>>(`/users/${id}`)
      .then((res: any) => {
        setSpecificUser({
          id: res.data.id,
          name: res.data.name,
          mail: res.data.mail,
          evaluationPoint: res.data.evaluationPoint,
          icon: res.data.icon,
          otherSkill: res.data.otherSkill,
          postID: res.data.postID,
          userSkills: res.data.userSkills,
        });
        localStorage.setItem("name", res.data.name);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { getSpecificUser, specificUser, isLoading };
};
