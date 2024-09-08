import React from "react";
import Button from "../Button/Button";
import { motion } from 'framer-motion';
import AnimatedTextCharacter from '../animations/AnimatedTextCharacter';

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
				<div className="desc-name"><AnimatedTextCharacter amount="all" text="Pragati Balhara"/></div>
				<motion.div className="desc-heading inter-600"
					initial={{
						opacity: 0,
						y: 60
					  }} 
					  whileInView={{
						opacity: 1,
						y: 0,
						transition: {
						  ease: 'easeOut',
						  duration: 0.5,
						  delay: 1
						}
					  }}
					  viewport={{ once: true }}
				>UI/UX Designer</motion.div>
				<motion.div className="desc-body"
					initial={{
						opacity: 0,
						y: 60
					  }} 
					  whileInView={{
						opacity: 1,
						y: 0,
						transition: {
						  ease: 'easeOut',
						  duration: 0.5,
						  delay: 1.2
						}
					  }}
					  viewport={{ once: true }}
					>
					<p>I’m fascinated about user-friendly experiences that are both intuitive
					and delightful.</p>
					<p>Explore my portfolio to see my design journey!</p>
				</motion.div>
				<motion.div className="desc-action-button"
					initial={{
						opacity: 0,
						y: 60
					  }} 
					  whileInView={{
						opacity: 1,
						y: 0,
						transition: {
						  ease: 'easeOut',
						  duration: 0.5,
						  delay: 1.4
						}
					  }}
					  viewport={{ once: true }}
				>
					<Button type={"p-button"} label="Let's Chat" onClick={() => {triggerEmail('pragatibalhara117@gmail.com')}} />
				</motion.div>
			</div>
            </div>
		</div>
	);
};

export default Intro;
