import React from "react";
type ImageProps = {
  src: string;
  fallback: string;
  alt: string;
  type?: string;
};

export const Image: React.FC<ImageProps> = ({
  src,
  fallback,
  type = "image/webp",
  alt,
}) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} alt={alt} />
    </picture>
  );
};
