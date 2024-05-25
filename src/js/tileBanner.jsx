import { h } from 'jsx-dom';
import imgUrl from '../assets/the_artists_garden_in_argenteuil.webp';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const TileBanner = () => {
  const tiles = [];
  for (let i = 0; i < 100; i++) {
    tiles.push(<div className='tile' key={i}></div>);
  }

  document.addEventListener('DOMContentLoaded', () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.Tile-banner',
        start: 'top center',
        // end: `+=${window.innerHeight}`,
        toggleActions: 'play none none reverse',
      },
    });
    tl.to('.tile-grid .tile', {
      duration: 1,
      scale: 0,
      y: 60,
      // yoyo: true,
      // repeat: 1,
      ease: 'power1.inOut',
      stagger: {
        amount: 1.5,
        each: 0.1,
        from: 'random',
        grid: [10, 10],
        ease: 'power2.inOut',
      },
    });
  });

  return (
    <div className='Tile-banner'>
      <img className='full-image' src={imgUrl} alt='artwork' />
      <div className='tile-grid'>{tiles}</div>
    </div>
  );
};
