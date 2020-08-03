import React from "react";
import classNames from "classnames";

import Label from "./label";
import Input from "./input";
import InputError from "./input-error";

const LabeledInput = ({ className, ...props }) => {
  return (
    <div className={classNames("form-group", className)}>
      <Label {...props} />
      <Input {...props} />
      <InputError {...props} />
    </div>
  );
};

export default LabeledInput;
