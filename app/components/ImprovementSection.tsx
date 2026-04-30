import React, { ReactNode } from "react";

type ImprovementSectionProps = {
  children: ReactNode;
};

const ImprovementSection = ({ children }: ImprovementSectionProps) => {
  return (
    <div className="tw-container tw-my-5 md:tw-py-0 tw-p-6 tw-mx-auto">
      <h3 className="tw-text-2xl md:tw-text-3xl md:tw-mt-0 tw-text-bluegreen tw-font-boldonse">
        Challenges and Future Improvements
      </h3>
      {children}
    </div>
  );
};

export default ImprovementSection;
