import empty from "../assets/no-data.svg";

const NoMeetup = () => {
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
        src={empty}
      />
      <h4>No Meetups Found</h4>
      <p style={{ opacity: "60%" }}>Try adding some new meetup</p>
    </div>
  );
};

export default NoMeetup;
