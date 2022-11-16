import React, { useMemo, useState } from "react";
import { getHeroesByName } from "../../filters/getHeroesByName";
import { useForm } from "../../hooks/useForm";
import HeroCard from "../hero/HeroCard";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";

const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const heroesFilter = useMemo(() => getHeroesByName(q), [q]);

  const { searchText } = formValues;

  // const heroesFilter = getHeroesByName(q); lo cambiamos porque sino de esta manera, se renderiza
  // cada vez que el

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <div
      style={{
        background: "rgb(255,255,255)",
        background:
          "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 0%)",
        borderRadius: "50px",
        padding: "20px",
      }}
    >
      <h1>Busquedas</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar un heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <button className="btn btn-outline-primary mt-4" type="submit">
              Buscar
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr style={{ backgroundColor: "white" }} />

          {q === "" ? (
            <div className="alert alert-info">Buscar un heroe</div>
          ) : (
            heroesFilter.length === 0 && (
              <div className="alert alert-danger"> No hay resultados: {q}</div>
            )
          )}
          <div className="row  rows-cols-1 row-cols-md-1 g-1 p-4">
            {heroesFilter.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
