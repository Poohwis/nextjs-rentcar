import axios from "axios";

interface IRentingListIParams {
  id? : number
  type? :string
  transmission? : string
  brand? : string
  model? : string
  locationId? : number
  fuel? : string
  price? : number
}
export default async function getRentListings(params : IRentingListIParams) {
  try {
    const rentListing = axios
      .get("https://66040cb32393662c31d0789c.mockapi.io/api/v1/rentlisting")
      .then((res) => res.data);
    // console.log(rentListing)

    return rentListing;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
