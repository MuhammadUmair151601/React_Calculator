import React, { useState, useEffect } from "react";

const Calc = () => {
  const [value, setValue] = useState("");

  const handleclick = (e) => {
    setValue((prev) => prev + e.target.value);
  };

  const clearinput = () => {
    setValue("");
  };

  const deleteinput = () => {
    setValue((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      setValue(eval(value).toString());
    } catch {
      setValue("Error");
    }
  };

  //  KEYBOARD SUPPORT
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;

      // numbers
      if (!isNaN(key)) {
        setValue((prev) => prev + key);
      }

      // operators & dot
      if (["+", "-", "*", "/", "."].includes(key)) {
        setValue((prev) => prev + key);
      }

      // Enter = calculate
      if (key === "Enter") {
        e.preventDefault();
        calculate();
      }

      // Backspace = delete
      if (key === "Backspace") {
        setValue((prev) => prev.slice(0, -1));
      }

      // Escape = clear
      if (key === "Escape") {
        setValue("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [value]);

  return (
    <div className="h-[480px] w-[400px] bg-gray-950 rounded-[15px]
                    shadow-[0_0_20px_4px_rgba(255,255,255,0.2)]
                    text-gray-300 font-bold text-3xl p-4">

      <input
        className="mt-6 ml-2 border rounded-sm w-[360px] h-[72px] p-6
                   focus:outline-none focus:ring-0 text-right bg-gray-700"
        type="text"
        placeholder="0"
        value={value}
        readOnly
      />

      <div className="mt-8 space-y-4">

        <div className="btn grid grid-cols-4 gap-3 ">
          <input type="button" value="AC" onClick={clearinput} />
          <input type="button" value="DE" onClick={deleteinput} />
          <input type="button" value="." onClick={handleclick} />
          <input type="button" value="/" onClick={handleclick} />
        </div>

        <div className="btn grid grid-cols-4 gap-3">
          <input type="button" value="7" onClick={handleclick} />
          <input type="button" value="8" onClick={handleclick} />
          <input type="button" value="9" onClick={handleclick} />
          <input type="button" value="*" onClick={handleclick} />
        </div>

        <div className="btn grid grid-cols-4 gap-3">
          <input type="button" value="4" onClick={handleclick} />
          <input type="button" value="5" onClick={handleclick} />
          <input type="button" value="6" onClick={handleclick} />
          <input type="button" value="+" onClick={handleclick} />
        </div>

        <div className="btn grid grid-cols-4 gap-3">
          <input type="button" value="1" onClick={handleclick} />
          <input type="button" value="2" onClick={handleclick} />
          <input type="button" value="3" onClick={handleclick} />
          <input type="button" value="-" onClick={handleclick} />
        </div>

        <div className="btn grid grid-cols-4 gap-3">
          <input type="button" value="000" onClick={handleclick} />
          <input type="button" value="00" onClick={handleclick} />
          <input type="button" value="0" onClick={handleclick} />
          <input type="button" value="=" onClick={calculate} />
        </div>

      </div>
    </div>
  );
};

export default Calc;
