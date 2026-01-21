import { Link } from "react-router-dom";
import NoImagePlaceholder from "../assets/No-image-placeholder.jpg/";

export default function FilmCard({ film }) {
  const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;
  return (
    <div className="card h-100">
      <img
        src={
          film.image !== null
            ? `${backendBaseUrl}`
            : NoImagePlaceholder
        }
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">
          {film.title} - {film.director}
        </h5>
        <p className="card-text">{film.abstract}</p>
        <Link to={`/movies/${film.id}`} className="btn btn-outline-primary">
          Vedi dettagli
        </Link>
      </div>
    </div>
  );
}