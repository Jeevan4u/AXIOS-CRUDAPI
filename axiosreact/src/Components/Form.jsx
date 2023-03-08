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

  const [email, setEmail] = useState({ value: "", error: false, message: "" });
  const [password, setPassword] = useState({
    value: "",
    error: false,
    message: "",
  });

  const emailValid = (e) => {
    setEmail((prevState) => ({
      ...prevState,
      value: e.target.value,
      error: false,
      message: "",
    }));
  };
  const passwordValid = (e) => {
    setPassword((prevState) => ({
      ...prevState,
      value: e.target.value,
      error: false,
      message: "",
    }));
  };

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
    if (email.value === "") {
      setEmail((prevState) => ({
        ...prevState,
        error: true,
        message: "Email Cannot be empty",
      }));
    } else if (password.value === "") {
      setPassword((prevState) => ({
        ...prevState,
        error: true,
        message: "Password Feild Cannot be Empty",
      }));
    } else if (validator.test(email.value)) {
      setEmail((prevState) => ({
        ...prevState,
        error: false,
        message: "sucessly email",
      }));
      if (validPassword.test(password.value)) {
        setPassword((prevState) => ({
          ...prevState,
          error: false,
          message: "Sucess",
        }));
        formSubmitData(formContactData);
        dataUpdate();
        setFormContactData(clearFormData);
        close();
      } else {
        setPassword((prevState) => ({
          ...prevState,
          error: true,
          message: "Password format is Invalid",
        }));
      }
    } else {
      setEmail((prevState) => ({
        ...prevState,
        error: true,
        message: "Email format is invalid",
      }));
    }

    // formSubmitData(formContactData);
    // dataUpdate();
    // setFormContactData(clearFormData);
    // close();
  };

  const updateHandler = (e) => {
    e.preventDefault();
    if (email.value === "") {
      setEmail((prevState) => ({
        ...prevState,
        error: true,
        message: "Email Cannot be empty",
      }));
    } else if (password.value === "") {
      setPassword((prevState) => ({
        ...prevState,
        error: true,
        message: "Password Feild Cannot be Empty",
      }));
    } else if (validator.test(email.value)) {
      setEmail((prevState) => ({
        ...prevState,
        error: false,
        message: "sucessly email",
      }));
      if (validPassword.test(password.value)) {
        setPassword((prevState) => ({
          ...prevState,
          error: false,
          message: "Sucess",
        }));
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
        setPassword((prevState) => ({
          ...prevState,
          error: true,
          message: "Password format is Invalid",
        }));
      }
    } else {
      setEmail((prevState) => ({
        ...prevState,
        error: true,
        message: "Email format is invalid",
      }));
    }
    // editContactData(editData.id, formContactData);
    // editUpdate();
    // setFormContactData({
    //   ...formContactData,
    //   Name: "",
    //   Email: "",
    //   Password: "",
    // });
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
        <div className="email my-3 flex justify-between items-center">
          <label htmlFor="email " className="mr-5">
            Email
          </label>
          <div className="inputfeildContainer">
            <input
              type="email"
              placeholder="Enter Your Email"
              required
              className="appearance-none focus:outline-red-600 py-2 px-4"
              onChange={(e) => {
                emailHandler(e);
                emailValid(e);
              }}
              value={formContactData.Email}
            />
            {email.error === true && (
              <h1 className="text-center py-2">{email.message}</h1>
            )}
          </div>
        </div>

        <div className="password flex justify-between items-center">
          <label htmlFor="password" className="mr-5">
            Password
          </label>
          <div className="password">
            <input
              type={`${showPassword ? "text" : "password"}`}
              required
              className="mb-5 appearance-none focus:outline-red-600 py-2 px-4"
              onChange={(e) => {
                passwordHandler(e);
                passwordValid(e);
              }}
              value={formContactData.Password}
              placeholder="Minimum eight characters, at least one letter, one number and one special character:>"
            />
            {password.error === true && <h1>{password.message}</h1>}
            <h1
              className="border border-white p-2 self-start cursor-pointer text-base text-center mb-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              Show Password
            </h1>
          </div>
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
