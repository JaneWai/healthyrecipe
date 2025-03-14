import { useState } from 'react';
import { Utensils, Plus } from 'lucide-react';
import { recipes as initialRecipes } from './data/recipes';
import { Recipe, Category } from './types/recipe';
import RecipeCard from './components/RecipeCard';
import RecipeModal from './components/RecipeModal';
import CategoryFilter from './components/CategoryFilter';
import AddRecipeModal from './components/AddRecipeModal';

function App() {
  const [recipes, setRecipes] = useState(initialRecipes);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredRecipes = recipes.filter(recipe => 
    selectedCategory === 'all' || recipe.category === selectedCategory
  );

  const handleAddRecipe = (newRecipe: Omit<Recipe, 'id'>) => {
    const recipeWithId = {
      ...newRecipe,
      id: (recipes.length + 1).toString()
    };
    setRecipes(prev => [...prev, recipeWithId]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Utensils className="w-8 h-8 text-green-600" />
              <h1 className="text-3xl font-bold text-gray-900">Healthy Recipes</h1>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <Plus className="w-5 h-5" />
              Add Recipe
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map(recipe => (
            <RecipeCard 
              key={recipe.id} 
              recipe={recipe} 
              onClick={setSelectedRecipe}
            />
          ))}
        </div>
      </main>

      {selectedRecipe && (
        <RecipeModal 
          recipe={selectedRecipe} 
          onClose={() => setSelectedRecipe(null)} 
        />
      )}

      {showAddModal && (
        <AddRecipeModal
          onClose={() => setShowAddModal(false)}
          onSave={handleAddRecipe}
        />
      )}
    </div>
  );
}

export default App;
