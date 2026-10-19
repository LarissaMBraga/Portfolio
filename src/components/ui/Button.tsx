import type { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost" | "ghost-dark" | "secondary";
  target?: string;
  rel?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
}

export function Button({
  children,
  href,
  variant = "primary",
  target,
  rel,
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0";

  const styles = {
    primary:
      "bg-dark text-white hover:bg-accent",
    ghost:
      "border border-black/10 bg-white text-dark hover:border-black/30 hover:bg-black/5",
    "ghost-dark":
      "border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10",
    secondary:
      "border border-white/50 bg-transparent text-white hover:border-white hover:bg-white/10",
  };

  const combinedClassName = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        target={target}
        rel={rel}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={combinedClassName}
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
    >
      {children}
    </button>
  );
}