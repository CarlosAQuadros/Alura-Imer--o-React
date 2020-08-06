import React from 'react';
import Menu from "../../components/menu";
import BannerMain from "../../components/BannerMain"
import dados_iniciais from "../../data/dados_iniciais.json"
import Carousel from "../../components/Carousel"
import Footer from "../../components/Footer"

function App() {
  return (
    <div style={{background:"#141414"}}>
      <Menu />
      <BannerMain
        videoTitle={dados_iniciais.categorias[0].videos[0].titulo}
        url={dados_iniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />
      <Carousel
        ignoreFirstVideo
        category={dados_iniciais.categorias[0]}

      />
      <Carousel
        ignoreFirstVideo
        category={dados_iniciais.categorias[1]}

      />
      <Carousel
        ignoreFirstVideo
        category={dados_iniciais.categorias[2]}

      />
      <Carousel
        ignoreFirstVideo
        category={dados_iniciais.categorias[3]}
      />
     <Carousel
        ignoreFirstVideo
        category={dados_iniciais.categorias[4]}
      />
      <Footer/>
    </div>
  );
}

export default App;
