import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";


function Home() {
  return (
    <main className="mainHome">    
      <section>
      <div>
        <h2 className="MsgEmpreendedor">
          Conectando o empreendedor rural com o mundo!
        </h2>
        <Link to="/produtos">
          <button className="borderCompras">Às compras!</button>
        </Link>
        <Link to="/produtos">

          {/* colocar um HOVER PARA ALTERAR PARA PRETO QUANDO CLICAR */}
          <img
            src="https://i.imgur.com/AcggpOm.png"
            alt="Logo"
            className="bgLogo"
          />
        </Link>
      </div>
      <div>
        <img
          src="https://i.imgur.com/nyLJUod.jpg"
          alt="Imagem de Fundo"
          className="bgHome"
        />
      </div>
    </section>
    {/* Mensagem sobre o projeto */}
    <section className="bg-carousel">
      <h1>AQUI VOU INVENTAR ALGUMA MODA SOBRE O PROJETO SER PARA A COMUNIDADE</h1>
    </section>

<section>
<div className="carousel-wrapper">
  <div className="carousel-container">
    <div className="carouselHome">
      <div className="image-one"></div>
      <div className="image-two"></div>
      <div className="image-three"></div>
    </div>
  </div>
</div>
</section>








  </main>


  );
}

export default Home;
