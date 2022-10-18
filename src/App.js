import "./App.css";
import {
  createBrowserRouter,
  BrowserRouter as Router,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Navbar from './components/js/Navbar'
import Home from './components/js/Home.jsx'
import Sobre from './components/js/Sobre.jsx'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sobre" element={<Sobre />}/>
      </Routes>
    </Router>
  );
}