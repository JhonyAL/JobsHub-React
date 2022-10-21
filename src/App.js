import "./App.css";
import {
  createBrowserRouter,
  BrowserRouter as Router,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { CiSearch } from "react-icons";

import Navbar from "./components/js/Navbar";
import Home from "./components/js/Home";
import Sobre from "./components/js/Sobre";
import Login from "./components/js/Login";
import { BsFillChatDotsFill } from "react-icons/bs";

export default function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Navbar />
        </header>
        <BsFillChatDotsFill className="chat-icon" />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}
