import { useEffect, useState } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery";
import Search from "./components/Search";
//! do not put all your code straight into app.jsx, use components

function App() {
  //state, api fetch etc
  const key = import.meta.env.VITE_API_KEY;
  //image search will need to be a use state!
  // const imgSearch = "frog";
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("frog");
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=1&per_page=12&query=${search}&client_id=${key}`
      );
      const data = await response.json();
      const result = data.results;
      setImages(result);
      console.log(result);
    }
    getData();
  }, [search]);

  //functions(event handlers)
  //search function
  function handleSubmit(value) {
    console.log(value);
    setSearch(value);
  }

  //-when a user presses a button that should switch the image (left and right, maybe randomise)
  return (
    <>
      <header className="searchDiv">
        <h1>Image Gallery</h1>
        <div className="search">
          <Search handler={handleSubmit} />
        </div>
      </header>
      <div className="gallery">
        <ImageGallery images={images} />
      </div>
    </>
  );
}

export default App;
//have an on hover for a modal image and then a click for a focused image
