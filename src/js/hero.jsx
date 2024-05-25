import { h } from 'jsx-dom';
import imgUrl from '../assets/cliff-walk.webp';
import { heroData } from '../data/data';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const { headline } = heroData;

  document.addEventListener('DOMContentLoaded', () => {
    const heroTL = gsap.timeline({
      scrollTrigger: {
        trigger: '.Hero',
        start: 'top top',
        // end: () => `+= ${window.innerHeight * 4}`,
        end: `+=${window.innerHeight * 4}`,
        pin: true,
        scrub: true,
      },
    });

    // console.log(heroTL);

    const imageReveal = document.querySelector('.Hero .image-reveal');
    // console.log(imageReveal);

    heroTL
      .to('.Hero h1', {
        scale: 4,
        opacity: 0,
      })
      .to(
        '.Hero .image-reveal',
        {
          scaleY: 0,
        },
        '<+=15%'
      );
  });

  return (
    <div className='Hero'>
      <div className='image-contain'>
        <div className='image-container'>
          <div className='image-reveal'></div>
          <img className='full-image' src={imgUrl} alt='artwork' />
        </div>
      </div>
      <div className='wrap'>
        <h1 className='headline' dangerouslySetInnerHTML={{ __html: headline }}></h1>
      </div>
    </div>
  );
};
