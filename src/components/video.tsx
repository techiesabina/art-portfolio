"use client";

import { useInView } from "react-intersection-observer";
import { useCallback, useEffect, useRef } from "react";

interface VideoProps {
  src: string;
  fallbackImg: string;
}

export const Video = ({ src, fallbackImg }: VideoProps) => {
  const [inViewRef, inView] = useInView({
    threshold: 0.5,
  });
  const videoRef = useRef<HTMLVideoElement>(null);

  const setRefs = useCallback(
    (node: HTMLVideoElement | null) => {
      // Ref's from useRef needs to have the node assigned to `current`
      videoRef.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);

      if (node) {
        node.addEventListener("click", function () {
          if (this.paused) {
            this.play();
          } else {
            this.pause();
          }
        });
      }
    },
    [inViewRef]
  );

  useEffect(() => {
    if (!videoRef || !videoRef.current) {
      return;
    }

    if (inView) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [inView]);

  return (
    <div className="relative">
      <div
        style={{
          paddingBottom: (2 / 2.67) * 100 + "%", // keeps aspect ratio
        }}
        className=""
      />
      <video
        className="absolute top-0 left-0 w-full h-full cursor-pointer"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        ref={setRefs}
        poster={fallbackImg}
      >
        {/* #t=0.001 is needed to show thumbnail on ios devices */}
        <source src={`${src}#t=0.001`} type="video/mp4" />
        <p> Sorry, your browser doesn&apos;t support embedded videos.</p>
      </video>
    </div>
  );
};
