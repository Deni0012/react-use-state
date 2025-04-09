function Main({ currentLanguages }) {
    return (
        <div className="contentuto-container">
            <div className="main-contenuto active">
                <h2>{currentLanguages && currentLanguages.title}</h2>
                <p>{currentLanguages ? currentLanguages.description : "Nessun linguaggio selezionato"}</p>
            </div>
        </div>
    )
}

export default Main;