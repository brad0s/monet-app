import { h } from 'jsx-dom';
import frameUrl from '../assets/art-frame.webp';
import imgUrl from '../assets/the_artists_garden_in_argenteuil.webp';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { frameSliderData } from '../data/data';

// gsap.registerPlugin(ScrollTrigger);

export const FrameSlider = () => {
  const { slides } = frameSliderData;

  function getImageUrl(name) {
    return new URL(`../assets/${name}`, import.meta.url).href;
  }

  document.addEventListener('DOMContentLoaded', () => {
    let slides = gsap.utils.toArray('.Frame-slider .slide');
    let details = gsap.utils.toArray('.Frame-slider .slide-image-info');

    // console.log({
    //   height: window.innerHeight,
    //   length: slides.length,
    //   total: window.innerHeight * slides.length,
    // });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.Frame-slider',
        start: 'top top',
        end: `+=${innerWidth * 4}`,
        pin: true,
        scrub: 1,
        ease: 'none',
        // markers: true,
        snap: {
          snapTo: 1 / (slides.length - 1),
          duration: { min: 0.2, max: 0.5 },
          delay: 0.2,
        },
      },
    });

    tl.to(slides, {
      xPercent: -100 * (slides.length - 1),
      ease: 'none',
    }).to(
      details,
      {
        xPercent: -100 * (details.length - 1),
        ease: 'none',
      },
      '<'
    );
  });

  return (
    <div className='Frame-slider'>
      <div className='wrap'>
        <div className='frame-container'>
          <img
            src={frameUrl}
            alt='frame'
          />
          <div className='image-container'>
            <div className='slides-wrapper'>
              {slides.map((slide, index) => {
                const { image } = slide;
                return (
                  <div
                    className='slide'
                    data-index={index}
                  >
                    <img
                      src={getImageUrl(image)}
                      alt='art'
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className='images-info'>
          {slides.map((slide, index) => {
            const { date, name } = slide;
            return (
              <div
                className='slide-image-info'
                data-index={index}
              >
                <p className='name'>{name}</p>
                <p className='date'>{date}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
