import React from "react";

const PERNSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="tw-bg-yellow tw-mt-28 tw-py-20">
      <div className="tw-container tw-mx-auto tw-flex tw-flex-col tw-justify-center tw-p-5">
        <div className="md:tw-w-1/2">{children}</div>
      </div>
    </div>
  );
};

export default PERNSection;
