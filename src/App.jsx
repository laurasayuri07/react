import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Carousel from './components/Carousel';

import strangerImg from './assets/stranger.jpg';
import breakingImg from './assets/breaking.jpg';
import witcherImg from './assets/witcher.jpg';
import lokiImg from './assets/loki.jpg';
import darkImg from './assets/dark.jpg';
import bImg from './assets/b.jpg';
import gosImg from './assets/gos.jpg';
import birdImg from './assets/bird.webp';
import onImg from './assets/on.jpg';
import eliteImg from './assets/elite.webp';
import laImg from './assets/la.webp';
import viImg from './assets/vi.webp';
import greImg from './assets/gre.webp';
import nuncaImg from './assets/nunca.jpg';
import youImg from './assets/you.jpg';
import visImg from './assets/vis.jpg';
import riImg from './assets/ri.webp';
import deImg from './assets/de.jpg';











function App() {
  const minhaLista = [
    { title: "Stranger Things", image: strangerImg },
    { title: "Breaking Bad", image: breakingImg },
    { title: "The Witcher", image: witcherImg },
    { title: "Loki", image: lokiImg },
    { title: "BirdBox", image: birdImg},
    { title: "On My Block", image: onImg},
    { title: "Elite", image: eliteImg},
    { title: "La Casa De Papel", image: laImg},
    { title: "Vikings", image: viImg}


  ];

  const continueAssistindo = [
    { title: "Dark", image: darkImg },
    { title: "Brooklyn 99", image: bImg },
    { title: "Gossip Girl", image: gosImg },
    { title: "Grey's Anatomy", image: greImg },
    { title: "Eu Nunca", image: nuncaImg },
    { title: "You", image: youImg },
    { title: "Vis a Vis", image: visImg },
    { title: "Riverdale", image: riImg },
    { title: "Dexter", image: deImg }
  ];

  return (
    <>
      <Header />
      <Hero
        title="The Walking Dead"
        description="É a última esperança da humanidade contra os mortos-vivos. Na guerra pela sobrevivência, haverá sangue."
        image="https://img.odcdn.com.br/wp-content/uploads/2023/02/Temporada-11-Walking-Dead-1920x1080.jpeg"
      />
      <Carousel title="Minha Lista" series={minhaLista} />
      <Carousel title="Continue Assistindo" series={continueAssistindo} />
      <Footer />
    </>
  );
}

export default App;
