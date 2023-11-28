'use client';
import { useState } from 'react';
import MapboxAdventureMap from './components/mapbox-map';
import PageLoader from './components/page-loader';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const handleMapLoading = () => setLoading(false);

  return (
    <>
      <div className="h-full w-full relative">
        <div className="h-full w-full absolute top-0 bottom-0 left-0 right-0">
          <a
            id="lizshigetoshi"
            href="https://lizshigetoshi.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Liz Shigetoshi
          </a>
          <MapboxAdventureMap onLoaded={handleMapLoading} />
        </div>
        {loading && <PageLoader />}
      </div>
    </>
  );
}
