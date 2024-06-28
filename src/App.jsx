import { useState } from 'react';
import restaurante from './assets/hashtaurante.webp';
import { Navegacao } from './Navegacao';
import './App.css';
import { pratosPrincipais, sobremesas, bebidas } from './cardapio';
import { ItemCardapio } from './itemCardapio';

function App() {
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSelecionada, setPaginaSelecionada] = useState(0);

  return (
    <>
      <img src={restaurante} alt='foto' className="capa"/>
      <Navegacao setPaginaSelecionada={setPaginaSelecionada}/>
      <div className="menu">

        {paginasMenu[paginaSelecionada].map(item => <ItemCardapio 
          nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem}/>)}
        
      </div>
    </>
  )
}

export default App
