import './App.scss'

import Routing from './Global/Routing';
import { BrowserRouter } from "react-router-dom";
import { GlobalData } from './Hooks/CreateContext';
import { useMemo, useState } from 'react';

function App() {
  const [detail,setDetail]=useState([])
  const ProviderValue=useMemo(()=>({detail,setDetail},[detail,setDetail]))
  return (
    <GlobalData.Provider value={ProviderValue}>
        <BrowserRouter>
    <Routing/>
    </BrowserRouter>
    </GlobalData.Provider>
  
    
  
  );
}

export default App;
