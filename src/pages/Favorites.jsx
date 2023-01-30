import axios from "axios";
import { useState, useEffect } from "react";
import fav_svg from "../utils/favorites.svg";

import Like from "../components/icons/Like";

function FavoritesPage() {
  // fontawesome.library.add(faHeart);

  const [favorites, setFavorites] = useState(null);
  const [isFavorite, setIsFavorite] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const favorite = await axios.get("http://localhost:8080/api/meetups");
      const data = favorite.data.filter((curr) => curr.favorite);
      if (data.length !== 0) {
        setFavorites(data);
        setIsFavorite(true);
      } else {
        setFavorites(null);
      }
    };
    fetchData();
  }, [isFavorite]);

  function handleFavorite(meetup) {
    meetup.favorite = !meetup.favorite;
    axios.put("http://localhost:8080/api/meetups/" + meetup.id, meetup);
    setIsFavorite(false);
    // setIsDeleted(true);
    // console.log("Trach clicked of id:" + id);
  }

  if (favorites === null) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            width: "500px",
            height: "450px",
          }}
          alt="no-data"
          src={fav_svg}
        />
        <h4>Your favorite goes here</h4>
        <p style={{ opacity: "60%" }}>Like some meetup</p>
      </div>
    );
  }

  return (
    <div>
      <h1>All meetups</h1>
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
                      {/* <FontAwesomeIcon
                        className="font-icon"
                        color="red"
                        size="lg"
                        icon={favorites ? heartSolid : heartRegular}
                        onClick={() => handleFavorite(favorites)}
                      /> */}
                      <Like
                        liked={favorites.favorite}
                        size="lg"
                        onClick={() => handleFavorite(favorites)}
                      />
                    </span>
                    {/* <span>
                      <FontAwesomeIcon
                        className="font-icon"
                        icon="fa-regular fa-trash-can"
                        onClick={() => handleDelete(favorites.id)}
                      />
                    </span>
                    <span>
                      <FontAwesomeIcon
                        className="font-icon"
                        icon="fa-regular fa-pen-to-square"
                      />
                    </span> */}
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{favorites.title}</h5>
                  <p className="card-text">{favorites.address}</p>
                  {/* <button className="btn btn-primary">Add to favourites</button> */}
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
