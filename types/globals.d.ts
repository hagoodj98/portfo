// Allow importing global CSS/SCSS files without type errors
declare module "*.css";
declare module "*.scss";

declare module "*.png" {
  const value: import("next/image").StaticImageData;
  export default value;
}

declare module "*.jpg" {
  const value: import("next/image").StaticImageData;
  export default value;
}

declare module "*.jpeg" {
  const value: import("next/image").StaticImageData;
  export default value;
}

declare module "*.webp" {
  const value: import("next/image").StaticImageData;
  export default value;
}

declare module "*.gif" {
  const value: import("next/image").StaticImageData;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

declare module "tailwind-scrollbar" {
  import type { PluginCreator } from "tailwindcss/types/config";
  const plugin: PluginCreator;
  export default plugin;
}
