import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EmployeeDetails = () => {
  const { empid } = useParams();
  console.log(empid);

  const [details, setDetails] = useState([]);
  const [noEmpolyee, setNoEmployee] = useState(false);
  useEffect(() => {
    fetchDetails();
  }, [empid]);

  const fetchDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8000/employee/${empid}`);
      if (response.status === 404) {
        setNoEmployee(true);
      }
      const data = await response.json();
      console.log(data);
      setDetails(data);
    } catch (error) {
      console.log(`Error is ${error}`);
    }
  };

  if (noEmpolyee) return <p>No Employee Found with ID {empid}</p>;
  return (
    <div>
      <h2>Employee Details</h2>
      <p>Employee Id : {details?.id}</p>
      <p>Employee Name : {details?.name}</p>
      <p>Employee Phone: {details?.phone}</p>
      <p>Employee email: {details?.email}</p>
    </div>
  );
};

export default EmployeeDetails;
