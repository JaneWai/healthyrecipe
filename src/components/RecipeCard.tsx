import { Clock, Users, Flame } from 'lucide-react';
import { Recipe } from '../types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: (recipe: Recipe) => void;
}

export default function RecipeCard({ recipe, onClick }: RecipeCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={() => onClick(recipe)}
    >
      <img 
        src={recipe.image} 
        alt={recipe.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
        <div className="flex items-center gap-4 text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{recipe.cookTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{recipe.servings}</span>
          </div>
          <div className="flex items-center gap-1">
            <Flame className="w-4 h-4" />
            <span>{recipe.calories} cal</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {recipe.tags.map(tag => (
            <span 
              key={tag} 
              className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
