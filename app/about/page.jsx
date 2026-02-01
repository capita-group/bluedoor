// app/about/page.jsx

import CommonBanner from "@/components/common/CommonBanner";
import AboutShowcase from "@/components/sections/about/AboutShowcase";
import BookEvent from "@/components/sections/about/BookEvent";
import DrinkMarquee from "@/components/sections/about/DrinkMarquee";
import InstagramStrip from "@/components/sections/about/InstagramStrip";
import VideoHero from "@/components/sections/about/VideoHero";
import EventHero from "@/components/sections/home/EventHero";

export default function AboutPage() {
  return (
    <>
     <CommonBanner title="About Us" about="About" />
     <AboutShowcase/>
     <DrinkMarquee/>
     <BookEvent/>
     <VideoHero
      poster="/img/drink1.jpg"
      videoSrc="/video/hero.mp4"
    />
    <InstagramStrip/>

    </>
  );
}
