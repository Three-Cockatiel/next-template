import Head from 'next/head';
import { useRouter } from 'next/router';

import { seoMeta } from '@/config/seo';

export default function SeoHead() {
  const router = useRouter();

  return (
    <Head>
      <title>{seoMeta.title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.png" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" href="/favicon.ico" type="image/x-icon" />
      <meta data-rh="true" property="og:site_name" content={seoMeta?.name} />
      <meta name="keywords" content={seoMeta.keywords} />
      <meta name="robots" content={seoMeta.robots} />
      <meta content={seoMeta.description} name="description" />
      <meta property="og:url" content={`${seoMeta.url}${router.asPath}`} />
      <link rel="canonical" href={`${seoMeta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property="og:type" content={seoMeta.type} />
      <meta property="og:site_name" content={seoMeta.siteName} />
      <meta property="og:description" content={seoMeta.description} />
      <meta property="og:title" content={seoMeta.title} />
      <meta name="image" property="og:image" content={seoMeta.image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@F2aldi" />
      <meta name="twitter:title" content={seoMeta.title} />
      <meta name="twitter:description" content={seoMeta.description} />
      <meta name="twitter:image" content={seoMeta.image} />
      <meta name="author" property="article:author" content={seoMeta.author} />
      {/* Favicons */}
      <link rel="icon" href="your href" sizes="your size" type="image/x-icon" />
      {/* Windows 8 app icon */}
      <meta name="msapplication-TileColor" content="#F53838" />
      <meta name="msapplication-TileImage" content="/favicon.png" />
      {/* Accent color on supported browser */}
      <meta name="theme-color" content="#F53838" />
      {/* bing搜索 */}
      <meta name="msvalidate.01" content="DB4430375E453AE8D2B9B2AF9D562EE5" />
      {/* 白度搜索 */}
      <meta name="baidu-site-verification" content="codeva-ENO1NMs7gG" />
      {/* Clarity埋点 */}
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "lex6ygv0t6");`,
        }}
      />
    </Head>
  );
}
