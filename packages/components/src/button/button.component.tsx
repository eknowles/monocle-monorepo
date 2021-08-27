import type { FC } from "react";

export const Button: FC<JSX.IntrinsicElements["button"]> = ({
  children,
  ...props
}) => {
  return (
    <button
      className="p-2 w-full font-mono text-xs font-light text-center uppercase shadow-md bg-blue-700 hover:bg-blue-600 text-white focus:outline-none focus:ring focus:border-blue-900"
      {...props}
    >
      {children}
    </button>
  );
};
