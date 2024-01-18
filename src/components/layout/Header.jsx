import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleIsOpen = () => {
		setIsOpen(!isOpen);
	};

	let navigate = useNavigate();
	const home = () => {
		navigate("/home");
	};
	const about = () => {
		navigate("/about");
	};
	const projets = () => {
		navigate("/projets");
	};
	const contact = () => {
		navigate("/contact");
	};

	return (
		<header className="header main">
			<nav className={`nav ${isOpen ? "is-open" : "close-nav"}`} id="nav">
				<ul className="linkContent">
					<li className="main-nav-item" onClick={home}>
						Home
					</li>
					<li className="main-nav-item" onClick={about}>
						Qui-suis je ?
					</li>
					<li className="main-nav-item" onClick={projets}>
						Projets
					</li>
					<li className="main-nav-item" onClick={contact}>
						Contact
					</li>
				</ul>
			</nav>

			<button className="burger" onClick={handleIsOpen}>
				<span></span>
			</button>
		</header>
	);
};

export default Header;
