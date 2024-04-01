import { Grid, GridItem, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { RecipeCard } from "../components/RecipeCard";
import { SearchBar } from "../components/ui/SearchBar";
import { NotFoundCard } from "../components/ui/NotFoundCard";
import { data } from "../utils/data";

export const RecipeListPage = ({ onRecipeSelect }) => {
  const [inputValue, setInputValue] = useState("");

  const dietaryPreferences = ["Vegan", "Vegetarian", "Pescatarian"];

  const filteredRecipes = data.hits.filter((item) => {
    // CHECK IF INPUT VALUE IS (PARTLY) EQUAL TO RECIPE TITLE
    const titleMatches = item.recipe.label
      .toLowerCase()
      .includes(inputValue.toLowerCase());

    // CHECK IF INPUT VALUE IS (PARTLY) EQUAL TO CERTAIN HEALTHLABELS (DIETARYPREFERENCES)
    const dietaryPreferenceMatches = item.recipe.healthLabels.some(
      (healthLabel) =>
        dietaryPreferences.includes(healthLabel) &&
        healthLabel.toLowerCase().includes(inputValue.toLowerCase())
    );

    return titleMatches || dietaryPreferenceMatches;
  });

  const handleCardClick = (item) => {
    onRecipeSelect(item);
  };

  const handleSearchInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Grid
      minHeight={"100vh"}
      width={"100vw"}
      templateColumns={[
        "1fr",
        "1fr",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
      ]}
      justifyItems={"center"}
      padding={[null, null, null, null, "2em"]}
      color={"white"}
      backgroundColor={["blue.500"]}
    >
      <GridItem colSpan={["1", "1", "2", "3", "4"]}>
        <Heading
          width={["100%"]}
          marginBottom={"1em"}
          textAlign={["center"]}
          fontSize={["1.5em", "1.7em", null, null, "2em"]}
        >
          Winc Recipe Checker
        </Heading>

        <SearchBar value={inputValue} onChange={handleSearchInput}></SearchBar>
      </GridItem>

      {/* SHOW ALL CARDS IF THERE IS NO INPUT */}
      {inputValue === "" ? (
        data.hits.map((item) => (
          <GridItem key={item.recipe.label} width={["100%", "90%"]}>
            <RecipeCard
              imageUrl={item.recipe.image}
              mealType={item.recipe.mealType[0]}
              title={item.recipe.label}
              healthLabels={item.recipe.healthLabels}
              dietLabels={item.recipe.dietLabels}
              dishType={item.recipe.dishType[0]}
              cautions={item.recipe.cautions}
              onCardClick={() => handleCardClick(item)}
            ></RecipeCard>
          </GridItem>
        ))
      ) : // INFORM THE USER NO RECIPES WERE FOUND
      filteredRecipes.length === 0 ? (
        <GridItem height={["50em"]} width={["100vw", "30em"]} colSpan={["4"]}>
          <NotFoundCard></NotFoundCard>
        </GridItem>
      ) : (
        // DISPLAY CARDS THAT WERE FILTERED
        filteredRecipes.map((item) => (
          <GridItem key={item.recipe.label} width={["100%", "90%"]}>
            <RecipeCard
              imageUrl={item.recipe.image}
              mealType={item.recipe.mealType[0]}
              title={item.recipe.label}
              healthLabels={item.recipe.healthLabels}
              dietLabels={item.recipe.dietLabels}
              dishType={item.recipe.dishType[0]}
              cautions={item.recipe.cautions}
              onCardClick={() => handleCardClick(item)}
            ></RecipeCard>
          </GridItem>
        ))
      )}
    </Grid>
  );
};
