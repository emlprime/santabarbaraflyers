import React from "react";
import { storiesOf } from "@storybook/react";
import SelectFilter from "../";

storiesOf("SelectFilter", module)
  .add("Rings", () => {
    const filters = ["Ring 1", "Ring 2"];

    return <SelectFilter filters={filters} />;
  })

  .add("Levels", () => {
    const filters = ["Masters", "Performance"];

    return <SelectFilter filters={filters} />;
  })

  .add("Events", () => {
    const filters = ["Jumpers", "Gamblers"];

    return <SelectFilter filters={filters} />;
  })

  .add("Height", () => {
    const filters = ["20", "24"];

    return <SelectFilter filters={filters} />;
  });
