import { useEffect, useRef } from "react";

export default function Modal({ image, onClose }) {
  const dialogRef = useRef(null);

  function handleClose() {
    dialogRef.current.close();
    onClose();
  }
  //useEffect, if there is a src(comes from setModal) then open modal, showModal comes from browsers not React. Same as onClose(); This also allows escape to be used to close down a modal.
  //the image?.src is optional chaining
  useEffect(() => {
    if (image?.src && dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, [image]);
  return (
    <>
      <dialog
        className="modal"
        ref={dialogRef}
        onClose={onClose}
        aria-label="Expanded image preview"
      >
        <button
          onClick={handleClose}
          className="closeModal"
          autoFocus
          aria-label="Close button"
        >
          X
        </button>
        <img src={image.src} className="modalImage" alt={image.alt} />
      </dialog>
    </>
  );
}
