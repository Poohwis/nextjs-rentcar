import { IconType } from "@react-icons/all-files";
import { BsFillSuitcaseFill } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import { FaCarSide, FaTruckPickup } from "react-icons/fa";
import { FaVanShuttle, FaTruckField } from "react-icons/fa6";
import { MdElectricCar } from "react-icons/md";
import { cn } from "@/lib/utils";

interface VehiclePropertyPillProps {
  label: string;
  icon?: IconType;
}

interface RentListingBoxProps {
  brand: string;
  model: string;
  type: string;
  passengerCapacity: number;
  baggageCapacity: number;
  transmissionType: { label: string; icon: IconType };
  fuel: string;
  price: string;
  show: boolean
}
const VehiclePropertyPill = ({
  label,
  icon: Icon,
}: VehiclePropertyPillProps) => {
  return (
    <div
      className="text-[11px] bg-white/20 text-white backdrop-blur-2xl flex
     justify-center items-center rounded-full px-2 text-primary font-normal -center gap-x-1"
    >
      {Icon ? <Icon size={11} /> : ""}
      {label}
    </div>
  );
};
export default function RentListingBox({
  brand,
  model,
  type,
  passengerCapacity,
  baggageCapacity,
  transmissionType,
  fuel,
  price,
  show
}: RentListingBoxProps) {

  return (
    <div
      className={cn(
        " justify-between flex-col w-full h-80 bg-gradient-to-b from-primary"
        , "to-gray-600 text-secondary px-3 py-3 rounded-lg hover:cursor-pointer",
        show  ? "flex" : "hidden"
      )}
    >
      <div>
        <div className="text-white/80">
          <h1 className="text-base font-semibold">
            {brand} - {model}
          </h1>
          <h2 className="text-sm">{type}</h2>
        </div>
        <div className="flex justify-start -center gap-x-2 mt-2">
          <VehiclePropertyPill
            label={passengerCapacity.toString()}
            icon={IoPerson}
          />
          <VehiclePropertyPill
            label={baggageCapacity.toString()}
            icon={BsFillSuitcaseFill}
          />
          <VehiclePropertyPill
            label={transmissionType.label}
            icon={transmissionType.icon}
          />
          <VehiclePropertyPill label={fuel} />
        </div>
      </div>
      <div>
        <div className="text-base text-white font-semibold">
          {parseInt(price)} Baht / day
        </div>
      </div>
    </div>
  );
}
