import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const EmployeeListing = () => {
  const [empData, setEmpData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/employee`);
      const data = await response.json();
      console.log(data);
      setEmpData(data);
    } catch (error) {
      console.log(`Error Occur ${error}`);
    }
  };

  //  Delete employee function
  const deleteEmployee = async (id) => {
    try {
      if (window.confirm(`Do you want to delete the user?`)) {
        const response = await fetch(`http://localhost:8000/employee/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          alert(`User with ID ${id} removed successfully.`);
          // Refresh the employee list after deletion
          fetchData();
        } else {
          alert("Failed to delete user.");
        }
      }
    } catch (error) {
      console.log(`Error in ${error}`);
    }
  };

  return (
    <div className="container" style={{ padding: "50px" }}>
      <div className="card" style={{ minHeight: "70vh" }}>
        <div className="card-title">
          <h2 style={{ textAlign: "center", padding: "10px" }}>
            Employee Listing
          </h2>
        </div>
        <div className="card-body">
          <div className="divbtn m-3">
            <Link to="/employee/create" className="btn btn-success">
              Add Employee(+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empData.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee?.id}</td>
                  <td>{employee?.name}</td>
                  <td>{employee?.email}</td>
                  <td>{employee?.phone}</td>
                  <td>
                    <Link
                      to={`/employee/edit/${employee.id}`}
                      className="btn btn-success mx-1"
                    >
                      Edit
                    </Link>
                    <Link
                      onClick={() => deleteEmployee(employee.id)}
                      className="btn btn-danger mx-1"
                    >
                      Delete
                    </Link>
                    <Link
                      to={`/employee/details/${employee.id}`}
                      className="btn btn-primary mx-1"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeListing;
