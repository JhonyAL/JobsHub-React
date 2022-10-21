import "../css/Home.css";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import Login from "./Login";
import lucca from "../images/perfil-icon.png";
import { AiFillStar } from "react-icons/ai";

export default function Home() {
  return (
    <div className="Home">
      <section className="search-section">
        <div className="search-content">
          <div className="title">
            <h1>
              Pesquise por sua região para encontrar trabalhadores próximos
            </h1>
          </div>
          <label className="search-input" for="search">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Ex: São Paulo..."
            />
            <p>
              <BiSearch />
            </p>
          </label>
        </div>
      </section>
      <section className="cards">
        <h1>Destaques semanal</h1>
        <div className="card">
          <img src={lucca} alt="" />
          <p>Lucca Vinicius</p>
          <p>Profissão: Dev Front-end júnior</p>
          <div className="avaliation">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
      </section>
    </div>
  );
}
