import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/pages/home.css';

export default function Home() {

  async function loadPokemons() {
   // TODO
  }

  async function handleDelete(id) {
    // TODO
  }

  function handleNavigateToCreatePokemon() {
    // TODO
  }

  return (
    <>
      <Header contentText="Adicionar" onClick={handleNavigateToCreatePokemon} />
      <div className="container">
        <div className="pokemons-container"/>
      </div>
      {/* <Footer /> */}
    </>
  )
}
