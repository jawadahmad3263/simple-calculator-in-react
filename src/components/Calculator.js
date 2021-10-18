import React, { useState } from "react";
import Styles from "./assets/css/Calculator.module.css";
export default function Calculator() {
  const [result, setResult] = useState("");
  //functions
  const handleClick = (e) => {
    setResult(result + e.target.name);
  };
  const removeAll = () => {
    setResult("");
  };
  const remove = () => {

    setResult(result.slice(0,-1));
  };
  const changeSign = () => {
      let res =result/-1;
    setResult(res.toString());
  };
  const calculation = () => {
      try{
    var res = eval(result);
    setResult(res.toString());}
    catch(err){
        setResult("err")
    }
  };

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.inputWrapper}>
        <input type="text" className={Styles.inputField} value={result} />
      </div>
      <div className={Styles.keypad}>
        <button className={Styles.operaterBtn} onClick={removeAll}>AC</button>
        <button className={Styles.operaterBtn} onClick={remove}>C</button>
        <button  className={Styles.operaterBtn}  onClick={changeSign}>+/-</button>
        <button className={Styles.operaterBtn} name="%" onClick={handleClick}>
          %
        </button>
        <button className={Styles.actionBtn} name="9" onClick={handleClick}>
          9
        </button>
        <button className={Styles.actionBtn} name="8" onClick={handleClick}>
          8
        </button>
       
        <button className={Styles.actionBtn} name="7" onClick={handleClick}>
          7
        </button>
        <button className={Styles.operaterBtn} name="/" onClick={handleClick}>
          &divide;
        </button>
      
        <button className={Styles.actionBtn} name="6" onClick={handleClick}>
          6
        </button>
       
        <button className={Styles.actionBtn} name="5" onClick={handleClick}>
          5
        </button>
        <button className={Styles.actionBtn} name="4" onClick={handleClick}>
          4
        </button>
        <button className={Styles.operaterBtn} name="*" onClick={handleClick}>
          &times;
        </button>
      
        <button className={Styles.actionBtn} name="3" onClick={handleClick}>
          3
        </button>
        <button className={Styles.actionBtn} name="2" onClick={handleClick}>
          2
        </button>
        
        <button className={Styles.actionBtn} name="1" onClick={handleClick}>
          1
        </button>
         
        <button className={Styles.operaterBtn} name="-" onClick={handleClick}>
          &ndash;
        </button>
        <button className={Styles.actionBtn} name="0" onClick={handleClick}>
          0
        </button>
        <button className={Styles.operaterBtn} name="." onClick={handleClick}>
          .
        </button>
        <button className={Styles.eqlBtn} onClick={calculation}>=</button>
        <button className={Styles.operaterBtn} name="+" onClick={handleClick}>
          +
        </button>
      </div>
    </div>
  );
}
