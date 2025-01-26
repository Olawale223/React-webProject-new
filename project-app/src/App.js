import "./App.css";
import Homepage from "./Pages/Homepage";
import Aboutpage from "./Pages/Aboutpage";
import AccessPage from "./Pages/AccessPage";
import Auth from "./Auth";
import Careerspage from "./Pages/Careerspage";
import FAQs from "./Pages/FAQs";
import { Route, Routes } from "react-router-dom";
import Checkoutpage from "./Pages/Checkoutpage";
import Productpage from "./Pages/Productpage";

function App() {
  return (
    <Routes>
      <Route path="/access" element={<AccessPage />} />
      <Route element={<Auth />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/careers" element={<Careerspage />} />
        <Route path="/checkout" element={<Checkoutpage />} />
        <Route path="/product" element={<Productpage/>} />
        <Route path="/faqs" element={<FAQs />} />
      </Route>
      
    </Routes>
  );
}

export default App;
