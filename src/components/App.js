import React from 'react';
import EventMap from './EventMap';
import SEO from './SEO';

export default function App() {
  return (
    <section>
      <SEO />
      <a
        href="https://lizshigetoshi.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <h1 id="lizshigetoshi">Liz Shigetoshi</h1>
      </a>
      <EventMap />
    </section>
  );
}
