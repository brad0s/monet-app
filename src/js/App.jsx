// import { h, Fragment } from 'start-dom-jsx';
import { h } from 'jsx-dom';
import { Hero } from './hero';
import { FixedIcon } from './fixedIcon';
import { FrameSlider } from './frameSlider';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextBanner } from './textBanner';
import { Cards } from './cards';
import { TileBanner } from './tileBanner';

gsap.registerPlugin(ScrollTrigger);

export const App = (
  <main className='App'>
    <Hero />
    <FrameSlider />
    <TextBanner />
    <Cards />
    <TileBanner />

    <FixedIcon />
  </main>
);
