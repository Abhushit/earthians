import React from "react";

const Community = () => {
  return (
    <section
      className="relative flex justify-between items-center"
      style={{
        height: "700px",
        backgroundImage: "url('/images/communitybg.jpeg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="z-10 text-white text-[42px] mb-4 ml-[8rem]">
        <h2 className="leading-[3.4rem] mb-4">
          Be part of a creative <br /> community
        </h2>
        <div className="flex space-x-5 mt-2">
          <button
            className="text-[16px] px-4 py-2 rounded-full border border-white"
            style={{
              background: "linear-gradient(180deg, #5AB6CF 0%, #2331FF 100%)",
            }}
          >
            Join Discord Server
          </button>
          <button
            className="text-[16px] px-4 py-2 rounded-full border border-white"
            style={{
              background:
                "linear-gradient(182.48deg, #4A4EE9 2.07%, #F11684 67.48%, #FED775 111.88%)",
            }}
          >
            Join Instagram
          </button>
        </div>
      </div>

      <img
        src="/images/astronaut.svg"
        alt="Astronaut"
        className="absolute right-10 top-1/2 transform -translate-x-[9%] -translate-y-1/2 z-20 w-[40%]" // Changed from w-1/4 to w-1/3
      />
    </section>
  );
};

export default Community;
