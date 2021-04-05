import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import {
	Navbar,
	Image,
	Nav,
	DropdownButton,
	Dropdown,
	Button,
	ButtonGroup,
	Container,
	Row,
	Col,
	Badge
} from "react-bootstrap";
import SWLogo from "/workspace/react-hello-webapp/src/img/SWLogo.png";
import { Context } from "../store/appContext";

export const SWNavbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<Navbar>
			<Container>
				<Col sm={10}>
					<Navbar.Brand>
						<Link to="/">
							<Image src={SWLogo} style={{ width: "75px" }} alt="iconoSW" />
						</Link>
					</Navbar.Brand>
				</Col>
				<Col sm={2}>
					<Dropdown as={ButtonGroup}>
						<Button variant="info">
							Favorites <Badge variant="secondary">{store.favorites.length}</Badge>
						</Button>

						<Dropdown.Toggle split variant="info" id="dropdown-split-basic" />

						<Dropdown.Menu className="bg-info">
							{store.favorites.map((item, index) => {
								return (
									<Dropdown.Item key={index} href="#/action-1" className="bg-info">
										{item + " "}
										<i
											className="far fa-times-circle text-dark font-weight-bold"
											onClick={() => actions.deleteFavorite(index)}
										/>
									</Dropdown.Item>
								);
							})}
						</Dropdown.Menu>
					</Dropdown>
				</Col>
			</Container>
		</Navbar>
	);
};
