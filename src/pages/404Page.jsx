export default function NotFoundPage(){
    return (
        <div className="text-center mt-5">
            <h1>404 - Pagina non Trovata</h1>
            <p>La pagina che stai cercando non esiste.</p>
            <button className="btn btn-primary" onClick={() => window.location.href = '/'}Torna alla Home></button>

        </div>
    );


}