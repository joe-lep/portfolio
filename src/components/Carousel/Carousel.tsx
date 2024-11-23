'use client';

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image, { StaticImageData } from "next/image";
import { useEffect, useMemo } from "react";

export interface CarouselProps {
  images: Array<{ imageData: StaticImageData, alt: string }>;
  height?: number;
}

export default function Carousel({ images, height = 480 }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  const renderedSlides = useMemo(
    () => images.map(image => (
      <div key={image.imageData.src} className="carousel--slide">
        <Image src={image.imageData} alt={image.alt} height={height} />
      </div>
    )),
    [images, height],
  );
  

  return (
    <div className="carousel my-16" ref={emblaRef}>
      <div className="carousel--container">
        {renderedSlides}
      </div>
    </div>
  );
}
