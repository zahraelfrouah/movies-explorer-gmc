import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

// Button variants using class-variance-authority
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 hover:shadow-md active:shadow-sm",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white border border-blue-700 hover:bg-blue-500",
        destructive: "bg-red-600 text-white border border-red-700 hover:bg-red-500",
        outline: "border border-gray-400 bg-white text-gray-900 hover:bg-gray-50",
        secondary: "bg-gray-100 text-gray-900 border border-gray-300 hover:bg-gray-200",
        ghost: "bg-transparent border border-transparent text-gray-900 hover:bg-gray-100",
      },
      size: {
        default: "min-h-9 px-4 py-2",
        sm: "min-h-8 rounded-md px-3 text-xs",
        lg: "min-h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
