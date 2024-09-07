import React from "react";
import "../../styles/CasualIntro.css";
import Review from "../Review/review";

const CasualIntro = () => {
	return (
		<div className="ci-wrapper" id="about-me">
			<div className="frame">
				<div className="text-bloc">
					<div className="hello">Hello!</div>
					<div className="intro-text">
						<p>
						I’m Pragati. 
						I'm new to the design game, but I'm super excited about it and always eager to learn. 
						I love coming up with fresh ideas and trying new things. 
						I know I've got a lot to learn, but I'm really committed to getting better. 
						I'm ready to work hard and show what I can do!"
						</p>
						<br />
						<p>
							Let's collaborate and create something amazing together!
						</p>
					</div>
				</div>
				<div className="image-bloc">
					<img src="/images/pam-portrait.png" alt="pragati portrait"/>
				</div>
				<div className="review-bloc">
					<Review />
				</div>
			</div>
			<div className="review-bloc-mobile">
				<Review />
			</div>
		</div>
	);
};

export default CasualIntro;
