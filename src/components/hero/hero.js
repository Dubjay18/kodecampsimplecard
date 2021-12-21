import React, { useState } from "react";
import { Row, Col, Container, Button, Modal } from "react-bootstrap";
import thumbone from "../../images/image-product-1-thumbnail.jpg";
import thumbtwo from "../../images/image-product-2-thumbnail.jpg";
import thumbthree from "../../images/image-product-3-thumbnail.jpg";
import thumbfour from "../../images/image-product-4-thumbnail.jpg";
import pre from "../../images/image-product-1.jpg";
import pre2 from "../../images/image-product-2.jpg";
import pre3 from "../../images/image-product-3.jpg";
import pre4 from "../../images/image-product-4.jpg";
import cartWhite from "../../images/icon-cartWhite.svg";
import "./hero.css";

const Hero = ({
  showA,
  toggleShowA,
  setI,
  i,
  addToCart,
  cart,
  setCart,
  numItems,
  setNumItems,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const data = [`${pre}`, `${pre2}`, `${pre3}`, `${pre4}`];

  // const [cart, setCart] = useState([]);

  const Add = () => {
    setNumItems(numItems + 1);
  };
  const Sub = () => {
    if (numItems !== 0) {
      setNumItems(numItems - 1);
    }
  };
  const forward = () => {
    if (i < 3) {
      setI(i + 1);
    } else {
      setI(0);
    }
  };
  const backward = () => {
    if (i > 0) {
      setI(i - 1);
    } else {
      setI(3);
    }
  };
  // const removeCart = (el) => {
  //   cart.splice(el, el + 1);
  //   let cartArray = [...cart];
  //   setCart((cart) => [...cartArray]);
  // };
  return (
    <div className="mt-5 over m-auto">
      <style type="text/css">
        {` .btn-orange{
                        background-color:hsl(26, 100%, 55%);
                        color: white;
                        transition: all 0.7;
                    }
                    .btn-orange:hover{
                        opacity: 0.6;
                        color: white;
                    }
                    .btn-thumb{
                        padding: 0;
                        border-radius: 12px;
                        
                    }
                    .btn-thumb:focus{
                        box-shadow: none!important;
                        border: 2px solid hsl(26, 100%, 55%);
                    }
                    `}
      </style>
      <Container className=" over">
        <Row className="">
          <Col md={6}>
            <div className="d-md-block d-none">
              <div className="">
                <img
                  src={`${data[i]}`}
                  alt=""
                  width="70%"
                  height="90%"
                  className="rounded-prime "
                  onClick={handleShow}
                />
              </div>
              <div className="d-flex pt-3">
                <Button variant="thumb" classname="p-1 ms-3 rounded-prime ">
                  <img
                    src={thumbone}
                    alt=""
                    width="80px"
                    className=" rounded-prime thumbnails "
                    onClick={() => setI(0)}
                  />
                </Button>
                <div className="ms-3">
                  {" "}
                  <Button variant="thumb" classname="p-1 ms-3 rounded-prime ">
                    <img
                      src={thumbtwo}
                      alt=""
                      width="80px"
                      className=" rounded-prime thumbnails"
                      onClick={() => setI(1)}
                    />
                  </Button>
                </div>
                <div className="ms-3">
                  <Button variant="thumb" classname="p-1 ms-3 rounded-prime ">
                    <img
                      src={thumbthree}
                      alt=""
                      width="80px"
                      className=" rounded-prime thumbnails "
                      onClick={() => setI(2)}
                    />
                  </Button>
                </div>
                <div className="ms-3">
                  <Button variant="thumb" classname=" ms-3 rounded-prime ">
                    <img
                      src={thumbfour}
                      alt=""
                      width="80px"
                      className=" rounded-prime thumbnails"
                      onClick={() => setI(3)}
                    />
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col
            className="d-md-none"
            md={6}
            xs={12}
            style={{
              backgroundImage: `url(${data[i]})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "50%,50%",
            }}
          >
            <Container>
              <div className="d-md-none position-relative p-prime w-75">
                <div
                  className="bg-white rounded-circle position-absolute p-4 cus-text-o bottom-50 l-40 "
                  onClick={backward}
                  id="chevleft"
                ></div>
                <div
                  className="bg-white rounded-circle position-absolute p-4 cus-text-o bottom-50 start-100"
                  onClick={forward}
                  id="chevRight"
                ></div>
                {/* <img
                  src={data[i]}
                  alt=""
                  width="100%"
                  height="90%"
                  className="rounded-prime "
                /> */}
              </div>
            </Container>
          </Col>
          <Col md={6} xs={12} className="">
            <Container>
              <div className="hero__text p-md-5 p-2 mt-md-0 mt-3">
                <h6>SNEAKER COMPANY</h6>
                <h1 className="text-capitalize">
                  fall limited edition sneakers
                </h1>
                <p>
                  These low-profile sneakers are your perfect casual wear
                  companion. Featuring a durable rubber outer sole, they’ll
                  withstand everything the weather can offer.
                </p>{" "}
                <div className=".d-md-block d-flex justify-content-between">
                  <p>
                    <span className="text-large fw-bolder">$125.00</span>
                    <span className="hero__percent ms-1">50%</span>
                  </p>
                  <p>$250.00</p>
                </div>
                <div>
                  <p className="d-flex " id="p-buttons">
                    <div className="d-flex w-100" id="counter">
                      <button className="p-3 bg__gray cus-text-o" onClick={Sub}>
                        <strong>-</strong>
                      </button>
                      <span className="p-3 bg__gray text-center">
                        <strong>{numItems}</strong>
                      </span>
                      <button className="p-3 bg__gray cus-text-o" onClick={Add}>
                        <strong>+</strong>
                      </button>
                    </div>
                    <Button
                      variant="orange"
                      className="rounded-prime shadow-lg ms-md-4 px-4 w-100"
                      onClick={addToCart}
                    >
                      <img src={cartWhite} alt="" className="text-white me-2" />
                      Add to cart
                    </Button>
                  </p>
                </div>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <div className="">
          <div className="">
            <div
              className="bg-white rounded-circle position-absolute p-4 cus-text-o bottom-50 start-0"
              onClick={backward}
              id="chevleft"
            ></div>
            <div
              className="bg-white rounded-circle position-absolute p-4 cus-text-o bottom-50 cus__pos"
              onClick={forward}
              id="chevRight"
            ></div>
            <img
              src={data[i]}
              alt=""
              width="100%"
              height="90%"
              className="rounded-prime "
            />
          </div>
          <div className="d-flex pt-3">
            <Button variant="thumb" classname="p-1 ms-3 rounded-prime ">
              <img
                src={thumbone}
                alt=""
                width="80px"
                className=" rounded-prime thumbnails "
                onClick={() => setI(0)}
              />
            </Button>
            <div className="ms-3">
              {" "}
              <Button variant="thumb" classname="p-1 ms-3 rounded-prime ">
                <img
                  src={thumbtwo}
                  alt=""
                  width="80px"
                  className=" rounded-prime thumbnails"
                  onClick={() => setI(1)}
                />
              </Button>
            </div>
            <div className="ms-3">
              <Button variant="thumb" classname="p-1 ms-3 rounded-prime ">
                <img
                  src={thumbthree}
                  alt=""
                  width="80px"
                  className=" rounded-prime thumbnails "
                  onClick={() => setI(2)}
                />
              </Button>
            </div>
            <div className="ms-3">
              <Button variant="thumb" classname=" ms-3 rounded-prime ">
                <img
                  src={thumbfour}
                  alt=""
                  width="80px"
                  className=" rounded-prime thumbnails"
                  onClick={() => setI(3)}
                />
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Hero;
