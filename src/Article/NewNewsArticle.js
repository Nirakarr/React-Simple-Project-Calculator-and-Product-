import React, { useEffect, useState } from "react";
import "./NewNewsArticle.css";
import { Button } from "@mui/material";
import axios from "axios";

function NewNewsArticle() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    getNewsData();
  }, []);

  const API_URL =
    "https://cors-anywhere.herokuapp.com/https://www.jsonkeeper.com/b/O5V8";
  const getNewsData = () => {
    axios
      .get(API_URL)
      .then(function (response) {
        // handle success
        setNewsData(response.data.articles);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  return (
    <div>
      {newsData.map((item, index) => (
        // {[1,1,1].map((item)=>

        <div key={index} className="newsContaineer">
          <div className="left"></div>

          <div className="newsTitle">{item.title}</div>

          <div className="newsImage">
            <img src={item.urlToImage} alt={`Image${index + 1}`} />
          </div>

          <div className="newsPublish">
            <p>
              <i>
                <b>{item.author}</b>
              </i>{" "}
              | {item.publishedAt}
            </p>
          </div>

          <div className="description">
            <p>{item.description}</p>
          </div>
          <Button className="readMore">Read Full News</Button>
        </div>

        // )}
      ))}
    </div>
  );
}
export default NewNewsArticle;
