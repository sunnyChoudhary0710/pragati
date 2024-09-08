import React from "react";
import { motion } from "framer-motion";
import "../../styles/footer.css";

const initial = {
	opacity: 0,
	y: 30,
};

const whileInView = {
	opacity: 1,
	y: 0,
};

const transition = {
	ease: "easeOut",
	duration: 0.5,
};

const Footer = () => {
	return (
		<footer>
			<div>
				<motion.div
					initial={initial}
					whileInView={{
						...whileInView,
						transition: { ...transition, delay: 0.1 },
					}}
					viewport={{ once: true }}
				>
					&#xa9; Handcrafted by <span className="name">Pragati Balhara</span>
				</motion.div>
				<div className="socials">
					<motion.a
						initial={initial}
						whileInView={{
							...whileInView,
							transition: { ...transition, delay: 0.2 },
						}}
						viewport={{ once: true }}
						href="https://www.linkedin.com/in/pragatibalhara/"
					>
						LINKEDIN
					</motion.a>
					<motion.a
						initial={initial}
						whileInView={{
							...whileInView,
							transition: { ...transition, delay: 0.3 },
						}}
						viewport={{ once: true }}
						href="mailto:pragatibalhara117@gmail.com"
					>
						EMAIL
					</motion.a>
					<motion.a
						initial={initial}
						whileInView={{
							...whileInView,
							transition: { ...transition, delay: 0.4 },
						}}
						viewport={{ once: true }}
						href="https://www.instagram.com/pragati6577/?hl=en"
					>
						INSTAGRAM
					</motion.a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
