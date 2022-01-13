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

export const [
  LoginUserAvatorProvider,
  useLoginUserAvatorContext,
  useSetLoginUserAvatorContext,
] = constate(
  () => {
    const [loginUserAvator, setloginUserAvator] =
      useState<File | undefined>(undefined);
    return { loginUserAvator, setloginUserAvator };
  },
  (value) => value.loginUserAvator,
  (value) => value.setloginUserAvator
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  return (
    <>
      <LoginUserAvatorProvider>
        <ConstateLoginUsernameProvider>
          {props.children}
        </ConstateLoginUsernameProvider>
      </LoginUserAvatorProvider>
    </>
  );
};
