import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  let [categoris, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/news-category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="d-none d-lg-block">
      <div>
        <h5>All Category</h5>
        <div>
          {categoris.map((category) => (
            <Link to={`/category/${category.id}`}>
              <p>{category.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
