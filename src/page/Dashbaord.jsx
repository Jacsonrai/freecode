import { NavLink } from "react-router-dom";
import "./dashboard.scss";

import { useEffect, useState } from "react";
import https from "../utils/https";
const Dashboard = () => {
 const[value,setvalue]=useState([])
    useEffect(() => {
      https
        .get("/api/user")
        .then((data) => setvalue(data.data))
        .catch((err) => console.log(err));
    }, []);


  return (
    <div className="dashboardContainer">
      <div className="container">
        <div className="dashbaordMainContainer">
          <div className="patientListContainer">
            <div className="patientTitleContainer">
              <h5 className="patientTitle">PATIENT LIST</h5>
            </div>
            {value?.map((item,index)=>(
            <div className="patientInformationContainer " key={index}>
              
                 <div className="patientsMainContainer" >
                 <div className="patientsNameContainer">
                   <h5 className="patientsName">Patient Name:{item.firstName}</h5>
                 </div>
 
                 <div className="patientsDetailsContainer">
                   <p className="patientsDetails">
                    {item.medicalDiagnosis}
                   </p>
                 </div>
                 <div className="seeMoreContainer">
                 <NavLink to={`/user/${item.id}`}
                 className="seeMoreBtn"
                 >Show Details...</NavLink>
                 </div>
               </div>
            
             
            </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
