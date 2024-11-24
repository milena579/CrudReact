import './App.css';
import { Card } from './componets/card/card';
import exemploImg from '../src/assets/camiseta.webp'; 
import { Menu } from './componets/menu/menu';

function App(){
  return (
   <>
    <Menu cliente="Fulano"></Menu>
    <Card imagem="exemploImg"  titulo="teste" preco="aas" stts="asdsa"></Card>
   </>
  );
}

export default App;
