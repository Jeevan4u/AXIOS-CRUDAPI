import "./App.css";
import api from "./api/contacts";
import { useState, useEffect, useReducer } from "react";
import Contactcards from "./Components/Contactcards";
import Form from "./Components/Form";
import Card from "./Components/Card";
import AddContact from "./Components/AddContact";
import { GetReducer, INITIAL_STATE } from "./Reducer/GetReducer";
function App() {
  const [state, dispatch] = useReducer(GetReducer, INITIAL_STATE);

  // retrive contacts
  // const [contacts, setContacts] = useState();
  // const [add, setAdd] = useState(false);
  // const [edit, setEdit] = useState(false);
  // const [editData, setEditData] = useState({});

  // const editStatetrue = () => {
  //   setEdit(true);
  // };
  // const editStatefalse = () => {
  //   setEdit(false);
  // };
  // const handleClose = () => {
  //   console.log(" i am closing");
  //   setAdd(false);
  // };
  // const handleOpen = () => {
  //   setAdd(true);
  // };
  const retriveContact = async () => {
    try {
      dispatch({
        type: "FETCH_START",
      });
      const res = await api.get("/Contact");

      dispatch({
        type: "FETCH_SUCCESS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "FETCH_ERROR",
      });
    }
  };
  // const [postData, setPostData] = useState(false);
  // const [deleteDataCard, setDeleteDataCard] = useState(false);
  // const postDataHandler = () => setPostData(!postData);
  // const sumbmitSetter = () => setSubmit(!submit);
  // const postContactsData = async (formContactData) => {
  //   try {
  //     const res = await api.post("/Contact", formContactData);
  //   } catch (error) {
  //     console.log("Posting Data", error.message);
  //   }
  // };
  // const deleteContactsData = async (index) => {
  //   try {
  //     console.log("deleting Data");
  //     const res = await api.delete(`/Contact/${index}`);
  //     setDeleteDataCard(!deleteDataCard);
  //     console.log("data deleted", res.message);
  //   } catch (error) {
  //     console.log("Error Deleting Data", error.message);
  //   }
  // };
  // const editContactData = async (index, contacts) => {
  //   try {
  //     console.log("Editing Data");
  //     const res = await api.put(`/Contact/${index}`, contacts);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // const editContact = (data) => {
  //   // console.log(data);
  //   setEditData((prevState) => {
  //     return data;
  //   });
  // };

  // const [editSucess, seteditSucess] = useState(false);
  // const editUpdate = () => {
  //   seteditSucess(!editSucess);
  // };

  useEffect(() => {
    if (state.submit) {
      retriveContact();
    }
  }, [state.submit]);

  // useEffect(() => {
  //   retriveContact();
  // }, [postData, deleteDataCard, editSucess]);
  const handleFetch = () => {
    dispatch({
      type: "SUBMIT",
    });
  };
  console.log(state.data);
  return (
    <div className="App">
      <button className="border-black border-[2px] p-2" onClick={handleFetch}>
        Fetch data{" "}
      </button>
      {state?.loading ? (
        <h1>Loading Data ....</h1>
      ) : (
        <h1>
          {state.data?.map((data, i) => (
            <p key={i}>{data.Name}</p>
          ))}
        </h1>
      )}
    </div>
    // <div className="App ">
    //   <div className="main-container h-screen w-screen bg-slate-500 grid place-content-center">
    //     {contacts &&
    //       contacts.map((data, index) => (
    //         <div className="contactWrapper" key={index}>
    //           <Contactcards
    //             Carddata={data}
    //             deleteData={deleteContactsData}
    //             editContact={editContact}
    //             openForm={handleOpen}
    //             editState={editStatetrue}
    //           />
    //         </div>
    //       ))}

    //     <div className="PostContact flex justify-center mt-5">
    //       <button
    //         className="border py-2 px-10"
    //         onClick={() => {
    //           setAdd(true);
    //           setEdit(false);
    //         }}
    //       >
    //         Add Contact
    //       </button>
    //     </div>
    //     {add === true ? (
    //       <Form
    //         formSubmitData={postContactsData}
    //         dataUpdate={postDataHandler}
    //         close={handleClose}
    //         editData={editData}
    //         editState={edit}
    //         editContactData={editContactData}
    //         editUpdate={editUpdate}
    //         editStatefalse={editStatefalse}
    //       />
    //     ) : null}
    //     {/* <Card /> */}
    //     {/* <AddContact /> */}
    //   </div>
    // </div>
  );
}

export default App;
