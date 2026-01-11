import { useState } from "react";
import Modal from "./Modal";

export default function ImageGallery({ images }) {
  const [modal, setModal] = useState("");

  function handleClose() {
    setModal(null);
  }

  return (
    <>
      {images.map((image, index) => {
        return (
          <button
            className="imgDiv"
            key={index}
            onClick={() =>
              setModal({ src: image.urls.regular, alt: image.alt_description })
            }
          >
            <img
              src={image.urls.small}
              alt={image.alt_description}
              className="img-thumbnail"
            />
          </button>
        );
      })}
      {modal && <Modal image={modal} onClose={handleClose} />}
    </>
  );
}
