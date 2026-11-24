import React from "react";

export interface AnimatedGradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedGradientText({
  children,
  className = "",
  style,
  ...props
}: AnimatedGradientTextProps) {
  return (
    <span
      className={`animated-gradient-text ${className}`}
      style={style}
      {...props}
    >
      {children}
    </span>
  );
}

export default AnimatedGradientText;
