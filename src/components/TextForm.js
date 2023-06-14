import React,{useState}  from 'react'
// concept of state

export default function TextForm(props) {
    const changeToUpper =()=>{
        // console.log("uppercase was clicked");
        // textChange("You have clicked on change change to upper")
        let newText = text.toUpperCase();
        textChange(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const changeToLower =()=>{
        let newText = text.toLowerCase();
        textChange(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    const handleErase =()=>{
        let newText = '';
        textChange(newText);
        props.showAlert("Text deleted", "success");
    }
    // const valueChanged = ()=>{ this will not allow to write in text area using event object
    //     console.log("Value changed");
    // }
    const handleCopy = ()=>{
        let text= document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard", "success");
    }
    
    const valueChanged = (event)=>{
        textChange(event.target.value);
    }

    const [text,textChange]=useState("");  
    // text= "new text"; wrong way to change text
    // setText("new text") correct way to change text
    return (
        <>
            <div className="container" style={{color:props.mode==='dark' ?'white':'#042743'}}>
                <h1>{props.Heading}</h1>
                <div className="mb-3">
                    
                <textarea className="form-control" id="myBox" value={text}  onChange={valueChanged} style={{backgroundColor:props.mode==='dark' ?'grey':'white',color:props.mode==='dark' ?'white':'#042743'}} rows="8" ></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={changeToUpper}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={changeToLower}>Convert to LowerCase</button>
                <button className="btn btn-danger mx-1" onClick={handleErase}>Erase</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark' ?'white':'#042743'}}> 
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0? text:"Enter something above to preview it."}</p>
            </div>
        </>
    )
}

