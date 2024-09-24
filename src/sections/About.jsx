import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("germanokuerten@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I am Germano</p>
              <p className="grid-subtext">
                A multimedia artist with over 20 years of experience and a
                frontend developer specializing in React.js, React Native,
                Next.js, Three.js, and Web3 integrations.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:w-[276px] h-fit object-contain "
            />
            <div>
              <p className="grid-headtext">Tools</p>
              <p className="grid-subtext">
              JavaScript, TypeScript, HTML, CSS, React, Next, React Native, Express, Node, Mongo DB, PostgreSQL, Adobe Photoshop, Adobe XD, Figma, Adobe Premiere, DaVinci Resolve, Ableton Live
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326p] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelDotRadius={0.5}
                labelResolution={11}
                labelSize={2.5}
                labelsData={[
                  {
                    lat: 34.052235,
                    lng: -118.243683,
                    text: "California",
                  },
                  {
                    lat: -28.46667,
                    lng: -49.00694,
                    text: "Santa Catarina",
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">Available Remotely</p>
              <p className="grid-subtext">
                📍 Santa Catarina, Brazil and California, USA.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Art and Code</p>
              <p className="grid-subtext">
              An artist and entrepreneur at heart, I’ve spent over two decades
                weaving creativity with technology across multiple disciplines.
                From orchestrating dance floors around the world as a DJ and
                music producer to directing award-winning films and developing
                immersive digital experiences, my work is driven by a passion
                for storytelling and innovation. As a multimedia artist and
                frontend developer, I bring ideas to life through the power of
                JavaScript, React, Three.js, and Web3—creating experiences that
                transcend boundaries and engage audiences on every level. My
                journey is a fusion of art and code, always striving to push the
                limits of what’s possible.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png" alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">
                Contact Me
              </p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradiant text-white">
                  germanokuerten@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
