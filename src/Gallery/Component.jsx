import { useState } from "react";

export default function Component(props) {
  const { el } = props;

  const { id, image, title } = el;

  const [show, setshow] = useState(false);

  const handleImageModal = (id) => {
    // filterOutImage(id);
    props.filterOutImage(id);
    document.getElementById("my_modal_2").showModal();
  };
  // console.log(show);
  // First task I want you to make the titles to show the exact titles not the same titles
  return (
    <>
      <div
        onClick={handleImageModal.bind(this, id)}
        className="   hover:scale-[1.02]    cursor-pointer max-h-[26rem] rounded overflow-hidden shadow-lg  relative   "
      >
        <img
          onMouseOver={() => setshow(true)}
          onMouseOut={() => setshow(false)}
          src={image}
          alt="img"
          className={` h-full w-full  object-cover  ${
            show ? "blur-[2px]" : ""
          }`}
        />

        <div
          className={` absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] ${
            show ? "visible" : "hidden"
          }`}
        >
          <div
            className={`font-bold  ${
              show ? "transition duration-2000 ease-in-out" : ""
            }`}
            style={{
              transitionProperty: "all",
            }}
            onMouseOver={() => setshow(true)}
            onMouseOut={() => setshow(false)}
          >
            <span
              className=" text-[black]"
              onMouseOver={() => setshow(true)}
              onMouseOut={() => setshow(false)}
            >
              {title}
            </span>
          </div>
          <div
            className={`font-bold  ${
              show ? "transition duration-2000 ease-in-out" : ""
            }`}
            style={{
              transitionProperty: "all",
            }}
            onMouseOver={() => setshow(true)}
            onMouseOut={() => setshow(false)}
          >
            <span
              className=" text-[black]"
              onMouseOver={() => setshow(true)}
              onMouseOut={() => setshow(false)}
            >
              {title}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
