import { Category } from '../types/recipe';

interface CategoryFilterProps {
  selectedCategory: Category | 'all';
  onSelectCategory: (category: Category | 'all') => void;
}

export default function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  const categories: (Category | 'all')[] = ['all', 'Breakfast', 'Lunch', 'Dinner', 'Snacks'];

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${selectedCategory === category
              ? 'bg-green-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          {category === 'all' ? 'All Recipes' : category}
        </button>
      ))}
    </div>
  );
}
