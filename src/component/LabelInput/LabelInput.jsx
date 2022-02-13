import './labelinput.scss'
const LabelInput=({LabelName,handelChange,setMin,setMax,setValue,setPlaceHolder,setType,setSize})=>{
    return(
        <div className="labelInputContainer">
            <div className="container">
                <div className="labelInputMainContainer">
                    <div className="labelContainer">
                        <label className={setSize}>{LabelName}:</label>
                    </div>
                    <div className="inputContainer">
                        <input
                      className={setSize}
                      type={setType} 
                      value={setValue} 
                      onChange={handelChange}
                      max={setMax}
                      min={setMin}
                      placeholder={setPlaceHolder}
                        />

                    </div>

                </div>

            </div>

        </div>
    )
}
export default LabelInput