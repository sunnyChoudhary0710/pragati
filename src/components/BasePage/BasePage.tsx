import React from "react";
import { Header, Intro } from "../";

const BasePage = () => {
	return (
		<main>
			<div className="header-blur-img"></div>
			<div className="dome"></div>
			<Header />
			<Intro />
		</main>
	);
};

export default BasePage;
