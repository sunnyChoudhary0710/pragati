import React from "react";
import "../../styles/footer.css";

const Footer = () => {
	return (
		<footer>
			<div>
				<div>
					&#xa9; Handcrafted by <span className="name">Pragati Balhara</span>
				</div>
				<div className="socials">
					<a href="www.gmail.com">LINKEDIN</a>
					<a href="www.instagram.com">EMAIL</a>
					<a href="www.instagram.com">INSTAGRAM</a>
					{/* <a href="www.instagram.com">
						<img
							src={"/images/instagram.svg"}
							alt="instagram"
							width={30}
							height={30}
						/>
					</a>
					<a>
						<img
							src={"/images/linkedin.svg"}
							alt="instagram"
							width={30}
							height={30}
						/>
					</a> */}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
