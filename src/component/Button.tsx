import React from "react";

export const Button = <T extends React.ElementType>({
  className,
  size,
  As = "button",
  text = "Button",
  ...props
}: {
  className?: string;
  size?: string;
  As?: React.ElementType;
  text?: string;
} & React.ComponentPropsWithoutRef<T>) => {
  return (
    <As className={`size-${size} ${className}`} {...props}>
      {text}
    </As>
  );
};
