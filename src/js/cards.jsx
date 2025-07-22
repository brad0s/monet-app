import { h } from 'jsx-dom';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cardsData } from '../data/data';

export const Cards = () => {
  document.addEventListener('DOMContentLoaded', () => {
    let sections = gsap.utils.toArray('.Cards .card');
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.Cards',
        pin: true,
        scrub: 1,
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: '+=3500',
      },
    });
  });

  return (
    <div className='Cards'>
      <div className='cards-list'>
        {cardsData.map((card, index) => {
          const { id, content, year } = card;
          return (
            <div
              className='card'
              key={id}
              data-index={index}
            >
              <div className='card-inner'>
                <p className='year'>{year}</p>
                <p className='content'>{content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
