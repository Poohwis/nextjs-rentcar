import { Dispatch, SetStateAction } from "react";
import FilterPopover from "./FilterPopover";
import { FilterState } from "./RentListing";

interface FilterSectionProps {
  filter : FilterState
  setFilter: Dispatch<SetStateAction<FilterState>>;
}
export interface Filter {
  id: string;
  title: string;
  options: string[];
}
export default function FilterSection({ setFilter, filter }: FilterSectionProps) {
  const filterOptions: Filter[] = [
    { id: "gearShift", title: "Gearshift", options: ["Auto", "Manual"] },
    {
      id: "passenger",
      title: "Passenger",
      options: ["4", "5", "6", "7"],
    },
    { id: "bags", title: "Bags", options: ["1", "2", "3", "4"] },
    {
      id: "fuel",
      title: "Fuel",
      options: ["Diesel", "Gasoline", "Electric"],
    },
  ];

  return (
    <div className="my-2 flex flex-row gap-x-2 ">
      {filterOptions.map((item, index) => (
        <FilterPopover key={index} selection={item} setFilter={setFilter} filter={filter} />
      ))}
    </div>
  );
}
