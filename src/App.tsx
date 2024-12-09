import "./App.css";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home";
import NotFound from "./pages/notfound/NotFound";



function App() {


  return (
    <BrowserRouter>
    <HelmetProvider>
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<NotFound/>}/> 
      </Routes>
    </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
