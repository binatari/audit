import React from "react";

const SearchInput = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return (
    <input
      {...props}
      className="focus-visible:outline-none py-2 focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed  px-2 disabled:opacity-50"
    />
  );
};

export default SearchInput;
