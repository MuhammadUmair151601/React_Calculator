import React from 'react'
import { useState, useEffect } from 'react'
const Calc = () => {

  const [value, setvalue] = useState('')
  const handleclick = (e) => {
    setvalue (value + e.target.value);
  }
  const clearinput = () => {
    setvalue('');
  }
  const deleteinput = () => {
    setvalue(value.slice(0, -1));
  }
  const calculate = () => {
  try {
    setvalue(eval(value).tostring()); 
  } catch {
    setvalue('Error');
  }
};
  // if we want to add the calculator functionality to the calculator:
  // useEffect(() => {
  //   const handleKeyPress = (event) => {
  //     const key = event.key;

  //     if ((key >= "0" && key <= "9") || ["+", "-", "*", "/", "."].includes(key)) {
  //       setvalue((prev) => prev + key);
  //     } else if (key === "Enter" || key === "=") {
  //       calculate();
  //     } else if (key === "Backspace") {
  //       deleteinput();
  //     } else if (key === "Escape") {
  //       clearinput();
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeyPress);

  //   // Cleanup on unmount
  //   return () => {
  //     window.removeEventListener("keydown", handleKeyPress);
  //   };
  // }, [value]); 

  return (

    <div className='h-120 w-90 bg-gray-950 rounded-[15px] shadow-[0_0_20px_4px_rgba(255,255,255,0.2)] text-gray-300 font-bold text-3xl'>
      <form action="">
        <div>
          <input className='mt-10 w-90 h-18 p-8 focus:outline-none focus:ring-0' type="text" placeholder='123456.....' value={value} readOnly/>
        </div>
        <div className='allButtons mt-10'>
        <div className='btns'>
          <input type="button" value="AC" onClick={clearinput}/>
          <input type="button" value="DE" onClick={deleteinput}/>
          <input type="button" value="." onClick={handleclick}/>
          <input type="button" value="/" onClick={handleclick}/>

        </div >
        <div className='btns'>
          <input type="button" value="7" onClick={handleclick}/>
          <input type="button" value="8" onClick={handleclick}/>
          <input type="button" value="9" onClick={handleclick}/>
          <input type="button" value="*" onClick={handleclick} />
 
        </div> 
        <div className='btns'> 
          <input type="button" value="4" onClick={handleclick}/>
          <input type="button" value="5" onClick={handleclick}/>
          <input type="button" value="6" onClick={handleclick}/>
          <input type="button" value="+" onClick={handleclick}/>

        </div>
        <div className='btns'>
          <input type="button" value="1" onClick={handleclick}/>
          <input type="button" value="2" onClick={handleclick}/>
          <input type="button" value="3" onClick={handleclick}/>
          <input type="button" value="-" onClick={handleclick}/>

        </div>
         <div className='btns'>
          <input type="button" value="000" onClick={handleclick}/>
          <input type="button" value="00"  onClick={handleclick}/>
          <input type="button" value="0"   onClick={handleclick}/>
          <input type="button" value="="   onClick={calculate}/>

        </div>
        </div>
      </form>
    </div>
  )
}

export default Calc