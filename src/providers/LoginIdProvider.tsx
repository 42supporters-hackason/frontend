import React, { ReactNode, useState } from "react";
import constate from "constate";

export const [
  ConstateLoginIdProvider,
  useLoginIdContext,
  useSetLoginIdContext,
] = constate(
  () => {
    const [loginId, setLoginId] = useState<string>("");
    return { loginId, setLoginId };
  },
  (value) => value.loginId,
  (value) => value.setLoginId
);

export const LoginIdProvider = (props: { children: ReactNode }) => {
  return <ConstateLoginIdProvider>{props.children}</ConstateLoginIdProvider>;
};
