import {BrowserRouter,Route,Routes} from "react-router-dom";
import AppLayout from "../layouts/appLayout.jsx"
function App() {
  const nomeApp = "films app";
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout nomeApp={nomeApp} />}>
            <Route element={<Home />} path="/" />
            <Route element={<BooksPage />} path="/films" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


