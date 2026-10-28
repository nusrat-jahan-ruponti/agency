import React from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import heroImage from "../../assets/hero.png";
import heroImage1 from "../../assets/hero1.png";
import { IoIosPlay } from "react-icons/io";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-[#f3f6ff] dark:bg-gray-900">
      <Container>
        <div className="flex flex-col py-12 sm:py-16 lg:flex-row lg:py-[128px]">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex px-7 py-7 items-center justify-center rounded-full bg-white text-sm text-gray-800 shadow-md">
                <IoIosPlay className="w-5 h-5" />
              </span>
              <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Digital Agency Promo
              </span>
            </div>

            <h1 className="text-6xl font-extrabold leading-[1.08] tracking-tight text-gray-950 dark:text-white md:text-7xl">
              We{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                Transform
              </span>
              <br />
              Your Ideas into
              <br />
              Reality
            </h1>

            <div className="mt-8 flex w-full flex-col items-start gap-5 sm:mt-10 sm:flex-row sm:gap-6 lg:mt-14">
              <div className="shrink-0">
                <Button>Work with us</Button>
              </div>

              <p className="w-full min-w-0 max-w-md pt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                Silicon is a leading full-service digital agency based in New
                York. We make mobile apps, websites & brands, that people
                appreciate all around the world.
              </p>
            </div>
          </div>
          <div className="relative mt-10 w-full min-w-0 lg:mt-0 lg:w-1/2">
            <img src={heroImage} alt="Hero" />
            <div className="absolute top-[15%] left-[10%] w-[90%] sm:left-[15%] sm:w-[100%] lg:top-[150px] lg:left-65 lg:w-[636px] lg:h-[490px]">
              <img src={heroImage1} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
