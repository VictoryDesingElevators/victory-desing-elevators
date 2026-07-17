import { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  >;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  className?: string;
}

export function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}: ButtonProps) {

  const styles =
    variant === "primary"
      ? "bg-primary text-foreground hover:bg-secondary"
      : "border-2 border-primary text-primary hover:bg-primary hover:text-foreground";

  //  enlace
  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`${styles}
          inline-flex
          items-center
          justify-center
          px-8
          py-4
          rounded-xl
          font-semibold
          transition-all
          duration-300
          shadow-lg
          hover:shadow-xl
          hover:-translate-y-1
          ${className}`}
      >
        {children}
      </a>
    );
  }

  // botón 
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles}
        inline-flex
        items-center
        justify-center
        px-8
        py-4
        rounded-xl
        font-semibold
        transition-all
        duration-300
        shadow-lg
        hover:shadow-xl
        hover:-translate-y-1
        cursor-pointer
        ${className}`}
    >
      {children}
    </button>
  );
}