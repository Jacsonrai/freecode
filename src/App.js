import './App.scss'

import Routing from './Global/Routing';
import { BrowserRouter } from "react-router-dom";
import { GlobalData } from './Hooks/CreateContext';
import { useMemo, useState } from 'react';

function App() {
  const [detail,setDetail]=useState([])
  const [patientData, setPatientData] = useState({
    firstName: "",
    gender: "",
    age: "",
    email: "",
    phone: "",
    startDate: "",
    endingDate: "",
    allergies: "",
    medicalDiagnosis:"",
    description:"",
    prescription: "",
  });
  const ProviderValue=useMemo(()=>({detail,setDetail,patientData, setPatientData},[detail,setDetail,patientData, setPatientData]))
  return (
    <GlobalData.Provider value={ProviderValue}>
        <BrowserRouter>
    <Routing/>
    </BrowserRouter>
    </GlobalData.Provider>
  
    
  
  );
}

export default App;
