import React from "react";
import ContentSection from "../layout/ContentSection";

interface StagesProps {}

const Stages: React.FC<StagesProps> = ({ children }) => {
  return (
    <ContentSection className="lg:space-x-2 flex-col lg:flex-row px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">{children}</div>
    </ContentSection>
  );
};

export default Stages;
