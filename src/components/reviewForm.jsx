
    export default function Review() {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nome</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    name="name"
                    placeholder="Il tuo nome"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="vote" className="form-label">Voto (1-5)</label>
                <input 
                    type="number" 
                    min="1" 
                    max="5" 
                    className="form-control" 
                    id="vote" 
                    name="vote"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="text" className="form-label">Recensione</label>
                <textarea 
                    className="form-control" 
                    id="text" 
                    name="text" 
                    rows="4"
                    placeholder="Cosa ne pensi del film?"
                />
            </div>
            <button type="submit" className="btn btn-primary">Invia Review</button>
        </form>
    );
}

