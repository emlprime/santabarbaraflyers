import React from "react";
import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import Logo from "../";

storiesOf("Logo", module).add("Default", () => <Logo />);
