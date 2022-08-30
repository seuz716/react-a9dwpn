
//src > components > Pets.js
import React from "react";
import { Link } from "react-router-dom";
import { pets } from "../data";
const Pets = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Pets</h2>
        {pets.map((e) => (
          <h3 key={e.id}>
            <Link to={`${e.id}`}>{e.name }  </Link>
            {e.country_long}
          </h3>
        ))}
      </div>
    </>
  );
};
export default Pets;