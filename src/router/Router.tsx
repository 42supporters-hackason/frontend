import React, { VFC } from 'react'
import { Route, Routes } from "react-router-dom";
import { ApplyDetail } from '../components/pages/ApplyDetail';
import { ApplyNavigator } from '../components/pages/ApplyNavigator';
import { Home } from '../components/pages/Home';
import { RecruteNavigator } from '../components/pages/RecruteNavigator';

export const Router: VFC = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/recrute" element={<RecruteNavigator/>} />
			<Route path="/apply" element={<ApplyNavigator />} />
			<Route path="/apply/detail" element={<ApplyDetail />} />
		</Routes>
	)
}

