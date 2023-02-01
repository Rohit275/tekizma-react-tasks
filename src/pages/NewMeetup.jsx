import axios from "axios";
import { useNavigate } from "react-router-dom";

import MeetupsForm from "../components/Meetups/NewMeetup/NewMeetupForm";
import Elevator from "../components/UI/elevator/Elevator";

function NewMeetupsPage() {
  const navigate = useNavigate();
  return (
    <section>
      <h1>Add New Meetup</h1>
      <Elevator>
        <MeetupsForm
          onAddMeetup={async (val) => {
            await axios
              .post("http://localhost:8080/api/meetups", val)
              .then((res) => {
                console.log(res.status);
              });

            // console.log("Added to db");
            // console.log(val);

            navigate("/");
          }}
        />
      </Elevator>
    </section>
  );
}

export default NewMeetupsPage;
