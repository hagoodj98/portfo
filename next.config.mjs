/** @type {import('next').NextConfig} */
import { fileURLToPath } from "url";
import path from "path";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  sassOptions: {
    // Allow bare Bootstrap imports (e.g. @import "bootstrap/scss/...") to resolve from node_modules
    loadPaths: [path.join(__dirname, "node_modules")],
    silenceDeprecations: [
      "import",
      "global-builtin",
      "color-functions",
      "mixed-decls",
    ],
    quietDeps: true,
  },
};

export default nextConfig;
