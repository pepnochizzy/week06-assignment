import { useEffect, useState } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery";
import Search from "./components/Search";
import Footer from "./components/Footer";
//! do not put all your code straight into app.jsx, use components

function App() {
  const key = import.meta.env.VITE_API_KEY;

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

  function handleSubmit(value) {
    console.log(value);
    setSearch(value);
  }

  return (
    <>
      <header className="searchDiv">
        <h1>Image Gallery</h1>
        <div className="search">
          <Search handler={handleSubmit} />
        </div>
      </header>
      <main className="gallery">
        <ImageGallery images={images} />
      </main>
      <Footer />
    </>
  );
}

export default App;
