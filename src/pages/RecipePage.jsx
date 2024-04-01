import {
  Heading,
  Image,
  Text,
  List,
  ListItem,
  Badge,
  Flex,
  Grid,
  GridItem,
  IconButton,
} from "@chakra-ui/react";

import { ChevronLeftIcon } from "@chakra-ui/icons";

export const RecipePage = ({
  imageUrl,
  mealType,
  title,
  cookingTime,
  servings,
  ingredients,
  healthLabels,
  dietLabels,
  cautions,
  calories,
  carbs,
  protein,
  fat,
  cholesterol,
  sodium,
  onBackButtonClick,
}) => {
  const H1 = ["1.4em"];
  const H2 = ["1.2em"];
  const text = ["1em"];

  const gridPadding = ["0.5em", "1em", "2em"];
  const standardMargin = ["0.5em"];
  const badgeMargin = ["0.25em 0.5em 0.25em 0"];
  const nutrientContainerWidth = ["33%"];

  return (
    <Flex
      justifyContent={[null, null, "center"]}
      backgroundColor={["blue.500"]}
    >
      <Grid
        backgroundColor={["white"]}
        width={[null, null, "80%", null, "60%"]}
        templateColumns={["repeat(2, 1fr)"]}
        paddingBottom={["0.5em"]}
      >
        {/* HEADER */}
        <GridItem colSpan={["2"]}>
          <Flex
            padding={["1.25em"]}
            display={"flex"}
            justifyContent={"flex-start"}
            flexWrap={"wrap"}
          >
            <IconButton
              onClick={() => onBackButtonClick({})}
              colorScheme="blue.500"
              icon={<ChevronLeftIcon color={"blue.500"} boxSize={6} />}
            ></IconButton>

            <Heading
              flex={"1"}
              textAlign={"center"}
              fontSize={H1}
              color={"blue.500"}
              margin={"auto 0 auto 0"}
            >
              Winc Recipe
            </Heading>
          </Flex>
        </GridItem>

        <GridItem colSpan={["2"]} marginBottom={["2em"]}>
          <Image
            src={imageUrl}
            width={["100%"]}
            height={["12em", "16em", null, null, "20em"]}
            objectFit={"cover"}
          />
        </GridItem>

        {/* TITLE ETC */}
        <GridItem colSpan={["2", null, null, "1"]} padding={gridPadding}>
          <Flex flexDirection={["column"]}>
            <Text color={"grey"} fontSize={text} fontWeight={["600"]}>
              {mealType.toUpperCase()}
            </Text>
            <Heading
              fontSize={H2}
              fontWeight={["600"]}
              marginBottom={standardMargin}
            >
              {title}
            </Heading>
            <Text fontSize={text}>
              Total cooking time: <strong>{cookingTime} Minutes</strong>
            </Text>
            <Text fontSize={text}>
              Servings: <strong>{servings}</strong>
            </Text>
          </Flex>

          {/* INGREDIENTS */}
          <Flex flexDirection={["column"]}>
            <Heading
              fontWeight={["400"]}
              fontSize={H2}
              marginTop={standardMargin}
              marginBottom={standardMargin}
            >
              Ingredients:
            </Heading>
            <List fontSize={text}>
              {ingredients.map((ingredient) => (
                <ListItem key={ingredient} marginBottom={standardMargin}>
                  {ingredient.split("*").join("")}
                </ListItem>
              ))}
            </List>
          </Flex>
        </GridItem>

        {/* LABELS */}
        <GridItem colSpan={["2", null, null, "1"]} padding={gridPadding}>
          {/* HEALTHLABELS*/}
          <Flex flexWrap={["wrap"]} marginBottom={["0.5em"]}>
            <Heading width={["100%"]} fontWeight={["400"]} fontSize={H2}>
              Health labels:
            </Heading>
            {healthLabels.map((healthLabel) => (
              <Badge
                key={healthLabel}
                margin={badgeMargin}
                colorScheme="purple"
              >
                {healthLabel}
              </Badge>
            ))}
          </Flex>

          {/* DIETLABELS IF PRESENT*/}
          <Flex flexWrap={["wrap"]} marginBottom={standardMargin}>
            {dietLabels.length > 0 && (
              <Heading width={["100%"]} fontWeight={["400"]} fontSize={H2}>
                Diet:
              </Heading>
            )}

            {dietLabels.map((dietLabel) => (
              <Badge key={dietLabel} margin={badgeMargin} colorScheme="green">
                {dietLabel}
              </Badge>
            ))}
          </Flex>

          {/* CAUTIONS IF PRESENT */}
          <Flex flexWrap={["wrap"]}>
            {cautions.length > 0 && (
              <Heading width={["100%"]} fontWeight={["400"]} fontSize={H2}>
                Cautions:
              </Heading>
            )}

            {cautions.map((caution) => (
              <Badge key={caution} margin={badgeMargin} colorScheme="red">
                {caution}
              </Badge>
            ))}
          </Flex>

          {/* NUTRIENTS */}
          <Flex flexWrap={["wrap"]}>
            <Heading
              width={["100%"]}
              fontWeight={["400"]}
              fontSize={H2}
              margin={["0.5em 0 0.5em 0"]}
            >
              Total Nutrients:
            </Heading>
            <Flex
              width={nutrientContainerWidth}
              flexDirection={["column"]}
              marginBottom={standardMargin}
            >
              <Text fontSize={text}>{Math.round(calories.quantity)}</Text>
              <Badge width={["fit-content"]} colorScheme="white">
                calories
              </Badge>
            </Flex>
            <Flex
              width={nutrientContainerWidth}
              flexDirection={["column"]}
              marginBottom={standardMargin}
            >
              <Text fontSize={text}>
                {Math.round(carbs.quantity)} {carbs.unit}
              </Text>
              <Badge width={["fit-content"]} colorScheme="white">
                carbs
              </Badge>
            </Flex>
            <Flex
              width={nutrientContainerWidth}
              flexDirection={["column"]}
              marginBottom={standardMargin}
            >
              <Text fontSize={text}>
                {Math.round(protein.quantity)} {protein.unit}
              </Text>
              <Badge width={["fit-content"]} colorScheme="white">
                protein
              </Badge>
            </Flex>
            <Flex width={nutrientContainerWidth} flexDirection={["column"]}>
              <Text fontSize={text}>
                {Math.round(fat.quantity)} {fat.unit}
              </Text>
              <Badge width={["fit-content"]} colorScheme="white">
                fat
              </Badge>
            </Flex>
            <Flex width={nutrientContainerWidth} flexDirection={["column"]}>
              <Text fontSize={text}>
                {Math.round(cholesterol.quantity)} {cholesterol.unit}
              </Text>
              <Badge width={["fit-content"]} colorScheme="white">
                cholesterol
              </Badge>
            </Flex>
            <Flex width={nutrientContainerWidth} flexDirection={["column"]}>
              <Text fontSize={text}>
                {Math.round(sodium.quantity)} {sodium.unit}
              </Text>
              <Badge width={["fit-content"]} colorScheme="white">
                sodium
              </Badge>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};
