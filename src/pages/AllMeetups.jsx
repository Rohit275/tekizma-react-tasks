import axios from "axios";
import { useState, useEffect } from "react";

import empty from "../utils/no-data.svg";
import "./AllMeetups.css";

import Like from "../components/icons/Like";
import Delete from "../components/icons/Delete";
import Edit from "../components/icons/Edit";

function AllMeetupsPage() {
  const [meetups, setMeetups] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const meetup = await axios.get("http://localhost:8080/api/meetups");
      if (meetup.data.length !== 0) {
        setMeetups(meetup.data);
        setIsDeleted(false);
      } else {
        setMeetups(null);
      }
    };

    fetchData();
  }, [isDeleted]);

  async function handleDelete(id) {
    await axios.delete("http://localhost:8080/api/meetups/" + id);
    setIsDeleted(true);
    // console.log("Trach clicked of id:" + id);
  }

  async function handleFavorite(meetup) {
    const index = meetups.indexOf(meetup);
    const target = { ...meetups[index] };
    target.favorite = !target.favorite;

    await axios.put("http://localhost:8080/api/meetups/" + target.id, target);

    const newMeetups = [...meetups];
    newMeetups[index] = target;
    // console.log(newMeetups[index]);
    setMeetups(newMeetups);
  }

  if (!meetups) {
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
        {meetups &&
          meetups.map((meetup) => {
            return (
              <div key={meetup.id} className="card">
                <div className="image">
                  <img className="card-img-top" src={meetup.image} alt="loc" />

                  <div className="icon__overlay ">
                    <span>
                      <Like
                        liked={meetup.favorite}
                        size="lg"
                        onClick={() => handleFavorite(meetup)}
                      />
                    </span>
                    <span>
                      <Delete
                        size="lg"
                        onClick={() => handleDelete(meetup.id)}
                      />
                    </span>
                    <span>
                      <Edit
                        size="lg"
                        onClick={() => console.log("clicked edit")}
                      />
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{meetup.title}</h5>
                  <p className="card-text">{meetup.address}</p>
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

export default AllMeetupsPage;
