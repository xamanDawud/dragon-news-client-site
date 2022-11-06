import React from "react";
import "./NewsSummeryCard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { FaRegBookmark, FaRegEye, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsSummeryCard = ({ news }) => {
  const {
    author,
    details,
    image_url,
    _id,
    title,
    thumbnail_url,
    total_view,
    rating,
  } = news;
  return (
    <div>
      <Card className="mb-3">
        <Card.Header>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <span>
                <img
                  className="rounded-circle me-2"
                  width={"50px"}
                  src={author.img}
                  alt=""
                />
              </span>
              <span>
                <p className="author">{author.name}</p>
                <p className="author">{author.published_date}</p>
              </span>
            </div>
            <div>
              <FaRegBookmark className="me-2" />
              <FaShareAlt />
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Img
            className="mb-2"
            height={"350px"}
            width={"600px"}
            variant="top"
            src={thumbnail_url}
          />
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details.length > 250 ? (
              <p>
                {details.slice(0, 250) + "..."}
                <Link to={`/news/${_id}`}>Read More</Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center author ">
            <FaStar className="text-warning" />
            <p className="card_bottom">{rating.number}</p>
          </div>
          <div className="d-flex align-items-center author">
            <FaRegEye />
            <p className="card_bottom">{total_view}</p>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummeryCard;
