import { useState } from "react";

function App() {
  const [bgColor, setColor] = useState("white");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: bgColor }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-l">
          {["Red", "Green", "Blue", "White", "Black"].map((item, index) => {
            return (
              <button
                title={index.toString()}
                className={item !== "White" ? "outline-none px-4 py-1 rounded-xl shadow-lg text-white" : "outline-none px-4 py-1 rounded-xl shadow-lg text-black"}
                style={{ backgroundColor: item }}
                onClick={() => setColor(item)}
              >
                {item}
              </button>
            );
          })}
          
        </div>
      </div>
    </div>
  );
}

export default App;
