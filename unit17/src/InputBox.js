import React, {useContext, useRef} from 'react';
import { TextContext } from './TextContext';

export default function InputBox(){
    const {setText} = useContext(TextContext);
    const inputRef = useRef(null);

    const handleSave = () =>{
        if(inputRef.current.value.trim() !== ""){
            setText(inputRef.current.value);
            inputRef.current.value = "";
            inputRef.current.focus();
        }
    }

    return(
        <div>
            <input ref={inputRef} type="text" placeholder='Введіть текст'/>
            <button onClick={handleSave}>Save</button>
        </div>
    )
}