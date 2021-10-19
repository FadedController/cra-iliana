import React from "react";

interface contentSectionProps {
  className?: string;
}

/**
 * @param children Rendered inside the component
 * @param className CSS classes applied to the most inner div
 */

const ContentSection: React.FC<contentSectionProps> = ({
  children,
  className,
}) => {
  return (
    <section className="flex w-full justify-center">
      <div className={`max-w-7xl w-full flex ${className}`}>{children}</div>
    </section>
  );
};

export default ContentSection;
