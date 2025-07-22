// import { h, Fragment } from 'start-dom-jsx';
import { h } from 'jsx-dom';
import { Hero } from './hero';
import { FixedIcon } from './fixedIcon';
import { FrameSlider } from './frameSlider';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { TextBanner } from './textBanner';
import { Cards } from './cards';
import { TileBanner } from './tileBanner';

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

ScrollSmoother.create({
  smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});

export const App = (
  <div id='smooth-wrapper'>
    <div id='smooth-content'>
      <main className='App'>
        <Hero />
        <FrameSlider />
        <TextBanner />
        <Cards />
        <TileBanner />
        <FixedIcon />
      </main>
    </div>
  </div>
);
