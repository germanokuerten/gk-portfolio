import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import { Leva, useControls } from "leva";
import Mustang from "../components/Mustang";
import CanvasLoader from "../components/CanvasLoader";
import HackerRoom from "../components/HackerRoom";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";

const Hero = () => {
  //   const controls = useControls({
  //     positionX: {
  //       value: 0.1,
  //       min: -10,
  //       max: 10,
  //     },
  //     positionY: {
  //       value: 0.1,
  //       min: -10,
  //       max: 10,
  //     },
  //     positionZ: {
  //       value: 0.1,
  //       min: -10,
  //       max: 10,
  //     },
  //     rotationX: {
  //       value: 0.1,
  //       min: -10,
  //       max: 10,
  //     },
  //     rotationY: {
  //       value: 0.1,
  //       min: -10,
  //       max: 10,
  //     },
  //     rotationZ: {
  //       value: 0.1,
  //       min: -10,
  //       max: 10,
  //     },
  //     scale: {
  //       value: 1,
  //       min: -10,
  //       max: 10,
  //     },
  // });

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 700 });
  const isTablet = useMediaQuery({ minWidth: 700, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Germano <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Frontend Developer</p>
      </div>

      {/* Three js starts here */}
      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HackerRoom
              // position={[1.5, -7.9, 0.5]}
              // rotation={[-2.9, -3.1, 0]}
              position={sizes.deskPosition}
              scale={sizes.deskScale}
              rotation={[0, -Math.PI, 0]}
            />

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} 
                    scale={0.09}/>
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
