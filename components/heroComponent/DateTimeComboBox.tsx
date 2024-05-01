"use client";
import { format } from "date-fns";
import { IoCalendarClear } from "react-icons/io5";
import SelectButton from "./SelectButton";
import { Time } from "./SeacrhSection";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Calendar } from "../ui/calendar";
import { useSearchStore } from "@/store/zustand";

interface DateTimeComboProps {
  title: string;
  timeTextPlaceholder: string;
  type: "pickup" | "return";
}
export default function DateTimeComboBox({
  title,
  timeTextPlaceholder,
  type,
}: DateTimeComboProps) {
  const {
    pickupTime,
    pickupDate,
    returnTime,
    returnDate,
    setPickupTime,
    setPickupDate,
    setReturnTime,
    setReturnDate,
  } = useSearchStore();

  const formatTime = (hours: number, minutes : number) => {
    return format(new Date().setHours(hours, minutes), "HH:mm");
  };

  const timeOptions = Array.from({ length: 48 }, (_, index) => {
    return  formatTime(Math.floor(index/2), index % 2 === 0 ? 0 : 30)
  });

  const handleChangeTime = (value: string) => {
    if (type === "pickup") {
      setPickupTime(value);
    } else {
      setReturnTime(value);
    }
  };

  const handleChangeDate = (value: Date) => {
    if (type == "pickup") {
      setPickupDate(value);
    } else {
      setReturnDate(value);
    }
  };

  const isDayBeforeToday = (day: Date) => {
    const today = new Date();
    return day < today && !isSameDay(day, today);
  };

  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const [popoverOpen, setIsPopoverOpen] = useState(false);
  const date = type === "pickup" ? pickupDate : returnDate;
  const time = type === "pickup" ? pickupTime : returnTime;

  return (
    <Popover onOpenChange={(e) => setIsPopoverOpen(e)}>
      <PopoverTrigger asChild>
        <div className="w-full">
          <SelectButton
            label={title}
            icon={IoCalendarClear}
            isActive={popoverOpen}
          >
            <div className="mx-2 pl-2 w-full bg-transparent text-[12px] flex items-center ">
              {date && time
                ? `${format(date, "dd/MM/yyyy")} - ${time}`
                : date && !time
                ? `Select ${type} time`
                : !date && time
                ? `Select ${type} date`
                : ""}
            </div>
          </SelectButton>
        </div>
      </PopoverTrigger>
      <PopoverContent className="sm:w-[250px] flex flex-col items-center justify-center">
        <Select
          onValueChange={handleChangeTime}
          value={time}
          defaultValue={""}
        >
          <SelectTrigger>
            <SelectValue placeholder={timeTextPlaceholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Early morning</SelectLabel>
              {timeOptions.slice(0, 16).map((option,index) => (
                <SelectItem key={index} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Morning - afternoon</SelectLabel>
              {timeOptions.slice(16, 35).map((option,index) => (
                <SelectItem key={index} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Evening</SelectLabel>
              {timeOptions.slice(35, 48).map((option,index) => (
                <SelectItem key={index} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Calendar
          disabled={isDayBeforeToday}
          mode="single"
          selected={date}
          onSelect={(value) => {
            if (value) {
              handleChangeDate(value);
            }
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
