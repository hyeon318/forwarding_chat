import React, { HtmlHTMLAttributes } from "react";

export default function Label({ children, ...props }: HtmlHTMLAttributes<HTMLLabelElement>) {
  return <label {...props}>{children}</label>;
}
