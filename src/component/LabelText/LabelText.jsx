import './labeltext.scss'
const LabelText=({LabelName,handelChange,setValue,setPalceHolder,setRef,setName,setType,setSize})=>{
    return(
        <div className="labelTextContainer">
            <div className="container">
                <div className="labeTextMainContainer">
                    <div className="labelContainer">
                        <label>{LabelName}:</label>
                    </div>
                    <div className="textContainer">
                     
                        <textarea
                        className='mediumText'
                           type={setType}
                           placeholder={setPalceHolder}
                           value={setValue}
                           onChange={handelChange}
                           ref={setRef}
                         
                        />

                    </div>

                </div>

            </div>

        </div>
    )
}
export default LabelText