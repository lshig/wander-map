import React from 'react';
import MapboxMap from './MapboxMap';

export default function App() {
  return (
    <section>
      <a
        href="https://lizshigetoshi.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <h1 id="lizshigetoshi">Liz Shigetoshi</h1>
      </a>
      <MapboxMap />
    </section>
  );
}
