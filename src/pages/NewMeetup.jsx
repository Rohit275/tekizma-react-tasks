import axios from "axios";
import { useNavigate } from "react-router-dom";

import MeetupsForm from "../components/Meetups/NewMeetupForm";
import Card from "../components/UI/Card";

function NewMeetupsPage() {
  const navigate = useNavigate();
  return (
    <section>
      <h1>Add New Meetup</h1>
      <Card>
        <MeetupsForm
          onAddMeetup={(val) => {
            axios.post("http://localhost:8080/api/meetups", val).then((res) => {
              console.log(res.status);
            });

            console.log("Added to db");
            console.log(val);

            navigate("/");
          }}
        />
      </Card>
    </section>
  );
}

export default NewMeetupsPage;
