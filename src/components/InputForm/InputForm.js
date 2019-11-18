import React, {useState, useEffect} from 'react';
import './InputForm.sass';

const InputForm = props => {
  const {addAetObject, aetArray} = props;

  const initialInput = {name: ''};

  const [input, setInput] = useState(initialInput);

  const handleInputChange = event => {
    const {name, value} = event.target;
    setInput({[name]: value});
  };

  const handleKeyDown = event => {
    if(event.keyCode === 38){
    const {name} = event.target;
    setInput({[name]: aetArray[aetArray.length - 1].aet});
    }
  }

  const handleSubmit = event => {
    event.preventDefault();
    addAetObject(input.name);
    setInput(initialInput);
  };

  useEffect(() => {
    var listEl = document.getElementsByClassName('list-wrapper')[0];
    listEl.scrollBy(0, 36);
  });

  return (
    <div className="form-wrapper">
      <form className="main-AET-form" id="mainAETform" onSubmit={handleSubmit}>
        <input
          className="user-input"
          id="userInput"
          type="text"
          autoComplete="off"
          name="name"
          value={input.name}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button className="submit-input">Submit</button>
      </form>
    </div>
  );
};

export default InputForm;
