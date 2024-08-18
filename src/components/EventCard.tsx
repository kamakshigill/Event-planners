import React from 'react';
import Image from 'next/image';
import { Event } from '../types'; // Adjust the path according to your project structure
import styles from '../styles/EventCard.module.css'; // Ensure you have this CSS file

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className={styles.card}>
      <Image
        src={event.imageUrl} // Ensure this path is correct or modify based on your data
        alt={event.title}
        className={styles.image}
        width={500} // Set appropriate width
        height={300} // Set appropriate height
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{event.title}</h3>
        <p className={styles.date}>{new Date(event.date).toLocaleDateString()}</p>
        <p className={styles.description}>{event.description}</p>
        <a href={`/events/${event.id}`} className={styles.button}>View Details</a>
      </div>
    </div>
  );
};

export default EventCard;
