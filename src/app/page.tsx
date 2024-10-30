import { getTrips } from "@/actions.ts/getTrips";
import FilterTrip from "@/components/layout/filter-trip";
import TripList from "@/components/layout/trips-list";

export default async function Home() {
  const trip = await getTrips();

  return (
    <>
      <FilterTrip />
      <TripList trip={trip} />
    </>
  );
}
