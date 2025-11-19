import { BrowserRouter, Routes, Route } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import MainForm from "./MainForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/main-form" element={<MainForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

