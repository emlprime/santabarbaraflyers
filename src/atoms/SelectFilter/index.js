import React, { useState } from "react";
import SvgLogo from "../../Icons/Logo";
import Hoop from "../../Icons/Hoop";
import { MorphReplace } from "react-svg-morph";

const SelectFilter = ({ filters, onChange }) => {
  return (
    <select onChange={onChange}>
      {filters.map(filter => (
        <option>{filter}</option>
      ))}
    </select>
  );
};

export default SelectFilter;
