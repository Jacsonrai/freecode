import LabelInput from "../component/LabelInput/LabelInput";
import LabelText from "../component/LabelText/LabelText";
import "./patient.scss";

import DropDown from "../component/DropDown/DropDown";
import { useContext, useRef, useState } from "react";
import { GlobalData } from "../Hooks/CreateContext";
import https from "../utils/https";

const Patient = () => {
  const [patientData, setPatientData] = useContext(GlobalData);

  // const [patientData, setPatientData] = useState({
  //   firstName: "",
  //   gender: "",
  //   age: "",
  //   email: "",
  //   phone: "",
  //   startDate: "",
  //   endingDate: "",
  //   allergies: "",
  //   medicalDiagnosis:"",
  //   description:"",
  //   prescription: "",
  // });

  const handelSubmit = (e) => {
    e.preventDefault();

    const newPatient = { ...patientData };

    newPatient[e.target.value] = e.target.value;

    https
      .post("/api/user", newPatient)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <div className="patientInputContainer">
      <div className="container">
        <div className="inputMainContainer">
          <div className="inputTitleContainer">
            <h5 className="inputTitle">Medical information Form</h5>
            <p>Fill out your medical information carefully</p>
          </div>
          <div className="inputFormContainer">
            <div className="inputNameContainer">
              <LabelInput
                LabelName="patient Name"
                setSize="medium"
                setType="text"
                handelChange={(e) =>
                  setPatientData((prevState) => ({
                    ...prevState,
                    firstName: e.target.value,
                  }))
                }
              />
            </div>
            <div className="genderContainer">
              <LabelInput
                LabelName="Gender"
                setSize="medium"
                handelChange={(e) =>
                  setPatientData((prevState) => ({
                    ...prevState,
                    gender: e.target.value,
                  }))
                }
              />
            </div>
            <div className="AgeContainer">
              <LabelInput
                LabelName="Age"
                handelChange={(e) =>
                  setPatientData((prevState) => ({
                    ...prevState,
                    age: e.target.value,
                  }))
                }
                setSize="medium"
                setType="text"
              />
            </div>
            <div className="EmailContainer">
              <LabelInput
                handelChange={(e) =>
                  setPatientData((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
                LabelName="Email"
                setType="email"
                setSize="medium"
              />
            </div>
            <div className="PhoneContainer">
              <LabelInput
                LabelName="Phone Number"
                setType="number"
                setSize="medium"
                handelChange={(e) =>
                  setPatientData((prevState) => ({
                    ...prevState,
                    phone: e.target.value,
                  }))
                }
              />
            </div>
            <div className="dateContainer">
              <LabelInput
                setType="Date"
                LabelName="starting Date"
                setSize="medium"
                handelChange={(e) =>
                  setPatientData((prevState) => ({
                    ...prevState,
                    startDate: e.target.value,
                  }))
                }
              />
              <LabelInput
                setType="Date"
                LabelName="Ending Date"
                handelChange={(e) =>
                  setPatientData((prevState) => ({
                    ...prevState,
                    endingDate: e.target.value,
                  }))
                }
                setSize="medium"
              />
            </div>
            <div className="allegryContainer">
              <LabelText
                handelChange={(e) =>
                  setPatientData((prevState) => ({
                    ...prevState,
                    allergies: e.target.value,
                  }))
                }
                LabelName="List any allergies:"
              />
            </div>
            <div className="DignosisContainer">
              <LabelText
                handelChange={(e) =>
                  setPatientData((prevState) => ({
                    ...prevState,
                    medicalDiagnosis: e.target.value,
                  }))
                }
                setSize="medium"
                LabelName="Medical Diagnosis"
              />
            </div>
            <div className="treatmentSelectContianer">
              <DropDown />
            </div>
            <div className="descriptionDiagnosis">
              <LabelText
                LabelName="Description of the medical diagnosis"
                setValue={patientData.description}
              />
            </div>
            <div className="prescriptionContainer">
              <LabelText
                LabelName="Medical Advice/Prescription"
                setValue={patientData.prescription}
              />
            </div>

            <div className="submitBtnContainer">
              <button className="submitBtn" onClick={(e) => handelSubmit(e)}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Patient;
