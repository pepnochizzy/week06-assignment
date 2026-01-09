import { useState } from "react";
import Modal from "./Modal";

export default function ImageGallery({ images }) {
  const [modal, setModal] = useState("");

  function handleClose() {
    setModal("");
  }

  return (
    <>
      {images.map((image, index) => {
        return (
          <button
            className="imgDiv"
            key={index}
            onClick={() => setModal(image.urls.regular)}
          >
            <img
              src={image.urls.small}
              alt={image.alt_description}
              className="img-thumbnail"
            />
          </button>
        );
      })}
      {modal && <Modal src={modal} handler={handleClose} />}
    </>
  );
}
//TODO remove modal from Image component, make it so that on thumbnail click it gives the image info to a variable (setImage? start as null). click handler tells app what image is clicked, modal receives this info and opens with image info.
//modal lives line 16, it's conditionally rendered based on whether
//delete Image component, move onclick and make div a button
