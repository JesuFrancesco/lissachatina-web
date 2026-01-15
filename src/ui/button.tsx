import React from "react";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;
const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`py-2 px-4 hover:cursor-pointer bg-primary rounded-2xl dark:bg-primary/80 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
