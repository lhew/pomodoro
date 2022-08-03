import React, { ReactNode } from "react";

interface FormFieldProps {
  children: ReactNode;
}

const FormField = ({ children }: FormFieldProps) => {
  return <div className="flex grid-y-2 flex-col  mb-2">{children}</div>;
};

export default FormField;
