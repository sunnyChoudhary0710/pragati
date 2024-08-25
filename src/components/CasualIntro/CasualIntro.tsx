import React from "react";
import "../../styles/CasualIntro.css";

const CasualIntro = () => {
	return (
		<div className="ci-wrapper">
			<div className="ci-self-portrait">
				<img src="images/pam-self.png" alt="pragati self portrait"></img>
			</div>
			{/* <div className="ci-arrow-top">
				<img src="images/arrow-dashed.png" alt="arrow" aria-hidden="true"></img>
			</div> */}
			<div className="ci-self-text">
                <div className="ci-self-text-content">
                    <div className="salutation" >"Hi there!</div>
                    <br />
                    <div className="details" >I'm Pragati. I am new to the design game, but I am super exited about it and always eager to learn. I love coming up with fresh ideas and trying new things. I know I have a lot to learn but I am really committed to getting better. I am ready to work hard and show what I can do.</div>
                </div>
				{/* <img src="images/work-desk.png" alt="pragati work desk"></img> */}
			</div>
			<div className="ci-review"></div>
		</div>
	);
};

export default CasualIntro;
