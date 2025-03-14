import { useState } from 'react';
import { X, Plus, Upload } from 'lucide-react';
import { Recipe, Category } from '../types/recipe';

interface AddRecipeModalProps {
  onClose: () => void;
  onSave: (recipe: Omit<Recipe, 'id'>) => void;
}

export default function AddRecipeModal({ onClose, onSave }: AddRecipeModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    prepTime: '',
    cookTime: '',
    servings: 1,
    calories: 0,
    difficulty: 'Easy' as Recipe['difficulty'],
    category: 'Breakfast' as Category,
    tags: [''],
    ingredients: [''],
    instructions: ['']
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        setFormData(prev => ({ ...prev, image: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      tags: formData.tags.filter(tag => tag.trim() !== ''),
      ingredients: formData.ingredients.filter(ing => ing.trim() !== ''),
      instructions: formData.instructions.filter(inst => inst.trim() !== ''),
      isUserGenerated: true
    });
    onClose();
  };

  const addListItem = (field: 'tags' | 'ingredients' | 'instructions') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Add New Recipe</h2>
            <button onClick={onClose} className="p-2">
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  required
                  className="w-full border rounded-lg p-2"
                  value={formData.title}
                  onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Photo</label>
                <div className="flex items-center space-x-2">
                  <label className="cursor-pointer flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Upload className="w-5 h-5 mr-2" />
                    Upload Photo
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </label>
                  {imagePreview && (
                    <div className="w-16 h-16 relative">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select
                  className="w-full border rounded-lg p-2"
                  value={formData.category}
                  onChange={e => setFormData(prev => ({ ...prev, category: e.target.value as Category }))}
                >
                  {['Breakfast', 'Lunch', 'Dinner', 'Snacks'].map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Difficulty</label>
                <select
                  className="w-full border rounded-lg p-2"
                  value={formData.difficulty}
                  onChange={e => setFormData(prev => ({ ...prev, difficulty: e.target.value as Recipe['difficulty'] }))}
                >
                  {['Easy', 'Medium', 'Hard'].map(diff => (
                    <option key={diff} value={diff}>{diff}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Dynamic Lists */}
            {['tags', 'ingredients', 'instructions'].map((field) => (
              <div key={field} className="space-y-2">
                <label className="block text-sm font-medium mb-1 capitalize">{field}</label>
                {formData[field as keyof typeof formData].map((item: string, index: number) => (
                  <input
                    key={index}
                    type="text"
                    className="w-full border rounded-lg p-2 mb-2"
                    value={item}
                    onChange={e => {
                      const newItems = [...formData[field as keyof typeof formData]] as string[];
                      newItems[index] = e.target.value;
                      setFormData(prev => ({ ...prev, [field]: newItems }));
                    }}
                  />
                ))}
                <button
                  type="button"
                  onClick={() => addListItem(field as 'tags' | 'ingredients' | 'instructions')}
                  className="flex items-center text-green-600 hover:text-green-700"
                >
                  <Plus className="w-4 h-4 mr-1" /> Add {field.slice(0, -1)}
                </button>
              </div>
            ))}

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-600 hover:text-gray-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Save Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
