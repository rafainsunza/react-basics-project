import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeSelect = (recipeData) => {
    setSelectedRecipe(recipeData);
  };

  const handleBackButtonClick = () => {
    setSelectedRecipe(null);
  };

  return (
    <>
      {selectedRecipe ? (
        <RecipePage
          imageUrl={selectedRecipe.recipe.image}
          mealType={selectedRecipe.recipe.mealType[0]}
          title={selectedRecipe.recipe.label}
          cookingTime={selectedRecipe.recipe.totalTime}
          servings={selectedRecipe.recipe.yield}
          ingredients={selectedRecipe.recipe.ingredientLines}
          healthLabels={selectedRecipe.recipe.healthLabels}
          dietLabels={selectedRecipe.recipe.dietLabels}
          cautions={selectedRecipe.recipe.cautions}
          calories={selectedRecipe.recipe.totalNutrients.ENERC_KCAL}
          carbs={selectedRecipe.recipe.totalNutrients.CHOCDF}
          protein={selectedRecipe.recipe.totalNutrients.PROCNT}
          fat={selectedRecipe.recipe.totalNutrients.FAT}
          cholesterol={selectedRecipe.recipe.totalNutrients.CHOLE}
          sodium={selectedRecipe.recipe.totalNutrients.NA}
          onBackButtonClick={handleBackButtonClick}
        />
      ) : (
        <RecipeListPage onRecipeSelect={handleRecipeSelect} />
      )}
    </>
  );
};
