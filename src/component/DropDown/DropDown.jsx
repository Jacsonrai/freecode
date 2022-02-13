import { useContext, useEffect, useState } from "react";
import https from "../../utils/https";
import './dropdown.scss'

import {GlobalData} from '../../Hooks/CreateContext'
const DropDown = () => {
    const [detail,setDetail]=useContext(GlobalData)
   
  const [value, setValue] = useState([]);

  
  useEffect(() => {
    https
      .get("/api/treatment")
      .then((data) => setValue(data.data))
      .catch((err) => console.log(err));
  }, []);
  const handleOnChange = async (e) => {
    await https
      .get(`/api/treatment/${e.target.value}`)
      .then((response) => setDetail(response))
      .catch((err) => console.log(err));
  };
  return (
    <div className="dropdownContainer">
      <div className="container">
          <div className="mainContainer">
          <label className="treatmentTitle">Select Treatment</label>
        <select onChange={handleOnChange}>
          <option value="0" >--select Treatment--</option>
          {value?.map((item, index) => (
            <option key={index} value={item.id} className="optionValue">
              {item.name}
            </option>
          ))}
        </select>
          </div>
        
      </div>
    </div>
  );
};
export default DropDown;
