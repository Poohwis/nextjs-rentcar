import { create, useStore } from "zustand";


type SearchStore = {
  timezone : number
  categories: string[];
  location?: {value: string, label: string , id: number};
  pickupTime?: string;
  returnTime?: string;
  pickupDate?: Date;
  returnDate?: Date;
  setCategory: (item: string) => void;
  setLocation: (location: {value:string, label:string, id: number}) => void;
  setPickupTime: (time: string) => void;
  setReturnTime: (time: string) => void;
  setPickupDate: (date: Date) => void;
  setReturnDate: (date: Date) => void;
};
export const useSearchStore = create<SearchStore>((set) => ({
  timezone: -7,
  categories: ["cars"],
  location: undefined,
  pickupTime: undefined,
  returnTime: undefined,
  pickupDate: undefined,
  returnDate: undefined,
  setCategory: (item) =>
    set((state) => {
      if (state.categories.includes(item)) {
        return {
          categories: state.categories.filter((category) => category !== item),
        };
      } else {
        return { categories: [...state.categories, item] };
      }
    }),
  setLocation: (location) => set({ location: location }),
  setPickupTime: (time) => set({ pickupTime: time }),
  setReturnTime: (time) => set({ returnTime: time }),
  setPickupDate: (date) => set({ pickupDate: date }),
  setReturnDate: (date) => set({ returnDate: date }),
}));


