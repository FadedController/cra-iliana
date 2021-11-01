import Markdown from "markdown-to-jsx";
import React, { useContext, useState } from "react";
import { LanguageContext } from "../..";
import { useData } from "../hooks/useData";
import ContentSection from "../layout/ContentSection";
import Heading2 from "../layout/Heading2";
import { urls } from "../../data/youtube.json";

interface VideoCarouselProps {}

const VideoCarousel: React.FC<VideoCarouselProps> = () => {
  const iframes = urls.map((u) => (
    <iframe
      src={u}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="rounded-xl video"
    ></iframe>
  ));

  const [language] = useContext(LanguageContext);
  const [markdown, loading] = useData(`/${language}/video-carousel.md`);
  const [video, setVideo] = useState(0);

  const nextVideo = () => {
    if (video + 1 === iframes.length) {
      setVideo(0);
    } else {
      setVideo(video + 1);
    }
  };

  const prevVideo = () => {
    if (video === 0) {
      setVideo(iframes.length - 1);
    } else {
      setVideo(video - 1);
    }
  };

  return (
    <div>
      <ContentSection className="flex-col items-center justify-center h-full space-y-6">
        {!loading && (
          <Markdown
            options={{
              wrapper: ({ children }) => {
                return (
                  <div className="flex items-center justify-center w-full">
                    {children}
                  </div>
                );
              },
              overrides: {
                h2: {
                  component: Heading2,
                },
              },
            }}
          >
            {markdown}
          </Markdown>
        )}
        <div className="flex flex-col items-center justify-start space-y-4 z-0 flex-1">
          <div className="flex flex-col items-center justify-center space-x-4 space-y-4 z-50">
            <div className="bg-gray-50 flex items-center justify-center rounded-xl relative">
              <div className="loading absolute top-24 sm:top-32"></div>
              {iframes[video]}
            </div>
            <div className="flex space-x-16 w-full items-center justify-center">
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={prevVideo}
              >
                <div className="flex items-center justify-center transform rotate-180">
                  <span className="material-icons-outlined transform text-4xl cursor-pointer text-transparent bg-clip-text bg-gradient-to-br from-[#e0c571] to-[#aa8939]">
                    arrow_forward_ios
                  </span>
                </div>
                <p className="text-lg text-transparent bg-clip-text bg-gradient-to-br from-[#e0c571] to-[#aa8939]">
                  Previous Video
                </p>
              </div>
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={nextVideo}
              >
                <p className="text-lg text-transparent bg-clip-text bg-gradient-to-br from-[#e0c571] to-[#aa8939]">
                  Next Video
                </p>
                <span className="material-icons-outlined text-4xl cursor-pointer text-transparent bg-clip-text bg-gradient-to-br from-[#e0c571] to-[#aa8939]">
                  arrow_forward_ios
                </span>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  );
};

export default VideoCarousel;
