import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Languages from "./Languages";
import NewsItem from "./NewsItem";
import { getNews } from "../../services/news-service";

function NewsList() {
  // State variables
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  // Ref for the search input field
  const searchRef = useRef(null);

  // Handle search form submission
  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(searchRef.current.value);
  };

  // Handle language change
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  // Fetch articles from the API
  const fetchArticles = async () => {
    try {
      const fetchedArticles = await getNews(search, selectedLanguage);
      console.log(fetchArticles);
      setArticles(fetchedArticles);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  // Fetch articles when search query or selected language changes
  useEffect(() => {
    fetchArticles();
  }, [search, selectedLanguage]);

  return (
    <>
      {/* Search bar and language selection */}
      <div className="flex justify-between px-5 m-auto mt-2 md:px-10 md:justify-end ">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            ref={searchRef}
            className="h-8 px-2 py-1 pr-8 text-black bg-white border focus:outline-none"
          />
          <button onClick={handleSearch}>
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute w-4 h-4 text-gray-500 fill current top-1 right-2"
              style={{ cursor: "pointer", marginTop: "0.3rem" }}
            />
          </button>
        </div>
        {/* language component */}
        <Languages onLanguageChange={handleLanguageChange} />
      </div>
      {/* Container for displaying news articles */}
      <div className="container mx-auto mt-20">
        {articles.length > 0 ? (
          <div className="flex flex-col items-center justify-center m-auto">
            {/* NewsItem component  */}
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
    </>
  );
}

export default NewsList;
