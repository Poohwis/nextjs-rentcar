import CategorySelect from "./CategorySelect";
import SearchBar from "./SearchBar";

export interface Time {
  idx: number;
  hours: number;
  minutes: number;
}
export default function SearchSection() {
  return (
    <div className="bg-white w-full rounded-xl sm:mt-6 mt-2 flex flex-col items-start px-4 py-4  justify-center space-y-4">
      <CategorySelect />
      <SearchBar />
    </div>
  );
}
