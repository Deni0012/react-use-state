// Importazioni standard in APP
import { useState } from 'react'
import './App.css'
import languages from './data/languages'
import Buttons from './components/button';
import Main from './components/Main';

// Creazione della funzione App 
function App() {
  const [activeLanguages, setActiveLanguages] = useState(0)
  const currentLanguages = languages.find(languages => languages.id === activeLanguages);

  return (
    <>
      <div className="container-central">
        <div className="container-languages">
          <h1>Learn Web development</h1>

          {/* // Buttons e Main collegati richiamando le funzioni */}
          <Buttons languages={languages} activeLanguages={activeLanguages} setActiveLanguages={setActiveLanguages} />
          <Main currentLanguages={currentLanguages} />

        </div>
      </div >

    </>
  )
}

// Esportazione di App
export default App;
