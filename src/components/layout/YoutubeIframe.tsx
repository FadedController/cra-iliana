import React from "react";

interface YoutubeIframeProps {
  videoId: string;
  className?: string;
}

const YoutubeIframe: React.FC<YoutubeIframeProps> = ({
  videoId,
  className,
}) => {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
      className={className}
    ></iframe>
  );
};

export default YoutubeIframe;
