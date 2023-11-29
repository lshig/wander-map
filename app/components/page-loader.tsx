import { roboto_mono } from '../util/fonts';

export default function PageLoader() {
  return (
    <div
      className={`${roboto_mono.className} bg-primary-light text-primary-dark tracking-wider w-screen h-screen grid grid-cols-1 content-center absolute top-0 bottom-0 left-0 right-0 z-30`}
    >
      <h2 className="text-center uppercase text-base">Loading</h2>
      <h1 className="text-center uppercase text-2xl">Wander Map</h1>
    </div>
  );
}
