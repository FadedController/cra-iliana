import React, { useContext } from "react";
import { LanguageContext } from "../..";
import ContentSection from "../layout/ContentSection";
import YoutubeIframe from "../layout/YoutubeIframe";

interface IntroVideoProps {}

const IntroVideo: React.FC<IntroVideoProps> = () => {
  const [language] = useContext(LanguageContext);
  const videoId = language === "en" ? "V1FOFnI2hbw" : "nMneQm2bJfk";

  return (
    <ContentSection className="py-4 px-2 lg:px-4">
      <YoutubeIframe
        className="w-full lg:h-[32rem] h-72 lg:h-96 rounded-md"
        videoId={videoId}
      ></YoutubeIframe>
    </ContentSection>
  );
};

export default IntroVideo;
