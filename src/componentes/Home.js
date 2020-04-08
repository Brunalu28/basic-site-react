import React from "react";
import "./styles.css";
import Link from "react-router-dom";
import FiPower from "react-icons/fi";

export default function Home() {
  return (
    <div className="Home">
      <header>
        <span>Bem Vinda </span>
        <Link className="button" to="./componentes/Info">
          Olhar Informações
        </Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Seja Bem Vindo! Aqui você vai saber um pouco sobre Luiza Bruna.</h1>
      <h2>Portifólio com alguns dos meus projetos.</h2>
    </div>
  );
}
