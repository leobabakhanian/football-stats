import React from "react";
import "./NavBar.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			bg="dark"
			variant="dark"
			sticky="top"
			id="navbar"
		>
			<Container>
				<Navbar.Brand href="/">
					<img
						src={logo}
						width="45"
						height="45"
						className="d-inline-block align-top"
						alt=""
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto"></Nav>
					<Nav>
						<Nav.Link>
							<Link to="/la-liga" id="nav-btn">
								La Liga
							</Link>
						</Nav.Link>
						<Nav.Link className="nav-link">
							<Link to="/premier-league" id="nav-btn">
								Premier League
							</Link>
						</Nav.Link>
						<Nav.Link className="nav-link">
							<Link to="/serie-a" id="nav-btn">
								Serie A
							</Link>
						</Nav.Link>
						<Nav.Link className="nav-link">
							<Link to="/ligue-1" id="nav-btn">
								Ligue 1
							</Link>
						</Nav.Link>
						<Nav.Link className="nav-link">
							<Link to="/bundesliga" id="nav-btn">
								Bundesliga
							</Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
