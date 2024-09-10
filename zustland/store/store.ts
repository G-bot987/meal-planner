import { create } from "zustand";
import { devtools } from "zustand/middleware";

    interface StoreState {
    mealIndex: number;
    setIndex: (index: number) => void;
    }

    type New = {
      step: number,
    entry: entry,
    storedOnDB: boolean,
    add: (property: Partial<entry>) => void;
    changeStep: (index: number) => void;
    clearEntry: () => void;
    setStoredOnDB: (value: boolean) => void;
  }
  
  type entry = {
    type: string|null
    name: string|null
    calories: number|null
    carbohydrates: number|null,
    fat: number|null,
    fibre: number|null,
    protein:number|null,
    sugar: number|null,
    weight: number|null,
  };

export const useStore = create<StoreState>()(
    devtools((set) => ({
        mealIndex: 0,
        setIndex: (index: number) => set({ mealIndex: index }), 
    }))
);

export const createNewStore = create<New>()(
    devtools((set) => ({
      step: 0,
      storedOnDB: false,
        entry: {
            type: null,
            name: null,
            calories: null,
            carbohydrates: null,
            fat: null,
            fibre: null,
            protein:null,
            sugar: null,
            weight: null,
        },
        add: (property: Partial<entry>) => set((state) => {
          const cloneState = {...state};
          cloneState.entry = {...cloneState.entry, ...property};
          return cloneState;
        }),
        setStoredOnDB: (value:boolean) => set({ storedOnDB: value }), 
        changeStep: (step: number) => set({ step }), 
        clearEntry: () => set({ entry: { type: null,
          name: null,
          calories: null,
          carbohydrates: null,
          fat: null,
          fibre: null,
          protein:null,
          sugar: null,
          weight: null,} }), 
    }))
);