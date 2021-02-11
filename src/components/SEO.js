import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO() {
  const seo = {
    article: null,
    author: 'Liz Shigetoshi',
    description: 'Map adventures',
    image: null,
    keywords: 'template,react,babel,webpack',
    title: 'map-play',
    twitterUsername: '@LizShigetoshi',
    url: 'https://lizshigetoshi.com/map-play/'
  };

  return (
    <Helmet title={seo.title}>
      <meta name="author" content={seo.author} />
      <meta name="description" content={seo.description} />
      {(seo.image ? true : null) && <meta name="image" content={seo.image} />}
      <meta name="keywords" content={seo.keywords} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(seo.article ? true : null) && (
        <meta property="og:type" content="article" />
      )}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {(seo.image ? true : null) && (
        <meta property="og:image" content={seo.image} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.twitterUsername && (
        <meta name="twitter:creator" content={seo.twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {(seo.image ? true : null) && (
        <meta name="twitter:image" content={seo.image} />
      )}
    </Helmet>
  );
}
