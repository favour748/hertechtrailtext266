import { useEffect, useState } from "react";
import Component from "./Gallery/Component";
import data from "./Gallery/Data";
import Header from "./Gallery/Header";
import ImageModal from "./Gallery/ImageModal";

export default function App() {
  const [myData, setMyDate] = useState(data);
  // craate loading state
  const [loading, setLoading] = useState(false);
  const [modalImage, setModalImage] = useState({});
  // create a value state that willl hold the input value
  const [inputValue, setValue] = useState("");
  const handleInputChange = (e) => {
    const value = e.target.value;
    setValue(value);
    // const filterData = data.filter((item) =>
    //   item.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    // );
    // setMyDate((prev) => filterData);
  };

  //  create an effect setTimeout function
  // useEffect hook to handle the effect
  useEffect(() => {
    setLoading(true);
    const timeId = setTimeout(() => {
      const filterData = data.filter((item) =>
        item.title.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
      );

      setMyDate((prev) => filterData);
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, [inputValue]);

  const filterOutImage = (id) => {
    const image = data.find((item) => item.id === id);

    setModalImage((prev) => image);
  };
  return (
    <>
      <div>
        <Header />

        <div className=" flex justify-center my-4">
          <input
            type="text"
            className=" border outline-none border-black py-2 px-4 w-80 rounded-md"
            placeholder="Search"
            onChange={handleInputChange}
          />
        </div>
        {/* Checking condition */}
        {loading && (
          <div className=" flex justify-center  items-center h-[50vh]">
            <h6 className=" text-center">Loading...</h6>
          </div>
        )}

        {!loading && myData.length > 1 ? (
          <div className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-4 m-4 w-10/12 my-0 mx-auto ">
            {myData.map((el) => {
              return (
                <div>
                  <Component
                    Key={el.id}
                    el={el}
                    filterOutImage={filterOutImage}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className=" flex justify-center  items-center h-[50vh]">
            <h6 className=" text-center">No item found</h6>
          </div>
        )}
      </div>

      <ImageModal image={modalImage} />
    </>
  );
}
