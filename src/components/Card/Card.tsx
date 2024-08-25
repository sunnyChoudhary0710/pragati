import React from "react";
import "../../styles/card.css";

const Card = ({ image, heading, description }) => {
	console.log(`url('${image}' no-repeat)`);
	return (
		<section
			className="card"
			style={{
				background: `url(${image}) no-repeat`,
				backgroundSize: 'cover'
			}}
		>
            {/* <img src={image} alt={heading} /> */}
			<div className="card-content">
				<h3>{heading}</h3>
				<p>{description}</p>
			</div>
		</section>
	);
};

export default Card;
