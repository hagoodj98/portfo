import React from "react";
import Image from "next/image";

type ResponsiveProps = {
  repsonsive: string;
};
const Responsive = (props: ResponsiveProps) => {
  return (
    <div className="tw-container tw-mx-auto">
      <div>
        <Image
          src={props.repsonsive}
          className=" tw-mx-auto"
          alt="Project name"
        />
      </div>
    </div>
  );
};

export default Responsive;
