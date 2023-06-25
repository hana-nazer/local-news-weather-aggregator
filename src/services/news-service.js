import axios from "axios";

// Function to fetch news articles from the API
export const getNews = async () => {
  try {
    const response = await axios.get(
      `https://gnews.io/api/v4/search?q=example&lang=en&sortby=publishedAt&apikey=${process.env.REACT_APP_NEWS_API_KEY}`
    );

    // Return the articles data from the response
    return response.data.articles;
  } catch (error) {
    console.error(error);
    throw error; // Throw the error to handle it in the calling function
  }
};
