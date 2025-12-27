"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

export const title = "Standard Carousel";

const slides = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  image: `/gallery/gallery${index+1}.jpg`,
}));

const Example = () => (
  <div className="mx-auto w-full max-w-5xl">
    <Carousel>
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide.id}>
            <div className="relative aspect-video w-full items-center justify-center rounded-md border bg-background">
              <Image
                src={slide.image}
                alt={`Slide ${slide.id}`}
                fill
                className="object-cover"
                priority={slide.id === 1}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
);

export default Example;
