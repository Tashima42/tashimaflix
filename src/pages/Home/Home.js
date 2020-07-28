import React from 'react';
import Menu from '../../components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'

function Home() {
  return (
    <div style={{background: '#141414'}}>
        <Menu></Menu>
        <BannerMain 
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"A esquizofrenia de Maicon Küster chegando em níveis inimagináveis pela ciência moderna"}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        />
        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[1]}
        /> 
        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[2]}
        /> 
        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[3]}
        /> 
        <Footer />
    </div>
  );
}

export default Home;

/*
{
      "titulo": "",
      "link": "",
      "cor": "",
      "link_extra": {
        "text": "",
        "url": ""
      },
      "videos": [
        {
          "titulo": "",
          "url": ""
        },
        {
          "titulo": "",
          "url": ""
        },
        {
          "titulo": "",
          "url": ""
        },
        {
          "titulo": "",
          "url": ""
        },
        {
          "titulo": "",
          "url": ""
        },
        {
          "titulo": "",
          "url": ""
        },
        {
          "titulo": "",
          "url": ""
        }
      ]
    }
*/