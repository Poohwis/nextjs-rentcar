export default function TypeSelect() {
  const vehicleLists = ["Cars", "SUVs", "Trucks", "Vans", "EVs"];
  return (
    <div className="flex flex-row space-x-4 w-full">
      {vehicleLists.map((list, index) => (
        <div
          key={index}
          className="hover:cursor-pointer hover:opacity-80 
          border-[1px] border-muted
          px-2 py-1 rounded-full text-[12px] text-gray-800 bg-muted/40"
        >
          {list}
        </div>
      ))}
    </div>
  );
}
