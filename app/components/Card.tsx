import React from "react";

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

const Card = ({ children, className }: CardProps) => {
  return <div className={`  tw-text-base tw-p-5 ${className}`}>{children}</div>;
};

export default Card;
