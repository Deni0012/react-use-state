// Creazione della funzione Button con attivazione e selezione di linguaggio 
function Buttons({ languages, activeLanguages, setActiveLanguages }) {
    return (
        <div className="buttons">
            {languages.map((languages) => (
                <button
                    key={languages.id}
                    className={`button ${activeLanguages === languages.id ? 'active' : null}`}
                    onClick={() => setActiveLanguages(languages.id)} >
                    {languages.title}
                </button>
            ))}

        </div>
    )
}

// Esportazione di Buttons
export default Buttons;