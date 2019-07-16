import React, { useState} from "react";
import NumberButton from "./NumberButton";

//import any components needed

//Import your array data to from the provided data file
import { numbers } from "../../../data.js";
console.log("numbers" , {numbers})
const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [ numbersState, setNumberState] = useState(numbers)
  console.log("numbers" , {numbersState})
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
      it any props needed by the child component*/}
       {numbersState.map((number, index) =>(
         <NumberButton number={number} key={index} />

       ))}
       
       
    </div>
  );
};

export default Numbers;
