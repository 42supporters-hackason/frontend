import React, { VFC } from "react";
import { Route, Routes } from "react-router-dom";
import { ApplyDetail } from "../components/pages/ApplyDetail";
import { ApplyNavigator } from "../components/pages/ApplyNavigator";
import { Chat } from "../components/pages/Chat";
import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { RecruteNavigator } from "../components/pages/RecruteNavigator";

export const Router: VFC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/recrute" element={<RecruteNavigator />} />
      <Route path="/apply" element={<ApplyNavigator />} />
      <Route path="/apply/detail" element={<ApplyDetail />} />
      <Route path="/chat/:roomId" element={<Chat />} />
    </Routes>
  );
};
