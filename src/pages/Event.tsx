import { useState, useEffect } from 'react';
import axios from 'axios';

// Define the Event interface
interface Event {
  id: number;
  title: string;
  description: string;
  date: string; // or Date if you are handling dates as Date objects
}

const Events = () => {
  // Use the Event interface to type your state
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        // Explicitly type the response from axios.get
        const response = await axios.get<Event[]>('/api/events');
        setEvents(response.data); // Now TypeScript knows response.data is Event[]
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    }
    fetchEvents();
  }, []);

  const registerForEvent = async (eventId: number) => {
    try {
      await axios.post('/api/register', {
        userId: 1, // Replace with dynamic userId
        eventId,
      });
      alert('Successfully registered for the event!');
    } catch (error) {
      console.error('Error registering for event:', error);
    }
  };

  return (
    <div>
      <h1>Available Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>{new Date(event.date).toLocaleDateString()}</p>
            <button onClick={() => registerForEvent(event.id)}>Register</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
