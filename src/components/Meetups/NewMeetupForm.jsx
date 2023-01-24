import { useRef } from "react";
import classes from "./NewMeetupForm.module.css";

export default function MeetupsForm({ onAddMeetup }) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function handleSubmit(event) {
    // console.log("submit clicked");
    event.preventDefault();
    const title = titleInputRef.current.value;
    const image = imageInputRef.current.value;
    const address = addressInputRef.current.value;
    const description = descriptionInputRef.current.value;

    const meetupData = { title, image, address, description };

    // console.log(meetupData);
    onAddMeetup(meetupData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Meetup Title</label>
        <input
          type="text"
          required
          id="title"
          className="form-control"
          ref={titleInputRef}
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Meetup Image</label>
        <input
          type="url"
          required
          id="image"
          className="form-control"
          ref={imageInputRef}
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          type="txt"
          required
          id="address"
          className="form-control"
          ref={addressInputRef}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          required
          rows="5"
          id="description"
          className="form-control"
          ref={descriptionInputRef}
        ></textarea>
      </div>
      <div className={classes.actions}>
        <button>Add Meetup</button>
      </div>
    </form>
  );
}
