import './App.css';
import Homepage from './Pages/Homepage';
import Aboutpage from './Pages/Aboutpage';
import AccessPage from './Pages/AccessPage';
import Auth from './Auth';
import { Route,Routes } from "react-router-dom";

function App() {
  return(
    <Routes>
      <Route path='/access' element={<AccessPage/>} />
      <Route element={<Auth/>}>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about" element={<Aboutpage/>} />
      </Route>
      
    </Routes>
  );
}

export default App;
