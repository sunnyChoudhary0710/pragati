import React from "react";
import Button from "../Button/Button";

const EmailSubject = "Hi Pragati! Let's have a chat."

const Intro = () => {

	const triggerEmail = (emailId) => {
		if (emailId) {
			window.open(`mailto:${emailId}?subject=${EmailSubject}`)
		}
	}

	return (
		<div className="intro-wrapper">
			<div>
			<div className="desc">
				<div className="desc-name">Pragati Balhara</div>
				<div className="desc-heading inter-600">UI/UX Designer</div>
				<div className="desc-body">
					<p>I’m fascinated about user-friendly experiences that are both intuitive
					and delightful.</p>
					<p>Explore my portfolio to see my design journey!</p>
				</div>
				<div className="desc-action-button">
					<Button type={"p-button"} label="Let's Chat" onClick={() => {triggerEmail('pragatibalhara117@gmail.com')}} />
				</div>
			</div>
            </div>
		</div>
	);
};

export default Intro;
