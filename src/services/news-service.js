import axios from "axios";

// Function to fetch news articles from the API based on search and selected language
export const getNews = async (search, selectedLanguage) => {
  try {
    let response;
    if (search) {
      // If search query is provided, include it in the API request
      response = await axios.get(
        `https://gnews.io/api/v4/search?q=${search}&lang=${selectedLanguage}&sortby=publishedAt&apikey=${process.env.REACT_APP_NEWS_API_KEY}`
      );
    } else {
      // If no search query is provided, use a default example query
      response = await axios.get(
        `https://gnews.io/api/v4/search?q=example&lang=${selectedLanguage}&sortby=publishedAt&apikey=${process.env.REACT_APP_NEWS_API_KEY}`
      );
    }

    // Return the articles data from the response
    return response.data.articles;
  } catch (error) {
    console.error(error);
    throw error; // Throw the error to handle it in the calling function
  }
};
