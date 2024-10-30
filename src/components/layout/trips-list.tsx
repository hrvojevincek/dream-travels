import React from "react";
import TripCard from "./trip-card";
import { Trip } from "@/types";

const TripList = ({ trip }: { trip: Trip[] }) => {
  return (
    <div className="flex flex-col gap-4 mt-6">
      {trip.map((trip, index) => (
        <TripCard key={`${trip.id}-${index}`} trip={trip} />
      ))}
    </div>
  );
};

export default TripList;
