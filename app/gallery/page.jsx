
import CommonBanner from "@/components/common/CommonBanner";
import Image from "next/image";

const galleryImages = [
  "/img/connect.jpg",
  "/img/connectTwo.jpg",
  "/img/connectThree.jpg",
  "/img/connectFour.jpg",
  "/img/connectFive.jpg",
  "/img/connectSix.jpg",
  "/img/connectSeven.jpg",
];

export default function GalleryPage() {
  return (
    <>
      {/* Banner */}
      <CommonBanner title="Gallery" about="Gallery" />

      {/* Gallery Grid */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="relative w-full h-[260px] sm:h-[300px] rounded-2xl overflow-hidden group"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
