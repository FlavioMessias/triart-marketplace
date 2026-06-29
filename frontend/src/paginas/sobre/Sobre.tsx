import React from 'react'
import './Sobre.css';

function Sobre() {
  return (
    
    // <h2>cursos de artesanato e eventos culturais</h2>
    // <h2>CUIDAR DAS PESSOAS!
    // É dar acesso à arte, conhecimento, dignidade, alegria e a perspectiva de uma vida melhor, mais leve e consciente.</h2>
    // <h3>Venha para a Arttere
    // Arttere é um espaço gratuito criado para todos os profissionais envolvidos no amplo universo das artes, possibilitando que as pessoas exponham seus trabalhos e perfis livremente.
    
    // É também um centralizador de atividades culturais com agenda de eventos, informações sobre museus, galerias e fundações e oportunidades no mundo artístico como concursos, salões, exposições, leilões, entre outros.</h3>
  
    /* Inserir um campo para falar sobre o objetivo */
<body>
<section className='nossaMissao'>

<h1 className='h1textPlace'>Tri Art - A Tribo da COMUNIDADE</h1>

  <div className='logoSobre'>
    <img src="https://i.imgur.com/UDBIW93.png" alt="Tribo Artesão" />
  </div>

<div className='TextLogo'>



  <h2 className='h2nossaMissao'>NOSSA MISSÃO:</h2>

  <div className='textlogo'>
  <h6>
    O E-commerce Tri Art é uma organização sem fins lucrativos
    para o desenvolvimento cultural e artístico.

    A plataforma é um espaço gratuito criado para todos
    os profissionais envolvidos no amplo universo das artes, possibilitando
    que as pessoas exponham seus trabalhos e perfis livremente.

    É também um centralizador de atividades culturais, 
    informações sobre museus, galerias e fundações e oportunidades no mundo artístico como concursos, 
    salões, exposições, leilões, entre outros.

    Se você quer expor suas obras e trabalhos, divulgar sua galeria ou acompanhar o universo 
    das artes CADASTRE-SE e seja também parte nosso TIME.
    </h6>
  </div>
  </div>
  <div className='textPlace'>
  <h2 className='h2titleCarousel'>Conheça os espaços de arte gratuitos</h2>
  <h4 className='h6textPlace'>Acesse as informações de galerias de arte contemporânea, museus e fundações de arte</h4>
  </div>


  <main className='carousel-main'> 
<div className="container">
  <div className="carousel">
    <div className="carousel__face"><span> <a className='linkCarousel' href="https://pinacoteca.org.br/">Pinacoteca</a></span></div>
    <div className="carousel__face"><span> <a className='linkCarousel' href="https://masp.org.br/">Masp</a></span></div>
    <div className="carousel__face"><span> <a className='linkCarousel' href="https://www.redbull.com/br-pt/collections/red-bull-station">Red Bull Station</a></span></div>
    <div className="carousel__face"><span> <a className='linkCarousel' href="http://www.acamls.org.br/">Lasar Segal</a></span></div>
    <div className="carousel__face"><span> <a className='linkCarousel' href="https://ccbb.com.br/">CCBB</a></span></div>
    <div className="carousel__face"><span> <a className='linkCarousel' href="https://www.sescsp.org.br/">Sesc 24 de maio</a></span></div>
    <div className="carousel__face"><span> <a className='linkCarousel' href="https://www.farolsantander.com.br/#/">Farol Santander</a></span></div>
    <div className="carousel__face"><span> <a className='linkCarousel' href="https://www.archdaily.com.br/br/786322/porto-seguro-cultural-center-sao-paulo-arquitetura">Espaço Porto Seguro</a></span></div>
    <div className="carousel__face"><span> <a className='linkCarousel' href="https://www.prefeitura.sp.gov.br/cidade/secretarias/cultura/bma/">Biblioteca Mário de Andrade</a></span></div>
  </div>
</div>
</main>


{/* ADICIONANDO CARDS DE CURSOS */}

<section className='cardCursos'>
<div className="band">
<div className="item-2">
          <a href="https://webdesign.tutsplus.com/articles/how-to-conduct-remote-usability-testing--cms-27045" className="card">
            <div className="thumb" style={{backgroundImage: `url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/users-2.png")` }}></div>
            <article className='articleCard'>
              <h1 className='h1Card'>How to Conduct Remote Usability Testing</h1>
              <span>Harry Brignull</span>
            </article>
          </a>
    </div>
    <div className="item-3">
      <a href="https://design.tutsplus.com/articles/envato-tuts-community-challenge-created-by-you-july-edition--cms-26724" className="card">
        <div className="thumb" style={{backgroundImage: `url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/users-2.png")` }}></div>
        <article className='articleCard'>
          <h1 className='h1Card'>Created by You, July Edition</h1>
          <p className='h1Card'>Welcome to our monthly feature of fantastic tutorial results created by you, the Envato Tuts+ community! </p>
          <span>Melody Nieves</span>
        </article>
      </a>
    </div>
    <div className="item-4">
          <a href="https://webdesign.tutsplus.com/tutorials/how-to-code-a-scrolling-alien-lander-website--cms-26826" className="card">
            <div className="thumb" style={{backgroundImage: `url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/users-2.png")` }}></div>
            <article className='articleCard'>
              <h1 className='h1Card'>How to Code a Scrolling “Alien Lander” Website</h1>
              <p className='pCard'>Well be putting things together so that as you scroll down from the top of the page youll see an “Alien Lander” making its way to touch down.</p>
              <span>Kezz Bracey</span>
            </article>
          </a>
    </div>
    <div className="item-5">
          <a href="https://design.tutsplus.com/tutorials/stranger-things-inspired-text-effect--cms-27139" className="card">
            <div className="thumb" style={{backgroundImage: `url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/users-2.png")` }}></div>
            <article className='articleCard'>
              <h1 className='h1Card'>How to Create a “Stranger Things” Text Effect in Adobe Photoshop</h1>
              <span>Rose</span>
            </article>
          </a>
    </div>
  </div> 
</section>
</section>
</body>

 


  )
}

export default Sobre