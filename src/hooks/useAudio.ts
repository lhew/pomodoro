import { useRef } from "react";

const useAudio = (src = "No sound") => {
    const audio = useRef(new Audio());
    audio.current.autoplay = false;
  
    if (src !== "No sound") {
      audio.current.src = src;
    }
  
    return audio.current;
  };

export default useAudio;