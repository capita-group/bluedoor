import CommonBanner from "@/components/common/CommonBanner";
import BookTableBar from "@/components/sections/menu/BookTableBar";
import MenuSection from "@/components/sections/menu/MenuSection";

export default function MenuPage() {
  return (
    <>
      <CommonBanner title="Our Menu" about="Menu" />
      <MenuSection/>
      <BookTableBar/>
    </>
  );
}
