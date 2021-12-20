import React, { forwardRef } from "react";
import { InputBox } from "./style";

const SearchBox = (props, passedref) => {
  const { handleSearch, val } = props;
  return (
    <>
      <InputBox
        ref={passedref}
        onChange={handleSearch}
        value={val}
        type="text"
        placeholder="Search"
      />
    </>
  );
};

export default forwardRef(SearchBox);
