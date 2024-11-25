import { MTTImage } from "../Components/MTTImage";
import Image from "next/image";
import AnimatedHeader from "../Components/animatedHeader";

const images = [
  {
    src: "/images/MeetImages/KikisMeet1.jpg",
    alt: "Image 1",
    hoverText: "Hover Text 1",
    className: "md:mr-4 mb-4",
  },
  {
    src: "/images/MeetImages/KikisMeet2.jpg",
    alt: "Image 2",
    hoverText: "Hover Text 2",
    className: "md:ml-4 mb-20",
  },
  {
    src: "/images/MeetImages/KikisMeet3.jpg",
    alt: "Image 3",
    hoverText: "Hover Text 3",
    className: "md:mr-4 my-4",
  },
  {
    src: "/images/MeetImages/KikisMeet4.jpg",
    alt: "Image 4",
    hoverText: "Hover Text 4",
    className: "md:ml-4 my-4",
  },
  {
    src: "/images/MeetImages/KikisMeet5.jpg",
    alt: "Image 5",
    hoverText: "Hover Text 5",
    className: "md:mr-4 mt-4",
  },
  {
    src: "/images/MeetImages/KikisMeet6.jpg",
    alt: "Image 6",
    hoverText: "This is a longer hover text to demonstrate wrapping",
    className: "md:ml-4 mt-4",
  },
];
export default function ImageHoverGrid() {
  return (
    <>
    <div className="bg-customBlue md:ml-20">
      <AnimatedHeader
        imageSrc="/images/KikisHomePage.webp"
        altText={"Meet The Team Image"}
        headerText={"Meet The Team"}
      />
      <Image
        src="/images/MeetImages/KikisMeetALL.jpg"
        alt="The Entire Team"
        width={1400}
        height={1400}
        className="lg:mx-auto p-10"
      />
      <div className="max-w-[1400px] p-10 mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {images.map((image, index) => (
            <MTTImage key={index} {...image} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
