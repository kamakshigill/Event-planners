import React from 'react';
import EventCard from './EventCard';
import { Event } from '../types'; 
import styles from '../style/EventList.module.css'; 

interface EventListProps {
  events: Event[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <div className={styles.container}>
      {events.length > 0 ? (
        events.map(event => <EventCard key={event.id} event={event} />)
      ) : (
        <p>No events found.</p>
      )}
    </div>
  );
};

export default EventList;
