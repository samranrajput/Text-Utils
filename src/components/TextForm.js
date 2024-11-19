import React, {useState} from 'react'

export default function TextForm({heading = "Enter a Heading", mode='', toggleMode=''}) {
    const upperCaseClick = ()=> {
        setText(Text.toUpperCase());
    };
    const lowerCaseClick = ()=> {
        setText(Text.toLowerCase());
    };
    const titleClick = ()=> {
        setText(Text.split(' ').map(Text => Text.charAt(0).toUpperCase() + Text.slice(1).toLowerCase()).join(' '));
    };
    const clearClick = ()=> {
        setText(' ');
    };
    const copyClick = ()=> {
        navigator.clipboard.writeText(Text).then(() => {
            setCopyMessage(true); // Show copy message
            setTimeout(() => setCopyMessage(false), 2000); // Hide after 2 seconds
        });
    };
    const reverseClick = ()=> {
        setText(Text.split('').reverse().join(''))
    };
    const removeSpaceClick = ()=> {
        let newText= Text.split(/[ ]+/);
        setText(newText.join(" "));
    };
    const clickOnChange = (event)=> {
        setText(event.target.value);
    };
    const [Text,setText] = useState('');
    const [copyMessage, setCopyMessage] = useState(false); 
  return (
    <>
        {copyMessage && (
            <div className="alert alert-success" id="copy" role="alert">
                Text copied to clipboard!
            </div>
        )}
        <div className={`container my-3 text-${mode==='light'?'dark':'light'}`}>
            <h3>{heading}</h3>
            <textarea className={`form-control ${mode === 'dark' ? 'dark-placeholder' : ''}`} id="exampleFormControlTextarea1" style={{backgroundColor : mode==='dark'?'#030137':'white',color: mode === 'dark' ? 'white' : 'black'}} placeholder='Enter Text Here' value={Text} onChange={clickOnChange} rows="8"></textarea>
            <div className='container my-2'>
                <button className='btn btn-primary mx-1' onClick={upperCaseClick}>Text Upper Case</button>
                <button className='btn btn-primary mx-1' onClick={lowerCaseClick}>Text Lower Case</button>
                <button className='btn btn-primary mx-1' onClick={titleClick}>Text Title</button>
                <button className='btn btn-primary mx-1' onClick={reverseClick}>Text Reverse</button>
                <button className='btn btn-primary mx-1' onClick={removeSpaceClick}>Remove Extra Spaces</button>
                <button className='btn btn-primary mx-1' onClick={clearClick}>Clear Text</button>
                <button className='btn btn-primary mx-1' onClick={copyClick}>Copy Text</button>
            </div>
            <div className='container my-1'>
                <h3>Your Text Summary</h3>
                <p>Words: {Text.trim().length > 0 ? Text.trim().split(/\s+/).length : 0} and Characters: {Text.trim().length}</p>
                <p>Your text read time is {Text.trim().length > 0 ? (0.008 * Text.trim().split(/\s+/).length).toFixed(2) : 0} Minutes</p>   
                <h3>Preview</h3>
                <p>{Text.length>0?Text:'Enter The Text'}</p>
            </div>
        </div>
    </>
  );
};
