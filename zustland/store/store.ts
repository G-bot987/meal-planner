import { create } from "zustand";
import { devtools } from "zustand/middleware";

    interface StoreState {
    mealIndex: number;
    setIndex: (index: number) => void;
    }

  interface MealStoreState {
    step: number;
    setStepForMealStepper: (index: number) => void;
  }


    type New = {
      step: number,
    entry: entry
    add: (property: Partial<entry>) => void;
    changeStep: (index: number) => void;
  }
  
  type entry = {
    type: string|null
    name: string|null
    calories: number|null
  };

export const useStore = create<StoreState>()(
    devtools((set) => ({
        mealIndex: 0,
        setIndex: (index: number) => set({ mealIndex: index }), 
    }))
);

export const mealStepperStore = create<MealStoreState>()(
    devtools((set) => ({
        step: 0,
        setStepForMealStepper: (step: number) => set({ step }), 
    }))
);


export const choosenFoodOrMeal = create<any>()(
    devtools((set) => ({
        food: null,
        setFood: (food: any) => set({ food }), 
        clearStore: () => set({ food: null }), 
    }))
);

export const createNewStore = create<New>()(
    devtools((set) => ({
      step: 0,
        entry: {
            type: null,
            name: null,
            calories: null,
        },
        add: (property: Partial<entry>) => set((state) => {
          const cloneState = {...state};
          cloneState.entry = {...cloneState.entry, ...property};
          return cloneState;
        }),
        changeStep: (step: number) => set({ step }), 
    }))
);