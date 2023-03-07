import React from "react";
import { useState } from "react";
const Contactcards = ({
  Carddata,
  deleteData,
  editContact,
  openForm,
  editState,
  editContactData,
}) => {
  return (
    <div className="Contact-cards flex gap-5 my-3 justify-between items-center">
      <div className="id">
        <h1 className="text-[28px]">{Carddata.id}</h1>
      </div>
      <div className="name">
        <h2 className="text-lg leading-7 tracking-wider">{Carddata.Name}</h2>
      </div>
      <div className="Email">{Carddata.email}</div>
      <div className="edit">
        <button
          className="border py-2 px-10"
          onClick={() => {
            editContact(Carddata);
            openForm();
            editState();
          }}
        >
          Edit
        </button>
      </div>
      <div className="delete">
        <button
          className="border py-2 px-10"
          onClick={() => deleteData(Carddata.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contactcards;
