import "./App.css";
// import Modal from "./components/Modal/Modal";
import Todo from "./components/Todo/Todo";

import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductList";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="m-2">
              <h1
                style={{
                  display: "flex",
                  marginBottom: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                My Todo
              </h1>
              <Todo title="Buy sugar" content="Buy 1 kg of sugar from shop" />
              <Todo title="Meet John" content="Meet at 5pm" />
              <Todo title="Take meds" content="Take meds at 10pm" />
            </div>
          }
        />
        <Route path="/all-meetups" element={<AllMeetupsPage />} />

        <Route path="/new-meetup" element={<NewMeetupsPage />} />

        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
