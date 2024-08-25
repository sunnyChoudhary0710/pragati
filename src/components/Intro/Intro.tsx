import React from "react";
import Button from "../Button/Button";

const Intro = () => {
	return (
		<div className="intro-wrapper">
			<div>
            <div className="name">
				<h1>PRAGATI BALHARA</h1>
			</div>
			<div className="desc">
				<div className="desc-heading inter-600">UI/UX Designer</div>
				<div className="desc-body">
					I’m fascinated about user-friendly experiences that are both intuitive
					and delightful. Explore my portfolio to see my design journey!
				</div>
				<div className="desc-action-button">
					<Button type={"p-button"} label="Let's Chat" onClick={() => {}} />
				</div>
			</div>
            </div>
		</div>
	);
};

export default Intro;
