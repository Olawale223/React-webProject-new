import './App.css';
import Homepage from './Pages/Homepage';
import Aboutpage from './Pages/Aboutpage';
import Careerspage from './Pages/Careerspage';
import { Route,Routes } from "react-router-dom";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/about" element={<Aboutpage/>} />
      <Route path="/careers" element={<Careerspage/>} />
    </Routes>
  );
}

export default App;
