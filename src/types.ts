export interface Day {
  day: number;
  description: string;
  location: string;
}

export interface Trip {
  description: string;
  id: number;
  itinerary: Day[];
  photo_url: string;
  status: "todo" | "done";
  title: string;
}
