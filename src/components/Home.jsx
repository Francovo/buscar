import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export const Home = ({ personajes }) => {
    console.log(personajes);
  return (
    <div>
      {personajes.map((perso) => (
        <div key={perso.id} className={styles.info_personajes}>
          <h1> {perso.name} </h1>
          <Link to={`/perso/${perso.id}`}>
            <img src={perso.image} alt=""/>
            Más...
          </Link>
        </div>
      ))}
    </div>
  );
};


