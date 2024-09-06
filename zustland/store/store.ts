import { create } from "zustand";
import { devtools } from "zustand/middleware";



interface StoreState {
    mealIndex: number;
    setIndex: (index: number) => void;
  }

  interface MealStoreState {
    step: number;
    setStep: (index: number) => void;
  }

export const useStore = create<StoreState>()(
    devtools((set) => ({
        mealIndex: 0,
        setIndex: (index: number) => set({ mealIndex: index }), 
    }))
);

export const mealStepperStore = create<MealStoreState>()(
    devtools((set) => ({
        step: 0,
        setStep: (index: number) => set({ step: index }), 
    }))
);