import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./App.css";
import { myaudio } from "./component/data/convertToBase64";

function App() {
  const [music, setMusic] = useState<HTMLAudioElement>();
  const [myAnalyser, setMyAnalyser] = useState<any>();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  let audioSource;
  let analyser: any;

  let ctx: CanvasRenderingContext2D | null = null;
  const canvasWidth = window.innerWidth;
  const canvasHeight = window.innerHeight;

  useEffect(() => {
    if (canvasRef?.current) {
      ctx = canvasRef.current.getContext("2d");
    }
  }, [canvasRef?.current]);

  useLayoutEffect(() => {
    const audio1 = document.getElementById("audio1") as HTMLAudioElement;
    audio1.src = myaudio;
    setMusic(audio1);
    const audioCtx = new window.AudioContext();

    //declare source just once
    audioSource = audioCtx.createMediaElementSource(audio1);
    //connect analyser to source
    analyser = audioCtx.createAnalyser();
    audioSource.connect(analyser);
    analyser.connect(audioCtx.destination);
    analyser.fftSize = 64;
    setMyAnalyser(analyser);
  }, []);

  const playMusic = () => {
    if (!music) {
      return;
    }
    music.play();
    if (!myAnalyser) {
      return;
    }
    console.log(myAnalyser);
    const bufferLength = myAnalyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const barWidth = canvasWidth / bufferLength;
    let barHeight;
    let x;

    function animate() {
      x = 0;
      if (!ctx) return;
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      myAnalyser.getByteFrequencyData(dataArray);
      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        ctx.fillStyle = "white";
        ctx.fillRect(x, canvasHeight - barHeight, barWidth, barHeight);
        x += barWidth;
      }

      requestAnimationFrame(animate);
    }
    animate();
  };

  return (
    <>
      <div id="container" onClick={playMusic}>
        <audio id="audio1" controls></audio>
        <canvas
          id="canvas1"
          ref={canvasRef}
          height={canvasHeight}
          width={canvasWidth}
        />
      </div>
    </>
  );
}

export default App;
