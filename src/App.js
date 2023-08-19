import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateEmployee from './components/CreateEmployee';
import EmployeeListing from './components/EmployeeListing';
import EmployeeDetails from './components/EmployeeDetails';
import EditEmployee from './components/EditEmployee';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmployeeListing />} />
        <Route path='/employee/create' element={<CreateEmployee />} />
        <Route path='/employee/details/:empid' element={<EmployeeDetails />} />
        <Route path='/employee/edit/:empid' element={<EditEmployee />} />
        {/* <Route path='/employee/delete/:empid' element={<EditEmployee />}   /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
