import AnimatedHeader from "../Components/animatedHeader";
import Image from "next/image";

const images = [
  {
    src: "/images/Gallery/KikisGallery1.jpg",
    alt: "Image 1",
  },
  {
    src: "/images/Gallery/KikisGallery2.jpg",
    alt: "Image 2",
  },
  {
    src: "/images/Gallery/KikisGallery3.jpg",
    alt: "Image 3",
  },
  {
    src: "/images/Gallery/KikisGallery4.jpg",
    alt: "Image 4",
  },
  {
    src: "/images/Gallery/KikisGallery5.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/Gallery/KikisGallery6.jpg",
    alt: "Image 6",
  },
  {
    src: "/images/Gallery/KikisGallery7.jpg",
    alt: "Image 7",
  },
  {
    src: "/images/Gallery/KikisGallery8.jpg",
    alt: "Image 8",
  },
  {
    src: "/images/Gallery/KikisGallery9.jpg",
    alt: "Image 9",
  },
  {
    src: "/images/Gallery/KikisGallery10.jpg",
    alt: "Image 10",
  },
  {
    src: "/images/Gallery/KikisGallery11.jpg",
    alt: "Image 11",
  },
  {
    src: "/images/Gallery/KikisGallery12.jpg",
    alt: "Image 12",
  },
  {
    src: "/images/Gallery/KikisGallery13.jpg",
    alt: "Image 13",
  },
  {
    src: "/images/Gallery/KikisGallery14.jpg",
    alt: "Image 14",
  },
  {
    src: "/images/Gallery/KikisGallery15.jpg",
    alt: "Image 15",
  },
  {
    src: "/images/Gallery/KikisGallery16.jpg",
    alt: "Image 16",
  },
  {
    src: "/images/Gallery/KikisGallery17.jpg",
    alt: "Image 17",
  },
  {
    src: "/images/Gallery/KikisGallery18.jpg",
    alt: "Image 18",
  },
  {
    src: "/images/Gallery/KikisGallery19.jpg",
    alt: "Image 19",
  },
  {
    src: "/images/Gallery/KikisGallery20.jpg",
    alt: "Image 20",
  },
  {
    src: "/images/Gallery/KikisGallery21.jpg",
    alt: "Image 21",
  },
  {
    src: "/images/Gallery/KikisGallery22.jpg",
    alt: "Image 22",
  },
  {
    src: "/images/Gallery/KikisGallery23.jpg",
    alt: "Image 23",
  },
  {
    src: "/images/Gallery/KikisGallery24.jpg",
    alt: "Image 24",
  },
  {
    src: "/images/Gallery/KikisGallery25.jpg",
    alt: "Image 25",
  },
  {
    src: "/images/Gallery/KikisGallery26.jpg",
    alt: "Image 26",
  },
  {
    src: "/images/Gallery/KikisGallery27.jpg",
    alt: "Image 27",
  },
];

export default function Gallery() {
  return (
    <div className="md:ml-20">
      <AnimatedHeader
        imageSrc="/images/KikisHomePage.webp"
        altText={"Gallery Image"}
        headerText={"View Our Gallery"}
      />
      <div className="max-w-[1400px] p-10 mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={500}
              height={500}
              className="mx-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
