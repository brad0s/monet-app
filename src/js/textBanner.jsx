import { h } from 'jsx-dom';
import imgUrl from '../assets/banks-seine.webp';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const TextBanner = () => {
  document.addEventListener('DOMContentLoaded', () => {
    let textRowOne = gsap.utils.toArray('.Text-banner .text-row--one');
    let textRowTwo = gsap.utils.toArray('.Text-banner .text-row--two');
    let textRowThree = gsap.utils.toArray('.Text-banner .text-row--three');

    gsap.to(textRowOne, {
      x: 0,
      scrollTrigger: {
        trigger: textRowOne,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
    gsap.to(textRowTwo, {
      xPercent: -100,
      scrollTrigger: {
        trigger: textRowTwo,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
    gsap.to(textRowThree, {
      x: 0,
      scrollTrigger: {
        trigger: textRowThree,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  return (
    <div className='Text-banner'>
      <div className='grid'>
        <img className='full-image' src={imgUrl} alt='artwork' />
        <div className='text-rows'>
          <div className='text-row text-row--one'>
            <span className='text'>Monet Claude Monet</span>
          </div>
          <div className='text-row text-row--two'>
            <span className='text'>Claude Monet Claude Monet</span>
          </div>
          <div className='text-row text-row--three'>
            <span className='text'>Monet Claude Monet</span>
          </div>
        </div>
      </div>
    </div>
  );
};
