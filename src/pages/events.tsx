import { GetServerSideProps } from 'next';
import EventList from '../components/EventList';
import { Event } from '../types';

interface EventsPageProps {
  events: Event[];
}

const EventsPage: React.FC<EventsPageProps> = ({ events }) => {
  return (
    <div>
      <h1>Upcoming Events</h1>
      <EventList events={events} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch events from your database or API
  const events: Event[] = await fetch('https://api.example.com/events').then(res => res.json());

  return {
    props: {
      events,
    },
  };
};

export default EventsPage;
