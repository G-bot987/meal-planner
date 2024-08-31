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
    foods?: FOODSTOMEALSINTERFACE[];
    id: number;
    name: string;
    updated_at: string;
    user_id: number;
    archived_meals?: MEALSINTERFACE[];
    calories?: number | null;
    fat?: number | null;
    protein?: number | null;
    carbohydrates?: number | null;
    fibre?: number | null;
    sugar?: number | null;
    weight?: number | null;
    portion?: string | null;
    version: number;
    original_meal_id?: number | null;

  }


  interface FOODSTOMEALSINTERFACE {
    assigned_at: string;
    assigned_by: string;
    food: FOODINTERFACE; 
    food_id: number;
    meal_id: number;
    servings: number
  }