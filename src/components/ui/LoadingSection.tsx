import React from "react";

interface LoadingSectionProps {}

const LoadingSection: React.FC<LoadingSectionProps> = () => {
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-tr bg-gray-50 flex items-center justify-center">
      <div className="loading"></div>
    </div>
  );
};

export default LoadingSection;
