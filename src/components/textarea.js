import React from "react";
import { Field, getIn, useFormikContext } from "formik";
import classNames from "classnames";

const Input = ({ label, name, rows, controlClassName, ...props }) => {
  const { errors } = useFormikContext();
  const error = getIn(errors, name);

  return (
    <>
      <Field
        {...props}
        id={name}
        name={name}
        component="textarea"
        rows={rows}
        className={classNames("form-control", controlClassName, {
          "is-invalid": error,
          "is-valid": !error,
        })}
      />
    </>
  );
};

export default Input;
