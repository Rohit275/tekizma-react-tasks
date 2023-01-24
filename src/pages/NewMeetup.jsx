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
            console.log("printing in parent");
            console.log(val);

            navigate("/");
          }}
        />
      </Card>
    </section>
  );
}

export default NewMeetupsPage;
