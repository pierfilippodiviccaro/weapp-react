import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReviewCard from "../components/reviewCard.jsx";

export default function BookDetailPage() {
  const [film, setFilm] = useState({});
  const { id } = useParams();

  const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${backendBaseUrl}/movies${id}`)
      .then((resp) => {
        setFilm(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  function goBack(event) {
    event.preventDefault();
    navigate(-1);
  }

  return (
    <>
      <section
        className="py-5 mt-5 ms_page-banner d-flex align-items-center justify-content-center"
      >
        <div className="container text-center ">
          <h1 className="text-white">{film.title}</h1>
        </div>
      </section>
      <section className="container py-5 text-center">
        <a href="" onClick={goBack}>
          Ritorna alla pagina precedente
        </a>
        <h3 className="mt-3">Autore: {film.director}</h3>
        <p>{film.abstract}</p>
      </section>
      <section className="container">
        <h2>Recensioni:</h2>
        <div className="row row-cols-1 g-3">
          {film.reviews && film.reviews.length > 0 ? (
            film.reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))
          ) : (
            <p>Nessuna recensione presente</p>
          )}
        </div>
      </section>
    </>
  );
}