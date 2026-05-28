import Script from "next/script";

/**
 * Google Analytics 4 component.
 * Renders nothing unless NEXT_PUBLIC_GA_ID is set in the environment.
 * Set the env var in Vercel (Project Settings > Environment Variables) to:
 *   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
 * Then redeploy.
 */
export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="lazyOnload"
      />
      <Script id="ga4-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
