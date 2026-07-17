import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
}

export function SectionTitle({
  children,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="text-center mb-16">

      <h2 className="text-4xl md:text-5xl font-bold text-foreground">

        {children}

      </h2>

      <div className="w-24 h-1 bg-primary rounded-full mx-auto mt-5"></div>

      {subtitle && (

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-8">

          {subtitle}

        </p>

      )}

    </div>
  );
}