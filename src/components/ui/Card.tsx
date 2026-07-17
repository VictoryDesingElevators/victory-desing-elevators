import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export function Card({
  children,
}: CardProps) {
  return (
    <div
      className="
      bg-background
      rounded-3xl
      shadow-lg
      hover:shadow-2xl
      transition-all
      duration-300
      hover:-translate-y-2
      p-8"
    >
      {children}
    </div>
  );
}