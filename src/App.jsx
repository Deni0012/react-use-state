import { useState } from 'react'
import './App.css'
import languages from './data/languages'

function App() {
  const [activeLanguages, setActiveLanguages] = useState(0)
  const currentLanguages = languages.find(languages => languages.id === activeLanguages);

  return (
    <>

    </>
  )
}

export default App
