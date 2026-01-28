import CommonBanner from "@/components/common/CommonBanner";
import LocationMapSection from "@/components/sections/bookTable/LocationMapSection";


export default function BookATablePage() {
  return (
    <>
      <CommonBanner
        title="Book a Table"
        subtitle="Reserve your perfect dining experience"
      />
      <LocationMapSection/>
    </>
  );
}
