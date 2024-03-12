import { ArrowUpRight, Calendar, MapPin, MoveUpRight } from "lucide-react";
import SelectButton from "./SelectButton";
import ButtonRollup from "../ButtonRollup";

export default function SearchBar() {
  return (
    <div className="flex sm:flex-row flex-col items-center w-full sm:gap-x-4 gap-y-2 ">
      <SelectButton
        label="Pickup & Return"
        placeholder="Select your pickup-return car"
      >
        <MapPin size={14} color="lightblue" />
      </SelectButton>
      <SelectButton label="Pickup date" >
        <Calendar size={14} color="lightblue" />
      </SelectButton>
      <SelectButton label="Return date" >
        <Calendar size={14} color="lightblue" />
      </SelectButton>
      <div className="w-full">
        <ButtonRollup>
          <span>Show vehicles</span>
        </ButtonRollup>
      </div>
    </div>
  );
}
