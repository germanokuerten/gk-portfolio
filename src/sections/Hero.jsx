import React, { useState } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import { Leva, useControls } from "leva";
import Mustang from "../components/Mustang";
import CanvasLoader from "../components/CanvasLoader";
import HackerRoom from "../components/HackerRoom";
import TurnTable from "../components/TurnTable";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
import MacBookPro from "../components/MacBookPro";
import Camera from "../components/Target";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 700 });
  const isTablet = useMediaQuery({ minWidth: 700, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space  z-20">
        <p className="sm:text-3xl text-2xl font-bold text-white text-center font-generalsans">
          I am <span className="hero_tag_2">Germano Kuerten</span>
          {/* <span className="waving-hand">👋</span> */}
        </p>
        <p className="hero_tag text-gray_gradient">
          Multimedia <span className="hero_tag_2">Artist</span> & Frontend{" "}
          <span className="hero_tag_2">Developer</span>
        </p>
      </div>

      {/* Three js starts here */}
      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              {/* <HackerRoom
                position={sizes.deskPosition}
                scale={sizes.deskScale}
                rotation={[0, -Math.PI, 0]}
              /> */}
              <MacBookPro
                position={[0, -2, 2]}
                scale={17}
                rotation={[0, 1.6, 0.2]}
                brightness={1.7}
                onClick={() =>
                  window.open("https://github.com/germanokuerten", "_blank")
                }
              />
            </HeroCamera>
            <group>
              <Camera
                position={sizes.targetPosition}
                rotation={[0, 1.6, 0.2]}
                scale={0.06}
                onClick={() =>
                  window.open("https://vimeo.com/germanokuerten", "_blank")
                }
              />
              <TurnTable
                position={sizes.reactLogoPosition}
                scale={0.09}
                onClick={() =>
                  window.open("https://soundcloud.com/manoofficial", "_blank")
                }
              />
              {/* <Cube position={sizes.cubePosition}/> */}
              {/* <Rings position={sizes.ringPosition} /> */}
            </group>
            <ambientLight intensity={2} />
            <directionalLight position={[10, 10, 10]} intensity={2} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
