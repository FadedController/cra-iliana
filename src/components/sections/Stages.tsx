import React from "react";
import ContentSection from "../layout/ContentSection";

interface StagesProps {}

const Stages: React.FC<StagesProps> = ({ children }) => {
  return (
    <ContentSection className="md:space-x-2 flex-col md:flex-row px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">{children}</div>
    </ContentSection>
  );
};

export default Stages;
