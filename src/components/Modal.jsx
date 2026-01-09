export default function Modal({ src, handler }) {
  return (
    <>
      <div className="modalBackground">
        <div className="modal">
          <div className="closeModal">
            <button onClick={handler}> X </button>
          </div>
          <img src={src} className="modalImage" />
        </div>
      </div>
    </>
  );
}
//check out dialogue elements
