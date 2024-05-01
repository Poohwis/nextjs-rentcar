"use client";
import { TbAutomaticGearbox, TbManualGearbox } from "react-icons/tb";
import RentListingBox from "./RentListingBox";
import FilterSection from "./FilterSection";
import { useEffect, useState } from "react";
import { IoMdSkipForward } from "react-icons/io";

interface Listing {
  createdAt: string;
  brand: string;
  model: string;
  availableFrom: string;
  locationId: number;
  price: string;
  type: string;
  fuel: string;
  isAuto: boolean;
  id: string;
  passengerCapacity: number;
  baggageCapacity: number;
}

interface RentListingProps {
  listing?: Listing[];
}

export interface FilterState {
  gearShift: string[];
  passenger: string[];
  bags: string[];
  fuel: string[];
}
export default function RentListing({ listing }: RentListingProps) {
  const [filter, setFilter] = useState<FilterState>({
    gearShift: [],
    passenger: [],
    bags: [],
    fuel: [],
  });

  //limitation from mockapi,and to keep it simple use this function and pre-format data for demonstate instead
  function mapNumberToRange(number: number, outMin: number, outMax: number) {
    const ratio = (number === 0 ? 1 : number) / 100;
    const diff = outMax - outMin;
    const offset = Math.round(diff * ratio);
    return outMin + offset;
  }

  useEffect(()=>{
    console.log(filter)
  },[filter])

  const categoryGroup = {
    cars: ["Sedan", "Coupe", "Convertible", "Hatchback"],
    vans: ["Cargo Van", "Passenger Van", "Minivan"],
    trucks: ["Extended Cab Pickup", "Crew Cab Pickup"],
    suvs: ["Wagon", "SUV"],
    evs: [""],
  };

    
    const filterItem = (item: Listing): boolean => {
      const passenger = mapNumberToRange(item.passengerCapacity, 4,7)
      const bags = mapNumberToRange(item.baggageCapacity, 1,4)
    return (
      (filter.gearShift.length === 0 || filter.gearShift.includes(item.isAuto ? "Auto" : "Manual")) &&
      (filter.passenger.length === 0 || filter.passenger.includes(passenger.toString())) &&
      (filter.bags.length === 0 || filter.bags.includes(bags.toString())) &&
      (filter.fuel.length === 0 || filter.fuel.includes(item.fuel))
    );
  };

  const filteredListing = listing?.filter(filterItem)

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-5xl h-screen ">
        <div className="px-2 mt-4">
          <h2 className="font-bold text-lg j">Search result</h2>
          <FilterSection setFilter={setFilter} filter={filter} />
          <div className="sm:grid sm:grid-cols-3 flex flex-col gap-x-4 gap-y-4 mt-4">
            {filteredListing?.map((item) => (
              <RentListingBox
                key={item.id}
                brand={item.brand}
                model={item.model}
                type={item.type}
                passengerCapacity={mapNumberToRange(
                  item.passengerCapacity,
                  4,
                  7
                )}
                baggageCapacity={mapNumberToRange(item.baggageCapacity, 1, 4)}
                transmissionType={{
                  label: item.isAuto ? "Auto" : "Manual",
                  icon: item.isAuto ? TbAutomaticGearbox : TbManualGearbox,
                }}
                fuel={item.fuel}
                price={item.price}
                show={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
