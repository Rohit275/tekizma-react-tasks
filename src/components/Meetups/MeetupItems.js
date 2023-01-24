import Card from "../UI/Card";
import "./MeetupItem.css";

const DUMMY_DATA = [
  {
    id: "ADI#12DF",
    title: "John",
    image:
      "https://s3-media2.fl.yelpcdn.com/bphoto/ag__aRhV-ZXa0M6WB8Udcw/o.jpg",
    address: "Meetupstreet 5, 12345, Meetup city",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "ARUN#12DF",
    title: "Adam",
    image:
      "https://s3-media2.fl.yelpcdn.com/bphoto/ag__aRhV-ZXa0M6WB8Udcw/o.jpg",
    address: "Meetupstreet 5, 12345, Meetup city",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "SAM#12DF",
    title: "Eva",
    image:
      "https://s3-media2.fl.yelpcdn.com/bphoto/ag__aRhV-ZXa0M6WB8Udcw/o.jpg",
    address: "Meetupstreet 5, 12345, Meetup city",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

function MeetupItem(props) {
  return (
    <>
      {DUMMY_DATA.map((data) => {
        return (
          <Card key={data.id}>
            <div className="box">
              <div className="row">
                <div className="cell" style={{ width: "30%" }}>
                  <img className="banner" src={data.image} alt="img-dt" />
                </div>
                <div className="cell" style={{ width: "60%" }}>
                  <h3>{data.title}'s Meet</h3>
                  <address>{data.address}</address>
                  <p>{data.description}</p>
                </div>
              </div>
              <button
                type="button"
                style={{
                  float: "right",
                }}
              >
                To favourites
              </button>
            </div>
          </Card>
        );
      })}
    </>
  );
}

export default MeetupItem;
