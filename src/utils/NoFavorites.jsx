import fav_svg from "../assets/favorites.svg";

const NoFavorites = () => {
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
};

export default NoFavorites;
