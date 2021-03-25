import React, {useState} from 'react'

export default function Button(props) {
    const [theStyle,updateStyle] = useState('stdButton ' + props.fill +'Fill')
    
    
    const handleClick = (e) => {
       
        props.function();

    }

    return <button className={theStyle} onClick={(e) => handleClick(e)}>{props.text}</button>;
}
