
import CommonBanner from "@/components/common/CommonBanner";
import AwardsSection from "@/components/sections/menu/AwardsSection";
import ChefsSection from "@/components/sections/menu/ChefsSection";
import Image from "next/image";

export default function OurChefPage() {
  return (
    <>
      {/* Banner */}
      <CommonBanner
        title="Our Chef"
        about="Chef"
      />

     
    <ChefsSection/>
    <AwardsSection/>
    </>
  );
}
