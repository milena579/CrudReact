import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./home";
import Login from "./login";

function App(){
  
  return (
    <BrowserRouter>
      <Routes>
          <Route component = { Home }  path="/" exact />
          <Route component = { Login }  path="/login" />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
