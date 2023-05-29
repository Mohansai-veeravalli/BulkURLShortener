import {useState} from 'react'
import Uploader from "./Uploader";

const InputShortener = ({setInputValue}) => {
    const [value, setValue] = useState("");
    const [dataValue, setDataValue] = useState ("");
    const handleClick = () =>{
        if (dataValue !== "") {
            let arr = dataValue.split('https://');
            setInputValue(arr);
            setValue("");
        }else{
            let arr = value.split('https://');
            setInputValue(arr);
            setValue("");
        }
        console.log(dataValue)
       
    }

    return (
        <div className="inputContainer">
            <h1>Bulk URL <span>Shortener</span></h1>
            <div>
                <textarea style={{height:200,width:400}} placeholder="Enter your URL Here "
                  value={value}
                  onChange={e => setValue(e.target.value)}
                />
                <button className='click-me-button' onClick={handleClick}>click me</button>
            </div>
            <div>
            <Uploader setDataValue={setDataValue}/>
            <button className='click-me-button' onClick={handleClick}>click me</button>
            </div>

        </div>
    )
}
export default InputShortener