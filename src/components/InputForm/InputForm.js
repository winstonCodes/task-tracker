import React, {useState, useEffect} from 'react';
import './InputForm.sass';

const InputForm = props => {
  const {addAetObject, aetArray} = props;

  const initialInput = {name: ''};

  const [input, setInput] = useState(initialInput);

  const [counter, setCounter] = useState(0);

  const handleInputChange = event => {
    const {name, value} = event.target;
    setInput({[name]: value});
  };

  // TODO: improve readability
  const handleKeyDown = event => {
    const {name} = event.target;
    let counterCopy = counter;
    if (event.keyCode === 38) {
      counterCopy++;
      counterCopy = counterCopy > aetArray.length ? counterCopy = aetArray.length : counterCopy
      setCounter(counterCopy);
      setInput({[name]: aetArray[aetArray.length - counterCopy].aet});
    }
    if (event.keyCode === 40) {
      counterCopy--;
      counterCopy = counterCopy < 1 ? counterCopy = 1 : counterCopy
      setCounter(counterCopy);
      setInput({[name]: aetArray[aetArray.length - counterCopy].aet});
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    addAetObject(input.name);
    setInput(initialInput);
    setCounter(0);
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
