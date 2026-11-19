import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}

export function Container({ children, className, wide = false, ...props }: ContainerProps) {
  return (
    <div
      className={cn(wide ? "container-wide" : "container", className)}
      {...props}
    >
      {children}
    </div>
  );
}
