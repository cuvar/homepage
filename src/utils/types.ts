declare global {
  interface Window {
    CC: CookieConsent;
  }
}

export type NavItem = {
  text: string;
  href: string;
};
export {};
