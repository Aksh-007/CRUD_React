import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const CreateEmployee = () => {
  const navigate = useNavigate();
  const [inputFields, setInputFields] = useState({
    id: "",
    name: "",
    email: "",
    phone: 0,
    // isActive: true,
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    const newValue = name === "phone" ? parseInt(value, 10) : value;
    setInputFields((preVal) => {
      return {
        ...preVal,
        [name]: newValue,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputFields);
    try {
      const response = await fetch(`http://localhost:8000/employee`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(inputFields),
      });
      console.log(response);
      alert("Saved successfully.");
      navigate("/");
    } catch (error) {
      console.log(`Error is ${error}`);
    }
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }} className="pt-4">
        Add Employee
      </h1>
      <div
        style={{
          display: "flex",
          height: "80vh",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "aqua",
        }}
      >
        <form style={{ width: "40%" }} onSubmit={handleSubmit}>
          {/* <div className="">
            <label className="form-label">ID</label>
            <input
              name="id"
              disabled="disabled"
              className="form-control"
            ></input>
          </div> */}
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              required
              name="name"
              type="text"
              className="form-control"
              onChange={onChangeHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email </label>
            <input
              name="email"
              required
              type="email"
              className="form-control"
              onChange={onChangeHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mobile Number</label>
            <input
              name="phone"
              required
              type="Number"
              className="form-control"
              onChange={onChangeHandler}
            />
          </div>
          {/*<div className="mb-3">
            <label>Address</label>
            <input type="text" className="form-control" />
          </div> */}

          {/* <div className="mb-3 form-check">
            <input
              name="isActive"
              type="checkbox"
              className="form-check-input"
              onChange={onChangeHandler}
              checked={inputFields.isActive}
            />
            <label className="form-check-label">Is Active</label>
          </div> */}
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <Link to="/" className="btn btn-danger mx-2">
            Back
          </Link>
        </form>
      </div>
    </>
  );
};

export default CreateEmployee;
