import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMeetup, updateMeetup } from "../../../services/api";
import Elevator from "../../UI/elevator/Elevator";

import classes from "./UpdateMeetupForm.module.css";

export default function UpdateMeetup() {
  const { id } = useParams();
  const [meet, setMeet] = useState({});
  const navigate = useNavigate();

  // const titleInputRef = useRef();
  // const imageInputRef = useRef();
  // const addressInputRef = useRef();
  // const descriptionInputRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMeetup(id);
      if (res.error) {
        console.log(res.error);
      } else {
        const meet = res.data;
        // console.log(meet.data);
        // setValue(meet.data);
        setMeet(meet.data);
      }
    };
    fetchData();
  }, []);

  function handleChange({ currentTarget: input }) {
    const newMeet = { ...meet };
    newMeet[input.name] = input.value;
    setMeet(newMeet);
  }

  const updateMeet = async (meetupData) => {
    const res = await updateMeetup(meetupData);
    if (res.error) {
      console.log(res.error);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    // const title = titleInputRef.current.value;
    // const image = imageInputRef.current.value;
    // const address = addressInputRef.current.value;
    // const description = descriptionInputRef.current.value;

    // const meetupData = { title, image, address, description };
    // console.log(meetupData);
    // console.log(meet);

    updateMeet(meet);
    console.log("Meet updated");
    navigate("/all-meetups");
  }

  return (
    <Elevator>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            required
            id="title"
            name="title"
            value={meet.title}
            onChange={handleChange}
            className="form-control"
            // ref={titleInputRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            required
            id="image"
            name="image"
            value={meet.image}
            onChange={handleChange}
            className="form-control"
            // ref={imageInputRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="txt"
            required
            id="address"
            name="address"
            value={meet.address}
            onChange={handleChange}
            className="form-control"
            // ref={addressInputRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            required
            rows="5"
            id="description"
            name="description"
            value={meet.description}
            onChange={handleChange}
            className="form-control"
            // ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Update</button>
        </div>
      </form>
    </Elevator>
  );
}
