import { useRouter } from "next/navigation";
import ButtonRollup from "../ButtonRollup";
import DateTimeComboBox from "./DateTimeComboBox";
import { LocationComboBox } from "./LocationComboBox";
import { FormEvent } from "react";
import { useSearchStore } from "@/store/zustand";
import { format } from "date-fns";

export default function SearchBar() {
  const router = useRouter();
  const {categories, location, pickupDate, pickupTime, returnDate, returnTime, timezone } =
    useSearchStore();
  const disabled =
    !location || !pickupDate || !pickupTime || !returnDate || !returnTime;

  const changeToUnix = (dateTime: string, timezoneOffset: number): number => {
    const date = new Date(dateTime);
    const adjustedTime = date.getTime() + timezoneOffset * 60 * 1000;
    return Math.floor(adjustedTime / 1000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const timezoneOffset = timezone * 60; 
    const pickupDateTime = `${format( pickupDate!, "yyyy-MM-dd")}T${pickupTime}:00.000Z`;
    const returnDateTime = `${format( returnDate!, "yyyy-MM-dd")}T${returnTime}:00.000Z`;
    const pickupUnix = changeToUnix(pickupDateTime, timezoneOffset);
    const returnUnix = changeToUnix(returnDateTime, timezoneOffset);
    router.push(`/search?locationid=${location?.id}&booking_start=${pickupUnix}&booking_end=${returnUnix}&category=${categories}`)
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex sm:flex-row flex-col items-center w-full sm:gap-x-4 gap-y-2 "
    >
      <LocationComboBox />
      <DateTimeComboBox
        title="Pickup date - time"
        timeTextPlaceholder="Select pickup time"
        type={"pickup"}
      />
      <DateTimeComboBox
        title="Return date - time"
        timeTextPlaceholder="Select return time"
        type={"return"}
      />
      <button type="submit" className="w-full" disabled={disabled}>
        <ButtonRollup disabled={disabled}>
          <span>Show vehicles</span>
        </ButtonRollup>
      </button>
    </form>
  );
}
