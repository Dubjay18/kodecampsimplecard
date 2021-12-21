import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import cartIcon from "../../images/icon-cart.svg";
import avatarPic from "../../images/image-avatar.png";
import "./header.css";

import SideBar from "../sidebar/SideBar";

const Header = ({ showA, toggleShowA, cart }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="w-100">
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Container>
          <Navbar.Brand
            className="d-md-block d-flex"
            href="#home"
            id="header__left"
          >
            <div className="header__toggle w-25 mt-1 me-4">
              <Navbar.Toggle onClick={() => setShow(true)} />
            </div>
            <h1 className="w-75">sneakers</h1>
          </Navbar.Brand>

          <Nav className="me-auto" id="navlinks">
            <Nav.Link href="#features" className="nav__hov">
              Collections
            </Nav.Link>
            <Nav.Link href="#pricing" className="nav__hov">
              {" "}
              Men
            </Nav.Link>
            <Nav.Link href="#pricing" className="nav__hov">
              Women
            </Nav.Link>
            <Nav.Link href="#pricing" className="nav__hov">
              About
            </Nav.Link>
            <Nav.Link href="#pricing" className="nav__hov">
              Contact
            </Nav.Link>
          </Nav>
          <Nav id="header__right">
            <Nav.Link href="#deets" className="position-relative">
              <div id="cart__num" className="position-absolute ">
                <small>{cart.length}</small>
              </div>
              <img
                src={cartIcon}
                alt=""
                width="20px"
                height="20px"
                className="cart-icon-pic"
                onClick={toggleShowA}
              />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <img src={avatarPic} alt="" width="40px" className="avater-pic" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {["start"].map((placement, idx) => (
        <SideBar
          key={idx}
          placement={placement}
          name={placement}
          show={show}
          handleShow={handleShow}
          handleClose={handleClose}
        />
      ))}
    </div>
  );
};

export default Header;
