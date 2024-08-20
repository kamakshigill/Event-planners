import React from 'react';
import Image from 'next/image';
import { Event } from '../types'; 
import styles from '../style/EventCard.module.css'; 

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className={styles.card}>
      <Image
        src={event.imageUrl} 
        alt={event.title}
        className={styles.image}
        width={500} 
        height={300} 
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
