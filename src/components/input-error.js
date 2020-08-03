import React from "react";
import { getIn, useFormikContext } from "formik";

const InputError = ({ name }) => {
  const { errors, touched } = useFormikContext();
  const error = getIn(errors, name);
  const isTouched = getIn(touched, name);

  if (error && isTouched) {
    return <div className="invalid-feedback">{error}</div>;
  }

  return null;
};

export default InputError;
