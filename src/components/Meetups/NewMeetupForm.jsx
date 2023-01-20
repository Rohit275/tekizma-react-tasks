import classes from "./NewMeetupForm.module.css";

export default function MeetupsForm() {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="title">Meetup Title</label>
        <input type="text" required id="title" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="image">Meetup Image</label>
        <input type="url" required id="image" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input type="txt" required id="address" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          required
          rows="5"
          id="description"
          className="form-control"
        ></textarea>
      </div>
      <div className={classes.actions}>
        <button>Add Meetup</button>
      </div>
    </form>
  );
}
