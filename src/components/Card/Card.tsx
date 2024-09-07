import React from "react";
import "../../styles/card.css";

const Card = ({ image, heading, description, comingSoon = false }) => {
	return (
		<section
			className="card"
			style={{
				background: `url(${image}) no-repeat`,
				backgroundSize: 'cover',
				backgroundColor: 'var(--color-primary)'
			}}
		>
            {/* <img src={image} alt={heading} /> */}
			<div className="card-content">
				<h3 className={`${comingSoon ? "comingSoon" : ""}`}>{heading}</h3>
				<p>{description}</p>
				{comingSoon && <p style={{color: 'var(--color-accent)', fontFamily: 'Harlow', fontSize: '36px'}}>Coming Soon</p>}
			</div>
		</section>
	);
};

export default Card;
