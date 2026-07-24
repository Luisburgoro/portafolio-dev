import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-md
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500/40
        hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}