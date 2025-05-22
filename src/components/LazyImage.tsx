import { Suspense, useState, useEffect } from "react";

const LazyImage = ({ src, fallback, imageProps }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    // setTimeout(() => {
    //   img.onload = () => setImageLoaded(true);
    // }, 5000);
    img.onload = () => setImageLoaded(true);
  }, [src]);

  return imageLoaded ? <img src={src} {...imageProps} /> : fallback;
};

export default LazyImage;
