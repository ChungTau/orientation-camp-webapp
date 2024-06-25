'use client';

import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

type PropType = {
  imageUrls: string[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { imageUrls, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {imageUrls.map((url, index) => (
            <div className="embla__slide rounded-md h-[350px]" key={index}>
              <img src={url} className='rounded-md object-cover w-full h-full'/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;