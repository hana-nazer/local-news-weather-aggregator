import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import { getNews } from "../../services/news-service";

function NewsList() {
  // State variable to store the articles
  const [articles, setArticles] = useState([]);

  // Fetch articles from the API
  const fetchArticles = async () => {
    try {
      // Call the getNews function from the news-service to retrieve articles
      const fetchedArticles = await getNews();
      setArticles(fetchedArticles);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  // useEffect hook to fetch articles when the component mounts
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      {/* Container for displaying news articles */}
      <div className="container flex items-center justify-center mx-auto">
        <div className="">
          {articles.length > 0 ? (
            <div className="">
              {/* Map through the articles and render a NewsItem component for each article */}
              {articles.map((article) => (
                <NewsItem
                  key={article.url}
                  title={article.title}
                  description={article.description}
                  url={article.url}
                  image={article.image}
                  publishedAt={article.publishedAt}
                />
              ))}
            </div>
          ) : (
            <p className="mt-8 text-center">No news found</p>
          )}
        </div>
      </div>
    </>
  );
}

export default NewsList;
