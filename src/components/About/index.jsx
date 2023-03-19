import "./index.scss";

import { useEffect, useState, Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Loader from "react-loaders";

import Gif from "../../assets/gifs/1.gif";

import AnimatedLetters from "../AnimatedLetters";
import MiniRoom from "./MiniRoom";

function About() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            Hi! I'm a junior high school student who is learning how to code. I
            find coding to be an exciting and challenging field, and I'm eager
            to explore all that it has to offer. With so many different
            programming languages and technologies to choose from, there's
            always something new to learn.
          </p>
          <p>
            Currently, I'm focused on developing my skills in two areas:
            building discord bots and creating frontend websites. Both of these
            areas have been incredibly rewarding to work on, and I've already
            made a lot of progress. With each project that I complete, I'm able
            to hone my skills and take on even more challenging projects.
          </p>
          <p>
            Overall, I'm really enjoying my journey into the world of coding.
            I'm excited to see where it takes me in the future, and I'm looking
            forward to all the opportunities that await me as I continue to
            learn and grow in this field.
          </p>
          <img src={Gif} alt="gif" className="gif" />
        </div>

        <div className="mini-room">
          <Canvas camera={{ position: [-13, 4, 25] }}>
            <OrbitControls
              autoRotate
              enableRotate={false}
              enableZoom={false}
            />
            <ambientLight intensity={0.3} />
            <directionalLight
              position={[-10, 30, 25]}
              intensity={0.5}
            />
            <Suspense fallback={null}>
              <MiniRoom />
            </Suspense>
          </Canvas>
        </div>
      </div>
      <Loader type="line-scale-pulse-out-rapid" />
    </>
  );
}

export default About;
