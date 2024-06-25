import herlogo from "../assets/logo.jpeg";
export default function Header() {
  return (
    <div className=" mx-auto my-0 w-10/12 h-28 flex  justify-between  items-center">
      <img src={herlogo} alt="hertechtail logo" className=" h-16" />
      <h1 className="text-4xl font-bold">A PICTURE GALLERY</h1>
      <button className=" bg-blue-500 py-2 px-4 text-1xl font-bold text-white hover:bg-sky-400 hover:from-neutral-950">
        Learn more
      </button>
    </div>
  );
}
