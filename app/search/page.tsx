import SearchBox from "./_component/SearchBox";
import RentListing from "./_component/RentListing";
import getRentListings from "@/actions/getRentListings";

export default async function SearchPage() {
  const listing = await getRentListings({ locationId: 10 });
  
  return (
    <div>
      <SearchBox />
      <RentListing listing={listing} />
    </div>
  );
}
