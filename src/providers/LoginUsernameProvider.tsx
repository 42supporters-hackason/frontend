import React, { ReactNode, useState } from "react";
import constate from "constate";

export const [
  ConstateLoginUsernameProvider,
  useLoginUsernameContext,
  useSetLoginUsernameContext,
] = constate(
  () => {
    const [loginUsername, setLoginUsername] = useState<string>("");
    return { loginUsername, setLoginUsername };
  },
  (value) => value.loginUsername,
  (value) => value.setLoginUsername
);

export const LoginIdProvider = (props: { children: ReactNode }) => {
  return <ConstateLoginUsernameProvider>{props.children}</ConstateLoginUsernameProvider>;
};
