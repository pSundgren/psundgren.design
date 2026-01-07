import React from "react";

const Section = ({ id, bg, p, bgVideo, children }) => {
  return (
    <div className="relative w-full">
      {bgVideo && (
        <video
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
            objectFit: "cover",
            height: "100%",
            width: "100%",
          }}
          autoPlay
          loop
          muted
          playsInline
          poster={require("../../assets/video/bg-video.mp4")}
        >
          <source
            src={require("../../assets/video/bg-video.mp4")}
            type="video/mp4"
          />
        </video>
      )}
      <section
        id={id}
        className={`inline-flex justify-center content-center ${p} w-full bg-cover ${bg} overflow-hidden`}
      >
        <div id="section_content" className="w-full mx-6 max-w-8xl">
          {children}
        </div>
      </section>
    </div>
  );
};
export default Section;
