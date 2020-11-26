import '../styles/pages/CreatePokemon.css';

import { FiChevronLeft } from 'react-icons/fi';

import Header from '../components/Header';

export default function CreatePokemon() {

  function handleNavigationToHome() {
     // TODO
  }

  async function handleSubmit(event) {
   // TODO
  }

  return (
    <>
      <Header contentIcon={<FiChevronLeft />} onClick={handleNavigationToHome} />
      <div className="form-container">
        <h1>Novo Pokemon</h1>
        <form onSubmit={handleSubmit} >
          <input 
            type="text"
            placeholder="Nome"
          />
          <input 
            type="text"
            placeholder="Url da imagem "
          />
          <div>
          <input 
            type="text"
            placeholder="Ataque"
          />
          <input 
            type="text"
            placeholder="Defesa"
          />
          </div>
          <button type="submit" >
            Adicionar
          </button>
        </form>
      </div>
    </>
  )
}