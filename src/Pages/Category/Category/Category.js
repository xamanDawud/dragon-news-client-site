import { React } from "react";

import { useLoaderData } from "react-router-dom";
import NewsSummeryCard from "../../Shared/NewsSummeryCard/NewsSummeryCard";
const Category = () => {
  let categoryNews = useLoaderData();
  return (
    <div>
      <h1>This page category has: {categoryNews.length}</h1>
      {categoryNews.map((news) => (
        <NewsSummeryCard key="_id" news={news}></NewsSummeryCard>
      ))}
    </div>
  );
};

export default Category;
