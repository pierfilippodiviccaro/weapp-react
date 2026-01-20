import axios from "axios";
import { useEffect, useState } from "react";

export default function FilmsPage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    console.log("Chiamo API");
    axios
      .get("http://localhost:6700/api/movies")
      .then((resp) => {
        setFilms(resp.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <section className="py-5 mt-5 container">
        <h1>Lista di tutti i film</h1>
        <ul>
          {films.map((film) => (
            <li key={film.id}>{film.title}</li>
          ))}
        </ul>
      </section>
    </>
  );
}