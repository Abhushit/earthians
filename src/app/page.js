import { 
  Hero, HomePageNavbar, UseEarthiansAI, UniqueCreative, NewHorizon, PlatformGallery
} from "@/components/Homepage";
import Footer from "@/components/Footer/footer";
import Community from "@/components/Community/community";
import ArtworkSection from "@/components/ArtworkSection/artworkSection";


export default  function Home() {
  return (
    <main className="">
      <div
        className={`bg-[url('/images/homepageImage.png')] h-screen w-full bg-center bg-cover bg-no-repeat relative z-[1]`}
      >
         <div className="absolute h-screen w-full bg-black opacity-60 -z-[1]"></div>
        <HomePageNavbar />
        <Hero />
      </div>
      <UseEarthiansAI />
      <UniqueCreative />
      <NewHorizon />
      <PlatformGallery/>
      {/* <Community /> */}
      <ArtworkSection />

      <footer>
        <Footer />
      </footer>
    </main>
  );
}
