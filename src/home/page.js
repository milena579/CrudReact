// import './App.css';
import { Card } from '../components/card/card';
import exemploImg from '../assets/camiseta.webp'; 
import { Menu } from '../components/menu/menu';
import { Footer } from '../components/footer/footer';

function Home(){
  
  return (
   <>
      <Menu cliente="Fulano"></Menu>
      <div className='divGeral'>
        <Card imagem={`${exemploImg}`}  titulo="teste" preco="aas" stts="asdsa"></Card>
        <Card imagem={`${exemploImg}`}  titulo="teste" preco="aas" stts="asdsa"></Card>
        <Card imagem={`${exemploImg}`}  titulo="teste" preco="aas" stts="asdsa"></Card>
        <Card imagem={`${exemploImg}`}  titulo="teste" preco="aas" stts="asdsa"></Card>
      </div>
      <Footer></Footer>
   </>
  );
}

export default Home;
