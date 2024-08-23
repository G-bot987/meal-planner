export interface FOODINTERFACE {
    id: number;
    name: string;
    calories: number;
    carbohydrates: number;
    fat: number;
    fibre: number;
    protein: number;
    sugar: number;
    weight: number;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    user_id: number | null;
  }

 export  interface MEALSINTERFACE {
    created_at: string;
    deleted_at: string | null;
    foods: FOODSTOMEALSINTERFACE[];
    id: number;
    name: string;
    updated_at: string;
    user_id: number;
  }


  interface FOODSTOMEALSINTERFACE {
    assigned_at: string;
    assigned_by: string;
    food: FOODINTERFACE; 
    food_id: number;
    meal_id: number;
    servings: number
  }