import React, {useState} from 'react';
import './App.sass';
import InputForm from './components/InputForm/';
import List from './components/List/';
import TotalFooter from './components/TotalFooter/'
import TimeObject from './components/TimeObject/';

const App = () => {
  // const testVar = new TimeObject;
  // console.log(testVar);
  // testVar.addToArray(5);
  // console.log(testVar)

  // initiate store function: if passed name and data, save data in localStorage
  // if passed only name, load any stored data or return empty array
  const store = (namespace, data) => {
    if (data) {
      return localStorage.setItem(namespace, JSON.stringify(data))
    } else {
      let store = localStorage.getItem(namespace)
      return (store && JSON.parse(store)) || [];
    }
  }

  const aetData = store("aetData");

  const [aetArray, setAetArray] = useState(aetData);

  const addAetObject = aet => {
    let aetObject = {}
    aetObject.submitTime = Date.now();
    aetObject.aet = aet;
    setAetArray([...aetArray, aetObject])
  }


  return (
    <div className="App">
      <header className="App-header"><h1>!</h1></header>
      <InputForm addAetObject={addAetObject} />
      <List aetArray={aetArray} />
      <TotalFooter />
    </div>
  );
}

export default App;
