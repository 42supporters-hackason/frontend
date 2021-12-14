import React, { VFC } from 'react'
import { Route, Routes } from "react-router-dom";
import { Home } from '../components/pages/Home';
import { RecruteNavigator } from '../components/pages/RecruteNavigator';
import { SearchNavigator } from '../components/pages/SearchNavigator';

export const Router: VFC = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/recrute" element={<RecruteNavigator/>} />
			<Route path="/search" element={<SearchNavigator />} />
		</Routes>
	)
}

