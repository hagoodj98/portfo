declare module "react-image-magnifiers" {
  import * as React from "react";
  export interface MagnifierProps {
    imageSrc: string;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
    // Add more props as needed from the docs
  }
  export const Magnifier: React.FC<MagnifierProps>;
}
