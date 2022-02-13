import { Route, Routes } from "react-router-dom";
import NavBar from "../component/NavBar/Navbar";
import SinglePatient from "../component/SinglePatient/SinglePatient";
import Dashboard from "../page/Dashbaord";

import Patient from "../page/Patient";
import Treatment from "../page/Treatment";


const Routing = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
        <Route path="/treatment" element={<Treatment/>}/>
        <Route path="/patients" element={<Patient/>}/>
        <Route path='/user/:id' element={<SinglePatient/>}/>
      </Routes>
    </>
  );
};
export default Routing;
