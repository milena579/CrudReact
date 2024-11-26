import './App.css';
import { Card } from './componets/card/card';
import exemploImg from './assets/camiseta.webp'; 
import imgCart from './assets/carrinho.png'
import { Menu } from './componets/menu/menu';
import { Footer } from './componets/footer/footer';

function App(){
  
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

export default App;
