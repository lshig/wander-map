/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: '/wander-map',
  env: {
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
  }
};

module.exports = nextConfig;
