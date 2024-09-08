import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/Card.jsx";
import ThemeBtn from "./components/ThemeBtn.jsx";
import { ThemeProvider } from "./context/theme.js";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual change in theme
  useEffect(() => {
    const html = document.querySelector('html')
    html.classList.remove("light", "dark")
    html.classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
