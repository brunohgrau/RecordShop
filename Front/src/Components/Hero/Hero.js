import React from "react";

// Blend Mode Technique

function Hero() {
  return (
    <>
      <div class="flex">
        <div class="mx-auto mt-0  ">
          <div class="mt-6 flex flex-col ">
            <div class="relative w-full max-w-4xl h-24 bg-blue-200 rounded-xl bg-texture bg-cover bg-center bg-blend-color-burn">
              <h1 class="p-8 max-w-full text-5xl font-black uppercase text-white  mix-blend-overlay filter blur-px">
                Welcome
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
