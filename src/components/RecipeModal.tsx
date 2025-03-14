import { X, Clock, Users, Flame } from 'lucide-react';
import { Recipe } from '../types/recipe';

interface RecipeModalProps {
  recipe: Recipe;
  onClose: () => void;
}

export default function RecipeModal({ recipe, onClose }: RecipeModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-64 object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">{recipe.title}</h2>
          
          <div className="flex gap-6 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">Cook Time</p>
                <p className="font-medium">{recipe.cookTime}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">Servings</p>
                <p className="font-medium">{recipe.servings}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">Calories</p>
                <p className="font-medium">{recipe.calories}</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Ingredients</h3>
            <ul className="list-disc list-inside space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-700">{ingredient}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Instructions</h3>
            <ol className="list-decimal list-inside space-y-3">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="text-gray-700">{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
