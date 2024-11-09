import { create } from "zustand";
import { devtools } from "zustand/middleware";

    interface StoreState {
    mealIndex: number;
    setIndex: (index: number) => void;
    }

    interface SearchState {
      searchType: String|null,
      param: String|null,
      setSearchType: (searchType: string|null) => void;
      setParam: (param: string) => void;
      }

    type New = {
      step: number,
    completedStep?: number,
    entry: entry,
    storedOnDB: boolean,
    add: (property: Partial<entry>) => void;
    changeStep: (index: number) => void;
    clearEntry: () => void;
    setStoredOnDB: (value: boolean) => void;
    setCompletedStep: (value: number) => void;
  }

  type backUp = {

  entry: entry,
  addToBackUp: (property: Partial<entry>) => void;
  clearEntry: () => void;
}
  

// removed type here caused issues with create and didn't appear needed as meals will have its own store this will be more readable
  type entry = {
    name: string|null
    calories: number|null
    carbohydrates: number|null,
    fat: number|null,
    fibre: number|null,
    protein:number|null,
    sugar: number|null,
    weight: number|null,
    creator: boolean|null
  };

  interface endpointState {
    item: String|null,
    operation: String|null,
    setItem: (searchType: string) => void;
    setOperation: (param: string) => void;
    clearStore: () => void;
    }

export const useStore = create<StoreState>()(
    devtools((set) => ({
        mealIndex: 0,
        setIndex: (index: number) => set({ mealIndex: index }), 
    }))
);

export const searchStore = create<SearchState>()(
  devtools((set) => ({
    searchType:null ,
    param: null,
    setSearchType: (value:string|null) => set({ searchType: value }), 
    setParam: (value:string) => set({ param: value }), 
  }))
);

export const createNewStore = create<New>()(
    devtools((set) => ({
      step: 0,
      storedOnDB: false,
        entry: {
            name: null,
            calories: null,
            carbohydrates: null,
            fat: null,
            fibre: null,
            protein:null,
            sugar: null,
            weight: null,
            creator:null
        },
        add: (property: Partial<entry>) => set((state) => {
          const cloneState = {...state};
          cloneState.entry = {...cloneState.entry, ...property};
          return cloneState;
        }),
        setStoredOnDB: (value:boolean) => set({ storedOnDB: value }), 
        setCompletedStep: (value:number) => set({ completedStep: value }), 
        changeStep: (step: number) => set({ step }), 
        clearEntry: () => set({ entry: { 
          name: null,
          calories: null,
          carbohydrates: null,
          fat: null,
          fibre: null,
          creator: null,
          protein:null,
          sugar: null,
          weight: null,
        } 
      }), 
    }))
);


export const backUpNutritionalStore = create<backUp>()(
  devtools((set) => ({
      entry: {
          name: null,
          calories: null,
          carbohydrates: null,
          fat: null,
          fibre: null,
          protein:null,
          sugar: null,
          weight: null,
          creator:null
      },
      addToBackUp: (property: Partial<entry>) => set((state) => {
        const cloneState = {...state};
        cloneState.entry = {...cloneState.entry, ...property};
        return cloneState;
      }),
      clearEntry: () => set({ entry: { 
        name: null,
        calories: null,
        carbohydrates: null,
        fat: null,
        fibre: null,
        creator: null,
        protein:null,
        sugar: null,
        weight: null,
      } 
    }), 
  }))
);


export const endPointStore = create<endpointState>()(
  devtools((set) => ({
    item: null,
    operation: null,
    setItem: (value:string) => set({ item: value }), 
    setOperation: (value:string) => set({ operation: value }), 
    clearStore: () => set({   
        item: null,
        operation: null, 
        }
      ), 
  }))
);