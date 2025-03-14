import { Recipe } from '../types/recipe';

export const recipes: Recipe[] = [
  // Breakfast Recipes
  {
    id: '1',
    title: 'Congee with Century Egg',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd',
    prepTime: '10 mins',
    cookTime: '45 mins',
    servings: 4,
    calories: 250,
    difficulty: 'Easy',
    category: 'Breakfast',
    tags: ['Asian', 'Rice', 'Comfort Food'],
    ingredients: [
      '1 cup rice',
      '8 cups water',
      '2 century eggs',
      'Ginger slices',
      'Green onions',
      'Soy sauce',
      'White pepper'
    ],
    instructions: [
      'Rinse rice thoroughly',
      'Bring water and rice to boil',
      'Reduce heat and simmer for 45 minutes',
      'Add century egg and ginger',
      'Season with soy sauce and pepper',
      'Garnish with green onions'
    ]
  },
  {
    id: '2',
    title: 'Nasi Lemak',
    image: 'https://images.unsplash.com/photo-1628074958674-c91c9aec55b5',
    prepTime: '20 mins',
    cookTime: '30 mins',
    servings: 4,
    calories: 450,
    difficulty: 'Medium',
    category: 'Breakfast',
    tags: ['Malaysian', 'Rice', 'Spicy'],
    ingredients: [
      '2 cups jasmine rice',
      'Coconut milk',
      'Pandan leaves',
      'Cucumber slices',
      'Fried anchovies',
      'Peanuts',
      'Sambal'
    ],
    instructions: [
      'Cook rice with coconut milk and pandan',
      'Prepare sambal chili',
      'Fry anchovies and peanuts',
      'Slice cucumber',
      'Arrange all components on plate'
    ]
  },
  // Lunch Recipes
  {
    id: '3',
    title: 'Chicken Teriyaki Bowl',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
    prepTime: '15 mins',
    cookTime: '20 mins',
    servings: 3,
    calories: 420,
    difficulty: 'Easy',
    category: 'Lunch',
    tags: ['Japanese', 'Chicken', 'Rice Bowl'],
    ingredients: [
      'Chicken thighs',
      'Soy sauce',
      'Mirin',
      'Sugar',
      'Steamed rice',
      'Broccoli'
    ],
    instructions: [
      'Make teriyaki sauce',
      'Cook chicken until golden',
      'Steam broccoli',
      'Serve over rice'
    ]
  },
  {
    id: '4',
    title: 'Bibimbap',
    image: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7',
    prepTime: '30 mins',
    cookTime: '20 mins',
    servings: 4,
    calories: 480,
    difficulty: 'Medium',
    category: 'Lunch',
    tags: ['Korean', 'Rice Bowl', 'Vegetables'],
    ingredients: [
      'Steamed rice',
      'Spinach',
      'Bean sprouts',
      'Carrots',
      'Ground beef',
      'Fried egg',
      'Gochujang'
    ],
    instructions: [
      'Prepare vegetables separately',
      'Season and cook beef',
      'Fry egg',
      'Arrange on rice',
      'Add gochujang'
    ]
  },
  // Dinner Recipes
  {
    id: '5',
    title: 'Mapo Tofu',
    image: 'https://images.unsplash.com/photo-1582576163090-09d3b6f8a969',
    prepTime: '15 mins',
    cookTime: '20 mins',
    servings: 4,
    calories: 350,
    difficulty: 'Medium',
    category: 'Dinner',
    tags: ['Chinese', 'Spicy', 'Tofu'],
    ingredients: [
      'Soft tofu',
      'Ground pork',
      'Doubanjiang',
      'Sichuan peppercorns',
      'Green onions'
    ],
    instructions: [
      'Cook ground pork',
      'Add doubanjiang and spices',
      'Add tofu gently',
      'Simmer until heated through',
      'Garnish with green onions'
    ]
  },
  {
    id: '6',
    title: 'Thai Green Curry',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd',
    prepTime: '20 mins',
    cookTime: '30 mins',
    servings: 4,
    calories: 420,
    difficulty: 'Medium',
    category: 'Dinner',
    tags: ['Thai', 'Curry', 'Spicy'],
    ingredients: [
      'Green curry paste',
      'Coconut milk',
      'Chicken',
      'Thai eggplants',
      'Bamboo shoots',
      'Thai basil'
    ],
    instructions: [
      'Fry curry paste',
      'Add coconut milk',
      'Cook chicken',
      'Add vegetables',
      'Simmer until done'
    ]
  },
  // Snacks
  {
    id: '7',
    title: 'Spring Rolls',
    image: 'https://images.unsplash.com/photo-1548811256-1623d164c265',
    prepTime: '30 mins',
    cookTime: '15 mins',
    servings: 6,
    calories: 180,
    difficulty: 'Medium',
    category: 'Snacks',
    tags: ['Vietnamese', 'Appetizer', 'Fresh'],
    ingredients: [
      'Rice paper',
      'Vermicelli noodles',
      'Shrimp',
      'Lettuce',
      'Mint',
      'Peanut sauce'
    ],
    instructions: [
      'Prepare noodles and shrimp',
      'Soften rice paper',
      'Layer ingredients',
      'Roll tightly',
      'Serve with peanut sauce'
    ]
  },
  {
    id: '8',
    title: 'Edamame',
    image: 'https://images.unsplash.com/photo-1542814784-133551684323',
    prepTime: '5 mins',
    cookTime: '5 mins',
    servings: 4,
    calories: 120,
    difficulty: 'Easy',
    category: 'Snacks',
    tags: ['Japanese', 'Healthy', 'Vegetarian'],
    ingredients: [
      'Fresh edamame pods',
      'Sea salt',
      'Water'
    ],
    instructions: [
      'Boil water',
      'Cook edamame for 5 minutes',
      'Drain and salt',
      'Serve hot or cold'
    ]
  }
];
