import { FormControl, Input } from "@chakra-ui/react";

export const SearchBar = ({ value, onChange }) => {
  return (
    <FormControl
      width={["100vw", "30em"]}
      marginBottom={"1em"}
      backgroundColor={"white"}
      color={"black"}
      borderRadius={"0.375rem"}
    >
      <Input value={value} onChange={onChange} placeholder="Search recipes" />
    </FormControl>
  );
};
