import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import CookieConsentComponent from "~/utils/cookie/CookieConsentComponent";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <script
        defer
        data-domain={"cuvar.dev"}
        type="text/plain"
        data-cookiecategory="analytics"
        src="https://plausible.vaevo.de/js/script.js"
      ></script>
      <CookieConsentComponent />
    </>
  );
};

export default api.withTRPC(MyApp);
