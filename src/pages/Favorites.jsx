import { useState, useEffect } from "react";

import Like from "../components/icons/Like";
import NoFavorites from "../utils/NoFavorites";

import { getMeetups, updateMeetup } from "../services/api";

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [favorite, toggleFavorite] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMeetups();

      if (res.error) {
        console.log(res.error);
      } else {
        const target = res.data;
        const favorite = target.data.filter((curr) => curr.favorite);
        if (favorite.length !== 0) {
          setFavorites(favorite);
          toggleFavorite(!favorite);
        } else {
          setFavorites(null);
        }
      }
    };
    fetchData();
  }, [favorite]);

  async function handleFavorite(meetup) {
    meetup.favorite = !meetup.favorite;
    const res = await updateMeetup(meetup);
    if (res.error) {
      console.log(res.error);
    } else {
      toggleFavorite(!favorite);
    }
  }

  if (!favorites) {
    return <NoFavorites />;
  }

  return (
    <div>
      <h1>Your Favorites</h1>
      {/* <div className="card-group"> */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {favorites &&
          favorites.map((favorites) => {
            return (
              <div key={favorites.id} className="card">
                <div className="image">
                  <img
                    className="card-img-top"
                    src={favorites.image}
                    alt="loc"
                  />

                  <div className="icon__overlay ">
                    <span>
                      <Like
                        liked={favorites.favorite}
                        size="lg"
                        onClick={() => handleFavorite(favorites)}
                      />
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{favorites.title}'s Meetup</h5>
                  <p className="card-text">{favorites.address}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default FavoritesPage;
