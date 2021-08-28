import { Field as FormikField, FieldAttributes } from "formik";
import type { FC } from "react";

export type FieldProps = FieldAttributes<any>;

export const Field: FC<FieldProps> = (props) => (
  <FormikField
    {...props}
    className="dark:bg-code-600 bg-gray-100 dark:focus:bg-code-500 dark:text-white px-3 py-2 text-sm font-light font-mono tracking-wider focus:outline-none focus:ring focus:border-blue-900"
  />
);
