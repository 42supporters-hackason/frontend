import constate from "constate";
import React, { ReactNode, useState } from "react";

export const [
  ChatNavigatorProvider,
  useChatNavigatorContext,
  useSetChatNavigatorContext,
] = constate(
  () => {
    const [navigator, setNavigator] = useState<string | undefined>(undefined);
    return { navigator, setNavigator };
  },
  (value) => value.navigator,
  (value) => value.setNavigator
);

export const [
  ChatDriverProvider,
  useChatDriverContext,
  useSetChatDriverContext,
] = constate(
  () => {
    const [driver, setDriver] = useState<string | undefined>(undefined);
    return { driver, setDriver };
  },
  (value) => value.driver,
  (value) => value.setDriver
);

export const ChatUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;

  return (
    <ChatNavigatorProvider>
      <ChatDriverProvider>{children}</ChatDriverProvider>
    </ChatNavigatorProvider>
  );
};
