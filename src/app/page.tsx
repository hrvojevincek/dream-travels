import Header from "@/components/layout/header";
import SearchTrip from "@/components/layout/search-trip";
import FilterTrip from "@/components/layout/filter-trip";
import TripList from "@/components/layout/trips-list";

export default function Home() {
  return (
    <>
      <Header />
      <SearchTrip />
      <FilterTrip />
      <TripList />
    </>
  );
}
