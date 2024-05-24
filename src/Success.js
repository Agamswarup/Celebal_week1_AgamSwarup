import React from "react";
import { useLocation } from "react-router-dom";
import "./Success.css";

function Success() {
  const location = useLocation();
  const formdata = location.state;

  return (
    <div className="data">
      <div className="box">
        <h1 className="title">Form Submitted Successfully!</h1>
        <div className="content">
          <p>First Name: {formdata.firstName}</p>
          <p>Last Name: {formdata.lastName}</p>
          <p>Username: {formdata.username}</p>
          <p>Email: {formdata.email}</p>
          <p>Phone No: {formdata.phoneNo}</p>
          <p>Country: {formdata.country}</p>
          <p>City: {formdata.city}</p>
          <p>PAN No: {formdata.panNo}</p>
          <p>Aadhar No: {formdata.aadharNo}</p>
        </div>
      </div>
    </div>
  );
}

export default Success;
