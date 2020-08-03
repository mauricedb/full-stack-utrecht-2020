import React from "react";
import classNames from "classnames";

import Label from "./label";
import TextArea from "./textarea";
import InputError from "./input-error";

const LabeledTextArea = ({ className, ...props }) => {
  return (
    <div className={classNames("form-group", className)}>
      <Label {...props} />
      <TextArea {...props} />
      <InputError {...props} />
    </div>
  );
};

export default LabeledTextArea;
