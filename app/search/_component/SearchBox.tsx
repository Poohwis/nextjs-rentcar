"use client";
import SearchSection from "@/components/heroComponent/SeacrhSection";

export default function SearchBox() {
  return (
    <div className="w-full flex justify-center bg-gradient-to-t from-primary to-gray-500">
      <div className="flex items-center justify-center w-full max-w-5xl sm:pb-6 pb-4 pt-2 px-4">
        <SearchSection />
      </div>
    </div>
  );
}
