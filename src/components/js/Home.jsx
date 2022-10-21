import "../css/Home.css";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import Login from './Login'

export default function Home() {

  return (
    <div>
      <section className="search-section">
        <div className="search-content">
          <div className="title">
            <h1>Pesquise por sua região para encontrar trabalhadores próximos</h1>
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
    </div>
  );
}
