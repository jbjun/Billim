import React from "react";

interface IBillimImageProps {
  src: string;
}
function BillimImage({ src }: IBillimImageProps) {
  return (
    <img
      style={{
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "80%",
      }}
      src={src}
    />
  );
}

export default BillimImage;
