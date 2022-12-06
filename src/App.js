import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes></Routes>
		</BrowserRouter>
	);
};

export default App;
