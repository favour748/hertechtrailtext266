function ImageModal({ image }) {
  console.log(image);
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box p-4">
          {/* <div className=" flex justify-end btn btn-sm btn-circle btn-ghost">
            ✕
          </div> */}
          <div className="card w-full bg-base-100 shadow-xl">
            <figure className=" max-h-[20rem]">
              <img
                src={image.image}
                alt={image.title}
                className="rounded-xl w-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{image.title}</h2>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default ImageModal;
