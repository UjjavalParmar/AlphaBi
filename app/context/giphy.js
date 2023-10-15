import axios from "axios";

const apiKey = "hu08uMmo9WJJOQ6wYlJ8bicpxDC0Q6hq";
const giphyEndpoint = "https://api.giphy.com/v1/gifs/search";

export const searchGifs = async (query) => {
  try {
    const response = await axios.get(giphyEndpoint, {
      params: {
        api_key: apiKey,
        q: query,
        limit: 10, // Adjust the number of results as needed
      },
    });

    return response.data.data;
  } catch (error) {
    console.error("Error searching for GIFs:", error);
    return [];
  }
};
