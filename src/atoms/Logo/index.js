import React, {useState} from "react";
import SvgLogo from "../../Icons/Logo";
import Hoop from "../../Icons/Hoop";
import {MorphReplace} from "react-svg-morph";

const Logo = () => {
  const [checked, setChecked] = useState(false);
  setTimeout(() => setChecked(true), 2000);
  return (
    <div title="Santa Barbara Flyers Dog Sports">
      <MorphReplace width={56} height={56}>
        {checked ? <SvgLogo key="final" /> : <Hoop key="initial" />}
      </MorphReplace>
    </div>
  );
};

export default Logo;
