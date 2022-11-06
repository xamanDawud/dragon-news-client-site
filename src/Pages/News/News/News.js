import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const News = () => {
  let news = useLoaderData();
  const {
    author,
    details,
    image_url,
    _id,
    title,
    thumbnail_url,
    total_view,
    rating,
    category_id,
  } = news;
  console.log(news);
  return (
    <div>
      <Card style={{ width: "600px" }}>
        <Card.Img height={"350px"} variant="top" src={thumbnail_url} />
        <Card.Body>
          <Card.Title>{}title</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            {" "}
            <Button variant="primary">Go to Category</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
