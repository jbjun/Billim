declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.Fc<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
