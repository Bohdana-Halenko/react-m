import React, {useContext} from 'react';
import { TextContext} from './TextContext';

export default function DisplayText(){
    const {text} = useContext(TextContext);
    return <p>{text ? `Ви зберегли: ${text}` : "Нічого не збережено"}</p>
}