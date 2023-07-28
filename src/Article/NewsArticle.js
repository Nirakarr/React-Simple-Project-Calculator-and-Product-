import { Button } from "@mui/material";
import React from "react";
import "./NewsArticle.css";
const News = () => {
  return (
    <div className="container">
      <h1>Welcome to News Article</h1>
      <div className="photo"></div>
      <div className="title">Title:</div>
      <div className="author">Author:</div>
      <div className="description">
        Description:
        <hr />
      </div>
      <Button variant="contained" className="btn">Click Here for Full Info</Button>
    </div>
  );
};

export default News;
