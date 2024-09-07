import React from "react";
import { Button } from "..";
import './Header.css';

const Menu = ({onClick, open}) => {
    return (
        <button className={`menu ${open ? 'opened' : ''}`} onClick={onClick} aria-label="Main Menu">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
          <path className="line line2" d="M 20,50 H 80" />
          <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
        </svg>
      </button>
    )
}

const EmailSubject = "Hi Pragati! Let's have a chat.";


const Header = () => {
    const [open, setOpen] = React.useState(false);

	const scrollToTarget = (id, closeBeforeAction) => {
		if (closeBeforeAction) {
			setOpen(!open)
		}

		document.getElementById(id)?.scrollIntoView({
			behavior: 'smooth',
		})
	}

	const navigateTo = (url) => {
		if (url) {
			window.location.replace(url);
		}
	}

	const triggerEmail = (emailId, closeBeforeAction) => {
		if (closeBeforeAction) {
			setOpen(!open)
		}
		if (emailId) {
			window.open(`mailto:${emailId}?subject=${EmailSubject}`)
		}
	}

	const redirectToIndex = () => {
		window.location.href = 'https://66dc69b4b284890008997a96--glistening-travesseiro-b0e6b3.netlify.app/';
	}

	return (
		<header>
			<section id="desktop" className="header-wrapper">
				<Button type={"link"} label="About Me" onClick={()=>scrollToTarget('about-me', false)} />
				<Button type={"link"} label="Work" onClick={()=>scrollToTarget('pam-works', false)} />
				<Button type={"link"} label="Behance" onClick={()=>{navigateTo('')}}/>
				<Button type={"p-button"} label="Let's Chat" onClick={()=>{triggerEmail('pragatibalhara117@gmail.com', false)}}/>
			</section>
			<section id="mobile" className="header-wrapper">
				<div className="pb-logo" onClick={redirectToIndex}>PB</div>
                <Menu open={open} onClick={()=>{setOpen(!open)}}/>
			</section>
            <div className={`h-menu ${open ? 'active' : ''}`}>
				<Button type={"link"} label="About Me" onClick={()=>scrollToTarget('about-me', true)} />
				<Button type={"link"} label="Work" onClick={()=>scrollToTarget('pam-works', true)} />
				<Button type={"link"} label="Behance" onClick={()=>{navigateTo('')}}/>
				<Button type={"p-button"} label="Let's Chat" onClick={()=>{triggerEmail('pragatibalhara117@gmail.com', true)}}/>
            </div>
		</header>
	);
};

export default Header;
