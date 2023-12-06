import { type AppType } from "next/app";
import Script from "next/script";

import { api } from "~/utils/api";

import "~/styles/globals.css";
// import "vanilla-cookieconsent/dist/cookieconsent.css";
// import CookieConsentComponent from "~/utils/cookie/CookieConsentComponent";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <Script
        defer
        data-domain="cuvar.dev"
        strategy="afterInteractive"
        src="https://plausible.io/js/plausible.js"
      ></Script>
      {/* <CookieConsentComponent /> */}
    </>
  );
};

export default api.withTRPC(MyApp);
