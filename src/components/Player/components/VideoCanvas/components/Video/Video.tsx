import { forwardRef } from "react";
import { URLS } from "../../../../../../shared";

export const Video = forwardRef<HTMLVideoElement>((props, ref) => {
  return (
    <video
      preload="auto"
      src={URLS.stream}
      ref={ref}
      playsInline
      autoPlay
      hidden
    />
  );
});

Video.displayName = "Video";
