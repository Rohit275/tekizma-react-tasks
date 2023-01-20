import MeetupsForm from "../components/Meetups/NewMeetupForm";
import Card from "../components/UI/Card";

function NewMeetupsPage() {
  return (
    <section>
      <h1>Add New Meetup</h1>
      <Card>
        <MeetupsForm />
      </Card>
    </section>
  );
}

export default NewMeetupsPage;
