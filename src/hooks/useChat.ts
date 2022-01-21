import { useCallback, useEffect, useRef, useState } from "react";
import socketIOClient, { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";
const SOCKET_SERVER_URL = "http://localhost:4000";

type MessageType = {
  owndByCurrentUser: boolean;
  body: string | null;
};

export const useChat = (roomId: number) => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const socketRef = useRef<Socket<DefaultEventsMap> | null>();

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId },
    });

    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message: any) => {
      if (socketRef.current !== undefined && socketRef.current !== null) {
        const incomingMessage = {
          ...message,
          owndByCurrentUser: message.senderId === socketRef.current.id,
        };
        setMessages((messages) => [...messages, incomingMessage]);
      }
    });

    return () => {
      if (socketRef.current !== undefined && socketRef.current !== null) {
        socketRef.current.disconnect();
      }
    };
  }, [roomId]);

  const sendMessage = useCallback((messageBody: any) => {
    if (socketRef.current !== undefined && socketRef.current !== null) {
      socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
        body: messageBody,
        senderId: socketRef.current.id,
      });
    }
  }, []);

  return { messages, sendMessage };
};
