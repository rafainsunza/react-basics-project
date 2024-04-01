import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

export const NotFoundCard = () => {
  return (
    <Alert status="error" borderRadius={"0.375rem"}>
      <AlertIcon />
      <AlertTitle color={"black"}>No recipes found</AlertTitle>
    </Alert>
  );
};
