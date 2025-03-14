export type Category = 'Breakfast' | 'Lunch' | 'Dinner' | 'Snacks';

export interface Recipe {
  id: string;
  title: string;
  image: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  calories: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: Category;
  tags: string[];
  ingredients: string[];
  instructions: string[];
  isUserGenerated?: boolean;
}
