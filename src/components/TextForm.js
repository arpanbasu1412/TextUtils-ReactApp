import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success")
  };

  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success")
  };
  
    const handleClearClick = (event) => {
        let newText = '';
      setText(newText);
      props.showAlert("Clear the Text","success")
    };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const handleCopy = ()=>{
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copy to Clipboard","success")
  }

  const handleExtraSpaces = ()=> {
      let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove Extra Spaces","success")
    }



  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            Enter the text to analyze below
          </label>
          <textarea
            className="form-control my-3"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}
            id="myBox"
            rows="10"
            placeholder="Enter Text Here"
          ></textarea>
        </div>
        <button
          type="button"
          onClick={handleUpClick}
          className="btn btn-primary mx-1 my-1"
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          onClick={handleLoClick}
          className="btn btn-primary mx-1 my-1"
        >
          Convert to Lowercase
        </button>
        <button
          type="button"
          onClick={handleClearClick}
          className="btn btn-primary mx-1 my-1"
        >
          Clear Text
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="btn btn-primary mx-1 my-1"
        >
          Copy Text
        </button>
        <button
          type="button"
          onClick={handleExtraSpaces}
          className="btn btn-primary mx-1 my-1"
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Your text in the textbox to preview it here"}</p>
      </div>
    </>
  );
}
