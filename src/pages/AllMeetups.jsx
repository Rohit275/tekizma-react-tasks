import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import "./AllMeetups.css";

import Like from "../components/icons/Like";
import Delete from "../components/icons/Delete";
import Edit from "../components/icons/Edit";
import NoMeetup from "../utils/NoMeetups";

import { getMeetups, deleteMeetup, updateMeetup } from "../services/api";

function AllMeetupsPage() {
  const [meetups, setMeetups] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMeetups();
      if (res.error) {
        console.log(res.error);
      } else {
        const meetup = res.data;
        if (meetup.data.length !== 0) {
          setMeetups(meetup.data);
          setIsDeleted(false);
        } else {
          setMeetups(null);
        }
      }
    };
    fetchData();
  }, [isDeleted]);

  async function handleDelete(id) {
    const res = await deleteMeetup(id);
    if (res.error) {
      console.log(res.error);
    } else {
      setIsDeleted(true);
    }
  }

  async function handleFavorite(meetup) {
    const index = meetups.indexOf(meetup);
    const target = { ...meetups[index] };
    target.favorite = !target.favorite;

    const res = await updateMeetup(target);
    if (res.error) {
      console.log(res.error);
    } else {
      const newMeetups = [...meetups];
      newMeetups[index] = target;
      setMeetups(newMeetups);
    }
  }

  function handleUpdate(meetup) {
    // console.log(meetup);

    // <Link to={`/update/${meetup.id}`} />;
    navigate(`/update/${meetup.id}`);
  }

  if (!meetups) {
    return <NoMeetup />;
  }

  return (
    <div>
      <h1>All meetups</h1>
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
                    {/* <br /> */}
                    <span>
                      <Delete
                        size="lg"
                        onClick={() => handleDelete(meetup.id)}
                      />
                    </span>
                    {/* <br /> */}
                    <span>
                      <Edit size="lg" onClick={() => handleUpdate(meetup)} />
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{meetup.title}'s Meetup</h5>
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
