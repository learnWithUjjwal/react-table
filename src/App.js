import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default App;
