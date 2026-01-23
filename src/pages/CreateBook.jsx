import { useState } from "react"


const initialData = {
    title: "",
    author: "",
    abstract: "",
    image: null
}

export default function Create() {
    const [formData, setFormData] = useState(initialData)

    function updateFormData(event) {
        const { name, value } = event.target;
        const files = event.target.files;
        
        if (files && files[0]) {
            const imageFile = files[0];
            const imageObj = URL.createObjectURL(imageFile);
            setFormData(prev => ({ ...prev, image: imageObj }));
            console.dir(files);
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    }

    return (
        <section className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <h1 className="text-center mb-4">Aggiungi un nuovo film</h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Titolo</label>
                            <input
                                id="title"
                                name="title"
                                type="text"
                                className="form-control"
                                value={formData.title}
                                onChange={updateFormData}
                                placeholder="Inserisci il titolo"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="author" className="form-label">Autore</label>
                            <input
                                id="author"
                                name="author"
                                type="text"
                                className="form-control"
                                value={formData.author}
                                onChange={updateFormData}
                                placeholder="Inserisci l'autore"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="abstract" className="form-label">descrizione del film</label>
                            <textarea
                                id="abstract"
                                name="abstract"
                                className="form-control"
                                rows="4"
                                value={formData.abstract}
                                onChange={updateFormData}
                                placeholder="Inserisci la descrizione"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Immagine</label>
                            <input
                                id="image"
                                name="image"
                                type="file"
                                className="form-control"
                                accept="image/*"
                                onChange={updateFormData}
                            />
                            {formData.image && (
                                <div className="mt-3">
                                    <img 
                                        src={formData.image} 
                                        alt="Preview" 
                                        className="img-thumbnail" 
                                        style={{ maxWidth: '200px', maxHeight: '200px' }} 
                                    />
                                </div>
                            )}
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Salva Libro
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
