import React from "react";
import {easeOut, motion} from 'framer-motion';
import "../../styles/CasualIntro.css";
import Review from "../Review/review";
import AnimatedTextCharacter from "../animations/AnimatedTextCharacter";

const aboutMeText = `I’m Pragati. 
						I'm new to the design game, but I'm super excited about it and always eager to learn. 
						I love coming up with fresh ideas and trying new things. 
						I know I've got a lot to learn, but I'm really committed to getting better. 
						I'm ready to work hard and show what I can do!`;

const CasualIntro = () => {
	return (
		<div className="ci-wrapper" id="about-me">
			<div className="frame">
				<div className="text-bloc">
					<div className="hello">
						<AnimatedTextCharacter
							amount={"all"}
							style={{
								marginRight: "5px",
								marginLeft: '2px'
							}}
							text="Hello!"
						/>
					</div>
					<div className="intro-text">
						<p>{aboutMeText}</p>
						<br />
						<p>Let's collaborate and create something amazing together!</p>
					</div>
				</div>
				<div className="image-bloc">
					<img src="/images/pam-portrait.webp" alt="pragati portrait" />
				</div>
				<motion.div className="review-bloc"
				>
					<Review />
				</motion.div>
			</div>
			<motion.div className="review-bloc-mobile"
			>
				<Review />
			</motion.div>
		</div>
	);
};

export default CasualIntro;
