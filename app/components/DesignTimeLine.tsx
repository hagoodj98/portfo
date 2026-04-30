import React, { ReactNode } from "react";

const DesignTimeLine = ({ children }: { children?: ReactNode }) => {
  return (
    <div>
      <div className="tw-mb-8">
        {children}
        <div className="tw-w-56">
          <hr className="tw-h-2 tw-bg-bluegreen" />
        </div>
        <p className="md:tw-w-2/3 tw-mt-3">
          The wireframes moved through three structured phases: exploration,
          refinement, and finalization. Each phase tightened layout decisions,
          clarified flow, and reduced friction before development.
        </p>
      </div>

      <div className="tw-hidden md:tw-flex tw-items-center tw-gap-3 tw-mb-8">
        <span className="tw-bg-[#0E1424] tw-text-white tw-px-3 tw-py-1 tw-rounded-full tw-text-xs">
          Phase 01
        </span>
        <div className="tw-flex-1 tw-h-[2px] tw-bg-[#243255]" />
        <span className="tw-bg-[#113058] tw-text-white tw-px-3 tw-py-1 tw-rounded-full tw-text-xs">
          Phase 02
        </span>
        <div className="tw-flex-1 tw-h-[2px] tw-bg-[#243255]" />
        <span className="tw-bg-bluegreen tw-text-white tw-px-3 tw-py-1 tw-rounded-full tw-text-xs">
          Phase 03
        </span>
      </div>
    </div>
  );
};

export default DesignTimeLine;
