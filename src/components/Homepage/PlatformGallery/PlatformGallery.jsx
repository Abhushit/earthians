import Image from "next/image";
import GridImage1 from "/public/images/gridimage1.png";
import GridImage2 from "/public/images/gridimage2.png";
import GridImage3 from "/public/images/gridimage3.png";
import GridImage4 from "/public/images/gridimage4.png";
import GridImage5 from "/public/images/gridimage5.png";
import GridImage6 from "/public/images/gridimage6.png";
import GridImage7 from "/public/images/gridimage7.png";
import GridImage8 from "/public/images/gridimage8.png";

const PlatformGallery = () => {
  return (
    <div className="bg-theme pt-32">
      <div className="text-center text-white py-10">
        <h2 className="text-[47px] font-outfit font-medium leading-[57.4px]">
          Platform Gallery
        </h2>
      </div>
      <div className="flex items-center flex-col pb-12">
        <div className="flex flex-wrap gap-3">
          <Image
            className="w-[610px] h-[610px]"
            src={GridImage1}
            height={500}
            width={500}
            alt="image1"
          />
          <div className="flex flex-col">
            <Image
              className="w-[305px] h-[299px] mb-3"
              src={GridImage2}
              height={500}
              width={500}
              alt="image2"
            />

            <Image
              className="w-[305px] h-[299px]"
              src={GridImage3}
              height={500}
              width={500}
              alt="image3"
            />
          </div>
        </div>
        <div className="flex mt-3">
          <Image
            className="w-[457.5px] h-[451.5px]"
            src={GridImage4}
            height={500}
            width={500}
            alt="image4"
          />
          <Image
            className="w-[457.5px] h-[451.5px] ml-3"
            src={GridImage5}
            height={500}
            width={500}
            alt="image5"
          />
        </div>
        <div className="flex mt-3">
          <div className="flex flex-col">
            <Image
              className="w-[305px] h-[299px] mb-3"
              src={GridImage6}
              height={500}
              width={500}
              alt="image6"
            />
            <Image
              className="w-[305px] h-[299px]"
              src={GridImage7}
              height={500}
              width={500}
              alt="image7"
            />
          </div>
          <Image
            className="w-[610px] h-[610px] ml-3"
            src={GridImage8}
            height={500}
            width={500}
            alt="image8"
          />
        </div>
      </div>
    </div>
  );
};

export default PlatformGallery;
