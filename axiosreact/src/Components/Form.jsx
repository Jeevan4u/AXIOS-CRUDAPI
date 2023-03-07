import React from "react";
import { useState, useEffect } from "react";
const Form = ({
  formSubmitData,
  dataUpdate,
  close,
  editData,
  editState,
  editContactData,
  editUpdate,
  editStatefalse,
}) => {
  const [formContactData, setFormContactData] = useState({
    Name: "",
    Email: "",
    Password: "",
  });

  const validator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const [message, setMessage] = useState("");
  console.log(message);

  useEffect(() => {
    if (editState === true) {
      setFormContactData({
        ...formContactData,
        Name: editData.Name,
        Email: editData.Email,
        Password: editData.Password,
      });
    }
    // setFormContactData({
    //   ...formContactData,
    //   Name: editData.Name,
    //   Email: editData.Email,
    //   Password: editData.Password,
    // });
  }, [editData]);
  const clearFormData = {
    Name: "",
    Email: "",
    Password: "",
  };

  const nameHandler = (e) => {
    setFormContactData((prevState) => {
      return { ...prevState, Name: e.target.value };
    });
  };
  const emailHandler = (e) => {
    setFormContactData((prevState) => {
      return { ...prevState, Email: e.target.value };
    });
  };
  const passwordHandler = (e) => {
    setFormContactData((prevState) => {
      return { ...prevState, Password: e.target.value };
    });
  };

  // const idIncrementHandler = () =>{
  //    setFormContactData ((prevState) =>{
  //     return {...prevState , id : }
  //    })
  // }
  const submitHandler = (e) => {
    e.preventDefault();
    if (validator.test(formContactData.Email)) {
      setMessage("Email set Sucessful");
      formSubmitData(formContactData);
      dataUpdate();
      setFormContactData(clearFormData);
      close();
    } else {
      setMessage("Error Message");
      console.log(message);
    }
    // formSubmitData(formContactData);
    // dataUpdate();
    // setFormContactData(clearFormData);
    // close();
  };

  const updateHandler = (e) => {
    e.preventDefault();
    if (validator.test(formContactData.Email)) {
      editContactData(editData.id, formContactData);
      editUpdate();
      setFormContactData({
        ...formContactData,
        Name: "",
        Email: "",
        Password: "",
      });
      console.log("updating");
      close();
      editStatefalse();
      setMessage("Email set sucessfully");
    } else {
      setMessage("error Message");
    }
    // editContactData(editData.id, formContactData);
    // editUpdate();
    // setFormContactData(clearFormData);
    // close();
    // editStatefalse();
  };
  console.log(formContactData);
  return (
    <div className="Form my-5">
      <form action="" className="border py-2 px-3">
        <div className="name pt-5 flex justify-between">
          <label htmlFor="name" className="mr-5">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter Your Name"
            required
            className="appearance-none focus:outline-red-600 py-2 px-4"
            onChange={(e) => nameHandler(e)}
            value={formContactData.Name}
          />
        </div>
        <div className="email my-3 flex justify-between">
          <label htmlFor="email " className="mr-5">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Your Email"
            required
            className="appearance-none focus:outline-red-600 py-2 px-4"
            onChange={(e) => emailHandler(e)}
            value={formContactData.Email}
          />
        </div>
        {message !== "" ? (
          <h3 className="text-[18px]  text-center my-3">
            You have enter incorrect email.
          </h3>
        ) : null}
        <div className="password flex justify-between">
          <label htmlFor="password" className="mr-5">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Your Passowrd"
            required
            className="mb-5 appearance-none focus:outline-red-600 py-2 px-4"
            onChange={(e) => passwordHandler(e)}
            value={formContactData.Password}
          />
        </div>
        <div className="submit flex justify-between">
          {editState ? (
            <button
              className="border py-2 px-10"
              type="submit"
              onClick={(e) => updateHandler(e)}
            >
              Update
            </button>
          ) : (
            <button
              className="border py-2 px-10"
              type="submit"
              onClick={(e) => submitHandler(e)}
            >
              Submit
            </button>
          )}
          <button
            className="border py-2 px-10"
            onClick={() => {
              editStatefalse();
              close();
            }}
            type="button"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
