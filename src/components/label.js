import React from "react";
import classNames from "classnames";

const Label = ({ label, name, labelClassName }) => {
  return (
    <label htmlFor={name} className={classNames("form-label", labelClassName)}>
      {label}
    </label>
  );
};

export default Label;
