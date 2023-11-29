'use client';
import { useState } from 'react';
import MapboxAdventureMap from './components/mapbox-adventure-map';
import PageLoader from './components/page-loader';
import { roboto_mono } from './util/fonts';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const handleMapLoading = () => setLoading(false);

  return (
    <>
      <div className="h-full w-full absolute top-0 bottom-0 left-0 right-0">
        <a
          className={`${roboto_mono.className} text-secondary-dark text-2xl hover:tracking-wide bg-secondary-light rounded-l-sm my-2.5 mx-0 py-1 px-2 absolute right-0 z-10 cursor-pointer font-bold uppercase`}
          href="https://lizshigetoshi.com"
          id="lizshigetoshi"
          rel="noopener noreferrer"
          target="_blank"
        >
          Liz Shigetoshi
        </a>
        <MapboxAdventureMap onLoaded={handleMapLoading} />
      </div>
      {loading && <PageLoader />}
    </>
  );
}
