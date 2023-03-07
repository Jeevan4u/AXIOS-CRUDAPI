import React, { useState } from "react";
const Card = () => {
  const [number, setNumber] = useState(1);

  const addHandler = () => {
    setNumber((prevState) => prevState + 1);
  };
  const subHandler = () => {
    setNumber((prevState) => prevState - 1);
  };

  const numberSetter = (e) => {
    setNumber(e.target.value);
  };

  console.log(number);
  return (
    <>
      <div className="CardWrapper border border-black relative grid">
        {/* <div className="cardName text-center">Name</div> */}

        <div className="inputCard relative">
          <h5 className="absolute font-bold tracking-widest px-4 text-lg top-[-65%] left-[50%] translate-x-[-50%]  after:absolute after:top-0 after:right-0  after:h-full after:w-full after:-z-10 text-black">
            SubTitem
          </h5>
          <h5 className="absolute font-bold tracking-widest px-4 text-lg top-[-70%] right-0   after:absolute after:top-0 after:right-0  after:h-full after:w-full after:-z-10 text-black">
            X
          </h5>
          <input
            type="number"
            className="w-full py-2 px-20 text-center focus:outline-none appearance-none focus:appearance-none bg-transparent"
            value={number}
            onChange={(e) => numberSetter(e)}
          />
          <button
            className="absolute h-full border-none top-0 left-0 text-black button px-4 border bg-green-500 "
            onClick={() => addHandler()}
          >
            Plus
          </button>
          <button
            className="absolute border-none top-0 right-0 h-full px-4 border bg-red-500 text-black group "
            onClick={() => subHandler()}
          >
            Mins
          </button>
        </div>

        {/* <div className="buttons grid grid-cols-2"></div> */}
        {/* <div className="span absolute top-0 right-0">Close</div> */}
      </div>

      {/* <div className="CardWrapper border relative my-5">
        <div className="cardName text-center">Name</div>
        <div className="inputCard">
          <input
            type="number"
            className="w-full py-2 px-3 text-center focus:outline-none appearance-none focus:appearance-none"
            value={number}
            onChange={(e) => numberSetter(e)}
          />
        </div>
        <div className="buttons grid grid-cols-2">
          <button
            className="px-3 border border-green-500 text-white"
            onClick={() => addHandler()}
          >
            Plus
          </button>
          <button
            className="px-3 border border-green-500 text-white"
            onClick={() => subHandler()}
          >
            Minus
          </button>
        </div>
        <div className="span absolute top-0 right-0">Close</div>
      </div> */}
    </>
  );
};

export default Card;
