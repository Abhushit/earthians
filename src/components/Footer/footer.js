import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="bg-black font-san tracking-wider relative z-10">
      <div
        className="relative bg-cover bg-center bg-no-repeat z-20"
        style={{ backgroundImage: "url('/images/footerbg.svg')" }}
      >
        <div className="relative text-white mx-auto py-12 ">
          <div className="flex  justify-around gap-8">
            <div className="leading-8 min-w-[200px]">
              <Image
                className="pb-8"
                src="/images/earthians-logo.png"
                alt="Logo"
                width={300}
                height={300}
              />
              <p className="mt-4 mb-8 leading-8">
                Lorem ipsum dolor sit amet consectetur adipisicing <br />
                elit. Nemo sed iure asperiores
              </p>
              <p className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faLocationDot} className="h-5 w-5" /> Biratnagar,Nepal
              </p>
              <p className="flex gap-2 mt-2 items-center">
                <FontAwesomeIcon icon={faEnvelope}  className="h-5 w-5"/> infoclick@gmail.com
              </p>
              <p className="flex gap-2 mt-2 items-center">
                <FontAwesomeIcon icon={faPhone}  className="h-5 w-5"/> +977 98XXXXXXXX
              </p>
            </div>
            <div className="my-10 leading-8 min-w-[200px]">
              <h5 className="font-bold text-lg mb-4">Our Services</h5>
              <ul>
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
                <li>Service 4</li>
                <li>Service 5</li>
              </ul>
            </div>
            <div className="my-10 leading-8 min-w-[200px]">
              <h5 className="font-bold text-lg mb-4">About Us</h5>
              <ul>
                <li>Blog</li>
                <li>FAQ</li>
                <li>API</li>
                <li>Contact Us</li>
                <li>Support</li>
              </ul>
            </div>

            <div className="my-10 leading-8 min-w-[200px]">
              <h3 className="font-bold text-xl mb-3">Get the App</h3>
              <Image
                src="/images/getapp.png"
                alt="Get App"
                width={120}
                height={120}
              />
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-4 text-center">
            <div className="flex justify-center space-x-14">
              <a href="#">Legal Notice</a>
              <a href="#">DMCA</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
