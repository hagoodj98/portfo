import React from "react";

type SmallCardProps = {
  subtitle: string;
  smallcardtext: string;
};
const SmallCard = (props: SmallCardProps) => {
  return (
    <div>
      <div className="bg-orange w-5/6 text-white rounded-lg p-5">
        <h4>{props.subtitle}</h4>
        <p>{props.smallcardtext}</p>
      </div>
    </div>
  );
};
export default SmallCard;
