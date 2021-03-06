import type { AppProps } from "next/app";
import "../styles/globals.css";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-9QHW6VDTQF`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9QHW6VDTQF', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <NextSeo
        title="Mayank | Software Developer"
        titleTemplate="Mayank | Software Developer"
        defaultTitle="Mayank | Software Developer"
        description="Hey! I'm Mayank, A Software Developer, Researcher and a Learner!"
        openGraph={{
          url: "https://www.mayank.tech/",
          title: "Mayank | Software Developer",
          description:
            "Hey! I'm Mayank, A Software Developer, Researcher and a Learner!",
          images: [
            {
              url: "",
              width: 800,
              height: 420,
              alt: "Mayank | Software Developer",
            },
          ],
        }}
        twitter={{
          handle: "@_mayankvats",
          site: "@_mayankvats",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Software Developer, mayank, mayankv, Web Developer, web development, smart contract development, freelance, web developer, tech enthusiast, open source, moonblock, Moon Block, moonBlock",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/png" href="/assests/avatar.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
