import React from "react";
import Image from "next/image";

const ArtworkSection = () => {
  return (
    <div className="bg-black opacity-90 font-san tracking-wider relative">
      <div
        className=""
        style={{ backgroundImage: "url('/images/galaxy.svg')" }}
      >
        <div className="relative z-20">
          <div className="text-white mx-auto py-12 px-6">
            <div className="text-center mt-20 mb-20">
              <h2 className="text-4xl font-bold mb-4">
                Create your next artwork, with the power of
              </h2>
              <p className="text-white font-bold text-4xl mb-8 text-glow border-blue-600">
                Earthians AI
              </p>
              <button
                style={{
                  background:
                    "linear-gradient(180deg, #5AB6CF 0%, #2331FF 100%)",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "9999px",
                  border: "1px solid white",
                }}
              >
                Start using Earthians AI
              </button>
            </div>
          </div>
        </div>
        <div
          className="flex justify-center items-center"
          style={{ height: "200px" }}
        >
          <Image
            src="/images/moon.svg"
            alt="Moon"
            width={550}
            height={550}
            className="absolute z-20 -bottom-60"
          />
        </div>
      </div>
    </div>
  );
};

export default ArtworkSection;
