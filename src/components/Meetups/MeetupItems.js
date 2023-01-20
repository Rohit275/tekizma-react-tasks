import Card from "../UI/Card";

function MeetupItem(props) {
  return (
    <div>
      <Card>
        <div className="image">
          <img src="" alt="img-dt" />
        </div>
        <div className="content">
          <h3>Title 1</h3>
          <address>123, meetup street, Meetup city</address>
          <p>
            description of the desciption developed and created by the
            description
          </p>
        </div>
        {/* <div className="actions"> */}
        <button
          type="button"
          style={{
            float: "right",
          }}
        >
          To favourites
        </button>
        {/* </div> */}
      </Card>
      <Card>
        <div className="image">
          <img src="" alt="img-dt" />
        </div>
        <div className="content">
          <h3>Title 1</h3>
          <address>123, meetup street, Meetup city</address>
          <p>
            description of the desciption developed and created by the
            description
          </p>
        </div>
        {/* <div className="actions"> */}
        <button
          type="button"
          style={{
            float: "right",
          }}
        >
          To favourites
        </button>
        {/* </div> */}
      </Card>
    </div>
  );
}

export default MeetupItem;
