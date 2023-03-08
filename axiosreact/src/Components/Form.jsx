import React from "react";
import { useState, useEffect } from "react";
// import PasswordValidor from "../Validation/Validation";
import validPassword from "../Validation/Validation";
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
  const [showPassword, setShowPassword] = useState(false);
  const validator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:

  const [message, setMessage] = useState();
  const [emailErr, setEmailErr] = useState("");
  const [password, setPassword] = useState();
  const [passwordERR, setPasswordERR] = useState("");

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
      setEmailErr("Email set  Sucess");
      setMessage(false);
      if (validPassword.test(formContactData.Password)) {
        setPasswordERR(false);
        setPassword("Passowrd set sucessfully");
        formSubmitData(formContactData);
        dataUpdate();
        setFormContactData(clearFormData);
        close();
      } else {
        setPasswordERR(true);
        setPassword("Password Must contain 1 Caps 1 Special char and min 8");
      }
    } else {
      setMessage(true);
      setEmailErr("Incorrect Email");
    }
    // formSubmitData(formContactData);
    // dataUpdate();
    // setFormContactData(clearFormData);
    // close();
  };

  const updateHandler = (e) => {
    e.preventDefault();
    if (validator.test(formContactData.Email)) {
      setEmailErr("Email set  Sucess");
      setMessage(false);
      if (validPassword.test(formContactData.Password)) {
        setPasswordERR(false);
        setPassword("Passowrd set sucessfully");
        editContactData(editData.id, formContactData);
        editUpdate();
        setFormContactData({
          ...formContactData,
          Name: "",
          Email: "",
          Password: "",
        });
        close();
        editStatefalse();
      } else {
        setPasswordERR(true);
        setPassword("Password Must contain 1 Caps 1 Special char and min 8");
      }
    } else {
      setMessage(true);
      setEmailErr("Incorrect Email");
    }

    // editContactData(editData.id, formContactData);
    // editUpdate();
    // setFormContactData(clearFormData);
    // close();
    // editStatefalse();
  };
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
        {message === true ? (
          <h3 className="text-[18px]  text-center my-3">{emailErr}</h3>
        ) : (
          <h3 className="text-[18px]  text-end my-3 mr-1">{emailErr}</h3>
        )}
        <div className="password flex justify-between items-center">
          <label htmlFor="password" className="mr-5">
            Password
          </label>
          <div className="password">
            <input
              type={`${showPassword ? "text" : "password"}`}
              required
              className="mb-5 appearance-none focus:outline-red-600 py-2 px-4"
              onChange={(e) => passwordHandler(e)}
              value={formContactData.Password}
              placeholder="Minimum eight characters, at least one letter, one number and one special character:>"
            />
            <h1
              className="border border-white p-2 self-start cursor-pointer text-base text-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              Show Password
            </h1>
          </div>
        </div>
        {passwordERR === true ? (
          <h3 className="text-[18px]  text-center my-3 max-w-[200px] mx-auto p-4">
            {password}
          </h3>
        ) : formContactData.Password === "" ? (
          <h3 className="text-[18px]  text-end my-3 mr-1">
            Please fill the Password
          </h3>
        ) : formContactData.Password.length < 8 ? (
          <h3 className="text-[18px]  text-end my-3 mr-1">
            passwordMust be Minimum of 8
          </h3>
        ) : null}
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
