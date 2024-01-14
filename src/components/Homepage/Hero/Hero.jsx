import EarthImage from "/public/images/earth-optimized.jpg";
import Image from "next/image";
import AuthButton from "./AuthButton";
const Hero = () => {
  return (
    <div className="max-w-[90rem] h-[90%] m-auto flex justify-between items-center">
      <div className="text-white flex items-center justify-between">
        <div className="w-1/2 inline-block">
          <p className="hero-unleash-text font-outfit">
            Unleash your Creativity <br /> with the power of
          </p>

          <p className="glowing-text text-[47px] font-outfit">Earthians AI</p>

          <p className="font-outfit">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            delectus, quisquam molestias tempore deleniti maxime est quaerat.
          </p>
          <br />
          <AuthButton/>
        </div>
        <div className=" inline-block">
          <Image
            className="h-[450px] w-[450px] flex-shrink-0 earth-glowing"
            src={EarthImage}
            height={4096}
            width={4096}
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
