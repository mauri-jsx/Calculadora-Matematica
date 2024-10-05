import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calculator from "./pages/Calculadora.jsx";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Calculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
