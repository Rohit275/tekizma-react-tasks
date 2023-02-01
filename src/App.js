import { Route, Routes } from "react-router-dom";

import "./App.css";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

import Navbar from "./components/Navbar";
import MeetupItem from "./temp/Meetup/MeetupItems";
import UpdateMeetup from "./components/Meetups/UpdateMeetup/UpdateMeetupForm";

function App() {
  // handleDelete = async () => {}
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MeetupItem />} />
        <Route path="/all-meetups" element={<AllMeetupsPage />} />

        <Route path="/new-meetup" element={<NewMeetupsPage />} />

        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/update/:id" element={<UpdateMeetup />} />
      </Routes>
    </div>
  );
}

export default App;
