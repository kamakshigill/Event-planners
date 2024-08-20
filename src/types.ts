

export interface User {
    id: string;
    email: string;
    name?: string;
    password: string;
    events: Event[];
  }
  

  export interface Event {
    id: string;
    title: string;
    date: string;
    description: string;
    imageUrl: string;
  }
  