import React, { useState } from "react";

export default function AddContact() {
  const [name, setName] = useState({ value: "", message: "", error: "" });
  console.log(name);
  const validator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    if (name.value === "") {
      setName((prev) => ({
        ...prev,
        error: true,
        message: "this field requires",
      }));
      //   console.log("low");
    } else if (name.value.length > 15) {
      console.log("overdose");
    } else if (validator.test(name.value)) {
      console.log("nononono");
    } else {
      console.log("i am submmiting");
    }
  };
  return (
    <form>
      <label>
        Name{" "}
        <input
          type="text"
          onChange={(e) =>
            setName((prev) => ({
              ...prev,
              value: e.target.value,
              error: false,
              message: "",
            }))
          }
        />
      </label>
      {name.error && <p>{name.message}</p>}
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
