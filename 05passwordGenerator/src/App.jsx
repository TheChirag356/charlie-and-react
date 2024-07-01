import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialAllowed, setSpecialAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (specialAllowed) str += "!@#$%^&*()_+=-`~{}[]|\\;:\"'<>,.?/";

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, specialAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, specialAllowed, passwordGenerator])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
      <h1 className="text-4xl text-center font-bold text-white my-3">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        onClick={copyPasswordToClipboard}
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="">Numbers Allowed</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={specialAllowed}
            id="specialInput"
            onChange={() => {
              setSpecialAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="">Special Characters Allowed</label>
        </div>
      </div>
    </div>
  );
}

export default App;
