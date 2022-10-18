import "./App.css";
import {
  createBrowserRouter,
  BrowserRouter as Router,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { CiSearch } from 'react-icons'

import Navbar from './components/js/Navbar'
import Home from './components/js/Home.jsx'
import Sobre from './components/js/Sobre.jsx'

export default function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sobre" element={<Sobre />}/>
      </Routes>
    </Router>
  );
}