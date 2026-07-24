import Link from "next/link";
import { ReactNode } from "react";

interface SocialButtonProps {
  href: string;
  children: ReactNode;
  external?: boolean;
}

export function SocialButton({
  href,
  children,
  external = true,
}: SocialButtonProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="
        flex items-center gap-2
        rounded-xl
        border border-white/10
        bg-white/5
        px-5 py-3
        transition-all duration-300
        hover:border-blue-500/50
        hover:bg-blue-500/10
        hover:-translate-y-1
      "
    >
      {children}
    </Link>
  );
}