const DUMMY_DATA = [
  {
    id: "ADI#12DF",
    title: "This is first meetup",
    image:
      "https://s3-media2.fl.yelpcdn.com/bphoto/ag__aRhV-ZXa0M6WB8Udcw/o.jpg",
    address: "Meetupstreet 5, 12345, Meetup city",
    description: "This is the first meetup after a long time",
  },
  {
    id: "ARUN#12DF",
    title: "This is first meetup",
    image:
      "https://s3-media2.fl.yelpcdn.com/bphoto/ag__aRhV-ZXa0M6WB8Udcw/o.jpg",
    address: "Meetupstreet 5, 12345, Meetup city",
    description: "This is the first meetup after a long time",
  },
  {
    id: "SAM#12DF",
    title: "This is first meetup",
    image:
      "https://s3-media2.fl.yelpcdn.com/bphoto/ag__aRhV-ZXa0M6WB8Udcw/o.jpg",
    address: "Meetupstreet 5, 12345, Meetup city",
    description: "This is the first meetup after a long time",
  },
];

function AllMeetupsPage() {
  return (
    <div>
      <h1>All meetups</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",

          //   alignItems: "center",
          //   justifyContent: "center",
        }}
      >
        {DUMMY_DATA.map((meetup) => {
          return (
            <div
              key={meetup.id}
              className="card"
              style={{
                width: "20rem",
              }}
            >
              <div
                style={{
                  overflow: "hidden",
                }}
              >
                <img
                  className="card-img-top"
                  src={meetup.image}
                  alt="loc"
                  // style={{
                  //   height: "40px",
                  //   width: "50px",
                  // }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{meetup.title}</h5>
                <p className="card-text">{meetup.address}</p>
                <button className="btn btn-primary">Go somewhere</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllMeetupsPage;