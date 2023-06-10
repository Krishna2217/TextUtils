import React,{useState}  from 'react'
// concept of state

export default function TextForm(props) {
    const changeToUpper =()=>{
        // console.log("uppercase was clicked");
        // textChange("You have clicked on change change to upper")
        let newText = text.toUpperCase();
        textChange(newText);
    }
    // const valueChanged = ()=>{ this will not allow to write in text area using event object
    //     console.log("Value changed");
    // }

    const valueChanged = (event)=>{
        // console.log("Value changed");
        textChange(event.target.value);
    }


    const [text,textChange]=useState("Enter the text here");
    // text= "new text"; wrong way to change text
    // setText("new text") correct way to change text
    return (
        <div>
            <h1>{props.Heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control" id="myBox" value={text}  onChange={valueChanged} rows="8" ></textarea>
            </div>
            <button className="btn btn-primary" onClick={changeToUpper}>Convert to UpperCase</button>
        </div>
    )
}
