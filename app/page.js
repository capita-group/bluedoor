import ConnectWithUs from "@/components/sections/home/ConnectWithUs";
import EventHero from "@/components/sections/home/EventHero";
import FromOurMenu from "@/components/sections/home/FromOurMenu";
import GoalsHistorySection from "@/components/sections/home/GoalsHistorySection";
import HeroBanner from "@/components/sections/home/HeroBanner";
import Testimonial from "@/components/sections/home/Testimonial";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <GoalsHistorySection />
      <FromOurMenu />
      <EventHero />
      <Testimonial />
      <ConnectWithUs />
    </>
  );
}
