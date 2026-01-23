import {BrowserRouter,Route,Routes} from "react-router-dom";
import AppLayout from "../layouts/appLayout.jsx"
import Home from "./pages/home.jsx"
import FilmsPage from "./pages/filmPage.jsx";
import FilmDetail from "./pages/filmDetail.jsx";
import Create from "./pages/CreateBook.jsx";
function App() {
  const nomeApp = "APP FILM MIAO";
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout nomeApp={nomeApp} />}>
            <Route element={<Home />} path="/" />
            <Route element={<FilmsPage />} path="films" />
            <Route element={<Create/>} path="create"/>
            <Route element={<FilmDetail/>}path="films/:id"/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


