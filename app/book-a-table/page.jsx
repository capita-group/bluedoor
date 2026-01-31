import CommonBanner from "@/components/common/CommonBanner";
import BookATableMap from "@/components/sections/bookTable/BookATableMap";
import LocationMapSection from "@/components/sections/bookTable/LocationMapSection";
import BookTableBar from "@/components/sections/menu/BookTableBar";


export default function BookATablePage() {
  return (
    <>
      <CommonBanner
        title="Book a Table"
        subtitle="Reserve your perfect dining experience"
        />
        <BookATableMap/>
      
      {/* <LocationMapSection/> */}
    </>
  );
}
