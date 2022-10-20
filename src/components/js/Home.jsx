import "../css/Home.css";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";

export default function Home() {
  const [sla, setSla] = useState('')
  console.log(sla)

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
              onChange={setSla}
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
