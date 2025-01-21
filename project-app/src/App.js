import './App.css';
import Homepage from './Pages/Homepage';
import Aboutpage from './Pages/Aboutpage';
import { Route,Routes } from "react-router-dom";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/about" element={<Aboutpage/>} />
    </Routes>
  );
}

export default App;
