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
					<img src="/images/pam-portrait.png" alt="pragati portrait" />
				</div>
				<motion.div className="review-bloc"
					initial={
						{
							opacity: 0,
							x: -100
						}
					}
					whileInView={{
						opacity: 1,
						x: 0,
						transition: {
							duration: 1,
							ease: easeOut,
							type: "spring",
							bounce: 0.5
						}
					}}
					viewport={{
						once: true,
					}}
				>
					<Review />
				</motion.div>
			</div>
			<div className="review-bloc-mobile">
				<Review />
			</div>
		</div>
	);
};

export default CasualIntro;
