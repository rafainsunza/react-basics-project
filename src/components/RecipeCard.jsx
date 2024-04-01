import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Text,
  Heading,
  Flex,
  Badge,
} from "@chakra-ui/react";

export const RecipeCard = ({
  imageUrl,
  mealType,
  title,
  healthLabels,
  dietLabels,
  dishType,
  cautions,
  onCardClick,
}) => {
  return (
    <div onClick={() => onCardClick({})}>
      <Card
        _hover={{ cursor: "pointer" }}
        height={["35em", null, "32.5em"]}
        borderRadius={"3%"}
        backgroundColor={["white"]}
        marginTop={["0.5em", "1em"]}
        marginBottom={["0.5em", "1em"]}
      >
        <CardHeader padding={["0"]}>
          <Image
            src={imageUrl}
            height={["18em", null, "14em"]}
            width={["100%"]}
            borderRadius={"3% 3% 0 0"}
            objectFit={"cover"}
          />
          <Text
            padding={["0.5em"]}
            textAlign={["center"]}
            fontSize={["0.8em", "0.9em"]}
            color={"grey"}
            fontWeight={["600"]}
          >
            {mealType.toUpperCase()}
          </Text>
          <Heading
            padding={["0.5em"]}
            textAlign={["center"]}
            fontSize={["1.4em"]}
            fontWeight={["600"]}
          >
            {title}
          </Heading>
        </CardHeader>

        {/* DISPLAY VEGAN/VEGETARIAN LABELS IF PRESENT */}
        <CardBody padding={["0 0.5em 0.5em 0.5em"]}>
          <Flex justifyContent={["center"]} margin={["0.5em"]}>
            {healthLabels.map(
              (healthLabel) =>
                (healthLabel.includes("Vegan") ||
                  healthLabel.includes("Vegetarian")) && (
                  <Badge
                    key={healthLabel}
                    colorScheme="purple"
                    fontSize={["0.8em"]}
                    marginRight={["0.5em"]}
                  >
                    {healthLabel}
                  </Badge>
                )
            )}
          </Flex>

          {/* DISPLAY DIETLABELS */}
          <Flex justifyContent={["center"]} margin={["0.5em"]}>
            {dietLabels.map((dietLabel) => (
              <Badge
                key={dietLabel}
                marginRight={["0.5em"]}
                colorScheme="green"
                fontSize={["0.8em"]}
              >
                {dietLabel.toUpperCase()}
              </Badge>
            ))}
          </Flex>

          {/* DISPLAY DISHTYPE WITH EACH WORD CAPITALIZED */}
          <Text textAlign={["center"]} fontSize={["1em"]}>
            Dish:{" "}
            <strong>
              {dishType.replace(/\b\w/g, (match) => match.toUpperCase())}
            </strong>
          </Text>

          {/* DISPLAY TEXT IF THERE ARE CAUTIONS PRESENT */}
          {cautions.length > 0 && (
            <Text textAlign={["center"]} fontSize={["1em"]} margin={["0.25em"]}>
              Cautions:
            </Text>
          )}

          {/*  DISPLAY THE CAUTIONS */}
          <Flex justifyContent={["center"]} flexWrap={["wrap"]}>
            {cautions.map((caution) => (
              <Badge
                key={caution}
                marginTop={["0.5em"]}
                marginRight={["0.5em"]}
                colorScheme="red"
                fontSize={["0.8em"]}
              >
                {caution}
              </Badge>
            ))}
          </Flex>
        </CardBody>
      </Card>
    </div>
  );
};
