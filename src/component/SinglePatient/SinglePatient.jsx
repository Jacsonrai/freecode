import './singlepatient.scss'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import https from '../../utils/https'
import { useState } from 'react'
const SinglePatient=()=>{
    const[value,setvalue]=useState([])
    const params=useParams()
    useEffect(()=>{
        https.get(`/api/user/${params.id}`).then((data) => setvalue(data.data))
        .catch((err) => console.log(err));
    },[])

return(
    <div className="singlePatientContainer">
        <div className="container">
            <div className="mainContainer">
                <div className="singlePatientTitleContainer">
                    <h5>DOCTOR'S NOTE</h5>

                </div>
                
                <div className="singlePatientInfoContainer">
                    <div className="singlePatientDetailContainer">
                        <div className="singlePatientNameContainer">
                            <h5>Name:{value.firstName}</h5>
                        </div>
                        <div className="singlePatientGenderContainer">
                            <h5>Gender:{value.gender}</h5>
                        </div>
                        <div className="singlePatientEmailContainer">
                            <h5>Email:{value.email}</h5>
                        </div>
                        <div className="singlePatientAgeContianer">
                            <h5>Age:{value.age}</h5>
                        </div>
                        <div className="singlePatientPhoneContainer">
                            <h5>Phone:{value.phone}</h5>
                        </div>
                        <div className="singlePatinetDateContainer">
                            <h5>Start Date:{value.startDate}</h5>
                            <h5>End Date:{value.endingDate}</h5>
                        </div>

                    </div>
                    <div className="mediaclDiagnosisContainer">
                    <div className="diagnosisContainer">
                            <h5 >Allergies</h5>
                            <p className='allergies'>{value.allergies}</p>
                        </div>
                        <div className="diagnosisContainer">
                            <h5>Medical Diagnosis</h5>
                            <p>{value.medicalDiagnosis}</p>
                        </div>
                        
                        <div className="diagnosisDescriptionContainer">
                        <h5>Description of Diagnosis</h5>
                            <p>{value.description}</p>
                        </div>
                        <div className="prescriptionContainer">
                        <h5>Prescription</h5>
                            <h3 className='prescription'>{value.prescription}</h3>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
)
}
export default SinglePatient