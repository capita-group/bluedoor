import CommonBanner from "@/components/common/CommonBanner";
import AwardsSection from "@/components/sections/chef/AwardsSection";
import ChefsSection from "@/components/sections/chef/ChefsSection";

export default function OurChefPage() {
  return (
    <>
      <CommonBanner title="Our Chef" about="Chef" />
      <ChefsSection />
      <AwardsSection />
    </>
  );
}
