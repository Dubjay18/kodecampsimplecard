import React from "react";
import { Offcanvas } from "react-bootstrap";
import "./SideBar.css";

function SideBar({ handleClose, handleShow, show, ...props }) {
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li>
              <a href="#none">Collections</a>
            </li>
            <li>
              <a href="#none">Men</a>
            </li>
            <li>
              <a href="#none">Women</a>
            </li>
            <li>
              <a href="#none">About</a>
            </li>
            <li>
              <a href="#none">Contact</a>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;
