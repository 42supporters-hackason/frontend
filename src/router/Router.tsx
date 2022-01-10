import React, { VFC } from "react";
import { Route, Routes } from "react-router-dom";
import { ApplyDetail } from "../components/pages/ApplyDetail";
import { ApplyNavigator } from "../components/pages/ApplyNavigator";
import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { RecruteNavigator } from "../components/pages/RecruteNavigator";
import { ApplyPostProvider } from "../providers/ApplyPostProvider";
import { RecrutePostProvider } from "../providers/RecrutePostProvider";

export const Router: VFC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route
        path="/recrute"
        element={
          <RecrutePostProvider>
            <RecruteNavigator />
          </RecrutePostProvider>
        }
      />
      <Route
        path="/apply"
        element={
          <ApplyPostProvider>
            <ApplyNavigator />
          </ApplyPostProvider>
        }
      />
      <Route
        path="/apply/detail"
        element={
          <ApplyPostProvider>
            <ApplyDetail />
          </ApplyPostProvider>
        }
      />
    </Routes>
  );
};
