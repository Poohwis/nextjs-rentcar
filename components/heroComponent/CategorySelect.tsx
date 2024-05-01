import { cn } from "@/lib/utils";
import { IconType } from "@react-icons/all-files";
import { FaCarSide, FaTruckPickup } from "react-icons/fa";
import { FaVanShuttle, FaTruckField } from "react-icons/fa6";
import { MdElectricCar } from "react-icons/md";
import { useSearchStore } from "@/store/zustand";

interface CategoryBoxProps {
  label: string;
  value: string;
  icon: IconType;
  selected?: boolean;
}

export default function CategorySelect() {
  const { categories, setCategory } = useSearchStore();

  const categoryLists = [
    { title: "Cars", value: "cars", icon: FaCarSide },
    { title: "SUVs", value: "suvs", icon: FaTruckField },
    { title: "Trucks", value: "trucks", icon: FaTruckPickup },
    { title: "Vans", value: "vans", icon: FaVanShuttle },
    { title: "EVs", value: "evs", icon: MdElectricCar },
  ];

  const CategoryBox = ({
    label,
    icon: Icon,
    selected,
    value,
  }: CategoryBoxProps) => {
    return (
      <div
        onClick={() => setCategory(value)}
        className={cn(
          "hover:cursor-pointer border-[1px] border-muted flex flex-row gap-x-1 items-center px-2 py-1 rounded-full text-[12px] text-gray-800 ",
          selected ? "bg-primary text-white/90" : "bg-muted text-gray-800"
        )}
      >
        <Icon size={16} />
        {label}
      </div>
    );
  };

  return (
    <div className="flex sm:flex-row flex-wrap gap-x-4 sm:gap-y-0 gap-y-2 w-full ">
      {categoryLists.map((item, index) => (
        <CategoryBox
          key={index}
          label={item.title}
          value={item.value}
          icon={item.icon}
          selected={categories.includes(item.title.toLowerCase())}
        />
      ))}
    </div>
  );
}
