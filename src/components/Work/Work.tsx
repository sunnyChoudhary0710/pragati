import React from "react";
import { motion } from "framer-motion";
import Card from "../Card/Card";
import "../../styles/work.css";

const CardsData = [
	{
		image: "/images/flower-santuary-2.jpg",
		heading: "The Flower Sanctuary",
		description:
			"A User-Friendly & Visually Appealing Flower Shop Website Design",
		comingSoon: false,
	},
	{
		image: "",
		heading: "Healthcare Dashboard",
		description:
			"Designing a Web Application to improve patient engagement, access to information, or remote monitoring",
		comingSoon: true,
	},
	{
		image: "",
		heading: "Smart Home Control Center",
		description:
			"One application to control them all. This app will allow users to control and monitor all IOT devices at one place.",
		comingSoon: true,
	},
	{
		image: "",
		heading: "Wearable Technology",
		description:
			"Design interfaces for smartwatches, fitness trackers or other wearable devices, focusing on intuitive interactions and data visualization.",
		comingSoon: true,
	},
];

const Work = () => {
	return (
		<article id="pam-works" className="test">
			<h3 className="work-title">Work</h3>
			<div className="card-container">
				{CardsData.map((card, index) => {
					return (
						<motion.div initial={{
                            opacity: 0,
                            y: 60
                          }} 
                          whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                              ease: 'linear',
                              duration: 0.3,
                              delay: index % 2 === 0 ? 0.1 : 0.3
                            }
                          }}
                          viewport={{ once: true }}
                          >
							<Card
								image={card.image}
								heading={card.heading}
								description={card.description}
								comingSoon={card.comingSoon}
							/>
						</motion.div>
					);
				})}
			</div>
		</article>
	);
};

export default Work;
