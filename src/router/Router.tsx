import React, { VFC } from "react";
import { Route, Routes } from "react-router-dom";
import { ApplyDetail } from "../components/pages/ApplyDetail";
import { ApplyNavigator } from "../components/pages/ApplyNavigator";
import { Home } from "../components/pages/Home";
import { RecruteNavigator } from "../components/pages/RecruteNavigator";
import { ApplyPostProvider } from "../providers/ApplyPostProvider";

export const Router: VFC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recrute" element={<RecruteNavigator />} />
      <Route path="/apply" element={
				<ApplyPostProvider>
					<ApplyNavigator />
				</ApplyPostProvider>
			} />
      <Route path="/apply/detail" element={
				<ApplyPostProvider>
					<ApplyDetail />
				</ApplyPostProvider>
			} />
    </Routes>
  );
};
