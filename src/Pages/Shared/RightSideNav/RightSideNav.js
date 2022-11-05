import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";

import {
  FaFacebook,
  FaTwitter,
  FaTwitch,
  FaWhatsapp,
  FaReddit,
  FaGoogle,
  FaGithub,
} from "react-icons/fa";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button variant="outline-primary mb-2">
          <FaGoogle /> Login With Google
        </Button>
        <Button variant="outline-dark mb-3">
          <FaGithub /> Login With Github
        </Button>
      </ButtonGroup>

      <div>
        <h5 className="mb-3">Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mbb">
            <FaFacebook /> Facebook{" "}
          </ListGroup.Item>
          <ListGroup.Item className="mbb">
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mbb">
            <FaWhatsapp /> Whatsapp
          </ListGroup.Item>
          <ListGroup.Item className="mbb">
            <FaTwitch /> Twitch
          </ListGroup.Item>
          <ListGroup.Item className="mbb">
            <FaReddit /> Reddit
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="mt-3">
        <BrandCarousel />
      </div>
    </div>
  );
};

export default RightSideNav;
