import { useEffect, useState } from "react";
import axios from "axios";

const Newsfeed = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://localhost:8888/news",
    };

    axios
      .request(options)
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const firstSeven = articles?.slice(0, 7);

  return (
    <div className="news-feed">
      <h2>Newsfeed</h2>
      {firstSeven?.map((article, id) => (
        <ul key={id}>
          <li>
            <a className="article-url" href={article.URL} target="_blank">
              <p>{article.Title.substr(0, 80)}...</p>
            </a>
            <a href={article.URL} className="read-btn">
              READ FULL STORY
            </a>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Newsfeed;
