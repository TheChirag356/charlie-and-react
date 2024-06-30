import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-xl text-black mb-4">Tailwind Test</h1>

        <Card />
        <Card username="Alexandra"/>
    </>
  );
}

export default App;
