import { searchGifs } from "./context/giphy";
const query = "cats"; // Replace 'cats' with the search term you want
const gifs = await searchGifs(query);

return (
  <div>
    <h1>GIPHY Search Results</h1>
    <div className="gifs-container">
      {gifs.map((gif) => (
        <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
      ))}
    </div>
  </div>
);

