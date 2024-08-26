import { create } from "zustand";
import { devtools } from "zustand/middleware";



interface StoreState {
    mealIndex: number;
    setIndex: (index: number) => void;
  }

const useStore = create<StoreState>()(
    devtools((set) => ({
        mealIndex: 0,
        setIndex: (index: number) => set({ mealIndex: index }), 
    }))
);

export default useStore;